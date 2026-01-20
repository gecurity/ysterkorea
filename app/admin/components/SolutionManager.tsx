'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { Database } from '@/types/database';
import { recordAuditLog } from '@/src/utils/auditLog';
import { getErrorMessage } from '@/src/utils/error';

// Solutions 테이블 타입 정의
// 주의: 관리자 컴포넌트이므로 Supabase 인증(Authentication) 검사가 필요합니다.
// 현재는 middleware.ts에서 admin_session 쿠키를 통해 보호되고 있습니다.
type Solution = Database['public']['Tables']['Solutions']['Row'];
type SolutionInsert = Database['public']['Tables']['Solutions']['Insert'];
type SolutionUpdate = Database['public']['Tables']['Solutions']['Update'];

export default function SolutionManager() {
  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSolution, setEditingSolution] = useState<Solution | null>(null);
  const [formData, setFormData] = useState<Partial<SolutionInsert>>({
    title: '',
    slug: '',
    short_description: '',
    technical_specs: null,
    business_value: '',
    is_active: true,
  });
  const [technicalSpecsText, setTechnicalSpecsText] = useState('');

  useEffect(() => {
    loadSolutions();
  }, []);

  const loadSolutions = async () => {
    setIsLoading(true);
    console.log('[SolutionManager] 솔루션 데이터 로드 시작');

    try {
      const { data, error } = await supabase
        .from('Solutions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('[SolutionManager] 데이터 로드 에러:', error);
        throw error;
      }

      console.log('[SolutionManager] 데이터 로드 성공:', data?.length || 0, '건');
      setSolutions((data as Solution[]) || []);
    } catch (error) {
      console.error('[SolutionManager] 로드 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTechnicalSpecsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTechnicalSpecsText(e.target.value);
  };

  const handleOpenModal = (solution?: Solution) => {
    if (solution) {
      setEditingSolution(solution);
      setFormData({
        title: solution.title,
        slug: solution.slug,
        short_description: solution.short_description || '',
        technical_specs: solution.technical_specs,
        business_value: solution.business_value || '',
        is_active: solution.is_active,
      });
      setTechnicalSpecsText(
        solution.technical_specs ? JSON.stringify(solution.technical_specs, null, 2) : ''
      );
    } else {
      setEditingSolution(null);
      setFormData({
        title: '',
        slug: '',
        short_description: '',
        technical_specs: null,
        business_value: '',
        is_active: true,
      });
      setTechnicalSpecsText('');
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingSolution(null);
    setFormData({
      title: '',
      slug: '',
      short_description: '',
      technical_specs: null,
      business_value: '',
      is_active: true,
    });
    setTechnicalSpecsText('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[SolutionManager] 폼 제출 시작:', { editingSolution, formData });

    try {
      // technical_specs JSON 파싱
      let parsedTechnicalSpecs: Database['public']['Tables']['Solutions']['Row']['technical_specs'] = null;
      if (technicalSpecsText.trim()) {
        try {
          parsedTechnicalSpecs = JSON.parse(technicalSpecsText) as Database['public']['Tables']['Solutions']['Row']['technical_specs'];
        } catch (parseError) {
          alert('technical_specs JSON 형식이 올바르지 않습니다.');
          return;
        }
      }

      if (editingSolution) {
        // 수정
        const updateData: SolutionUpdate = {
          title: formData.title,
          slug: formData.slug,
          short_description: formData.short_description || null,
          technical_specs: parsedTechnicalSpecs,
          business_value: formData.business_value || null,
          is_active: formData.is_active,
        };

        const { error } = await supabase
          .from('Solutions')
          .update(updateData)
          .eq('solution_id', editingSolution.solution_id);

        if (error) throw error;
        console.log('[SolutionManager] 수정 성공');
        await recordAuditLog({
          action: 'solution_update',
          entity: 'Solutions',
          entityId: editingSolution.solution_id,
          detail: { title: formData.title },
        });
      } else {
        // 추가
        if (!formData.title || !formData.slug) {
          alert('제목과 슬러그는 필수입니다.');
          return;
        }

        const insertData: SolutionInsert = {
          title: formData.title!,
          slug: formData.slug!,
          short_description: formData.short_description || null,
          technical_specs: parsedTechnicalSpecs,
          business_value: formData.business_value || null,
          is_active: formData.is_active ?? true,
        };

        const { data, error } = await supabase
          .from('Solutions')
          .insert([insertData])
          .select()
          .single();

        if (error) throw error;
        console.log('[SolutionManager] 추가 성공');
        await recordAuditLog({
          action: 'solution_create',
          entity: 'Solutions',
          entityId: data?.solution_id,
          detail: { title: formData.title },
        });
      }

      await loadSolutions();
      handleCloseModal();
    } catch (error) {
      console.error('[SolutionManager] 저장 실패:', error);
      alert(`저장에 실패했습니다: ${getErrorMessage(error)}`);
    }
  };

  const handleDelete = async (solutionId: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    console.log('[SolutionManager] 삭제 시작:', solutionId);

    try {
      const { error } = await supabase
        .from('Solutions')
        .delete()
        .eq('solution_id', solutionId);

      if (error) throw error;
      console.log('[SolutionManager] 삭제 성공');
      await loadSolutions();
      await recordAuditLog({
        action: 'solution_delete',
        entity: 'Solutions',
        entityId: solutionId,
      });
    } catch (error) {
      console.error('[SolutionManager] 삭제 실패:', error);
      alert(`삭제에 실패했습니다: ${getErrorMessage(error)}`);
    }
  };

  const handleToggleActive = async (solution: Solution) => {
    console.log('[SolutionManager] 활성 상태 토글 시작:', solution.solution_id);

    try {
      const { error } = await supabase
        .from('Solutions')
        .update({ is_active: !solution.is_active })
        .eq('solution_id', solution.solution_id);

      if (error) throw error;
      console.log('[SolutionManager] 활성 상태 토글 성공');
      await loadSolutions();
      await recordAuditLog({
        action: 'solution_toggle_active',
        entity: 'Solutions',
        entityId: solution.solution_id,
        detail: { is_active: !solution.is_active },
      });
    } catch (error) {
      console.error('[SolutionManager] 활성 상태 토글 실패:', error);
      alert(`상태 변경에 실패했습니다: ${getErrorMessage(error)}`);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-gray-600">Loading solutions...</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* 헤더 및 추가 버튼 */}
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">제품 솔루션 관리</h2>
        <button
          onClick={() => handleOpenModal()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          + 새 솔루션 추가
        </button>
      </div>

      {/* 솔루션 목록 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  제목
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  슬러그
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  상태
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  생성일
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  작업
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {solutions.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                    등록된 솔루션이 없습니다.
                  </td>
                </tr>
              ) : (
                solutions.map((solution) => (
                  <tr key={solution.solution_id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {solution.solution_id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{solution.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <Link
                        href={`/solutions/${solution.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {solution.slug}
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleToggleActive(solution)}
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          solution.is_active
                            ? 'bg-green-100 text-green-800 hover:bg-green-200'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                      >
                        {solution.is_active ? '활성' : '비활성'}
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {new Date(solution.created_at).toLocaleDateString('ko-KR')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                      <button
                        onClick={() => handleOpenModal(solution)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        수정
                      </button>
                      <button
                        onClick={() => handleDelete(solution.solution_id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        삭제
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 통계 정보 */}
      <div className="mt-4 text-sm text-gray-600">
        총 {solutions.length}개의 솔루션이 등록되어 있습니다.
      </div>

      {/* 추가/수정 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* 모달 헤더 */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                {editingSolution ? '솔루션 수정' : '새 솔루션 추가'}
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {/* 모달 내용 */}
            <form onSubmit={handleSubmit} className="px-6 py-6">
              <div className="space-y-4">
                {/* 제목 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    제목 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* 슬러그 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    슬러그 (URL) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleInputChange}
                    required
                    placeholder="예: indoor-led-display"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* 짧은 설명 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    짧은 설명
                  </label>
                  <textarea
                    name="short_description"
                    value={formData.short_description || ''}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* 기술 스펙 (JSON) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    기술 스펙 (JSON 형식)
                  </label>
                  <textarea
                    value={technicalSpecsText}
                    onChange={handleTechnicalSpecsChange}
                    rows={6}
                    placeholder='{"해상도": "4K", "밝기": "5000nit", ...}'
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    유효한 JSON 형식으로 입력하세요. 빈 값도 가능합니다.
                  </p>
                </div>

                {/* 비즈니스 가치 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    비즈니스 가치
                  </label>
                  <textarea
                    name="business_value"
                    value={formData.business_value || ''}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* 활성 상태 */}
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="is_active"
                      checked={formData.is_active ?? true}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, is_active: e.target.checked }))
                      }
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-700">활성 상태</span>
                  </label>
                </div>
              </div>

              {/* 모달 푸터 */}
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {editingSolution ? '수정' : '추가'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

