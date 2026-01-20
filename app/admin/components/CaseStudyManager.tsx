'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Database } from '@/types/database';
import { recordAuditLog } from '@/src/utils/auditLog';
import { getErrorMessage } from '@/src/utils/error';

type CaseStudy = Database['public']['Tables']['casestudies']['Row'];
type CaseStudyInsert = Database['public']['Tables']['casestudies']['Insert'];
type CaseStudyUpdate = Database['public']['Tables']['casestudies']['Update'];

export default function CaseStudyManager() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCase, setEditingCase] = useState<CaseStudy | null>(null);
  const [formData, setFormData] = useState<Partial<CaseStudyInsert>>({
    case_title: '',
    industry_type: '',
    installation_env: '',
    product_model_used: '',
    total_area_sqm: null,
    resolution_pixels: '',
    challenge: '',
    solution_provided: '',
    result_impact: '',
    project_date: '',
  });

  useEffect(() => {
    loadCaseStudies();
  }, []);

  const loadCaseStudies = async () => {
    setIsLoading(true);
    console.log('[CaseStudyManager] 프로젝트 사례 데이터 로드 시작');

    try {
      const { data, error } = await supabase
        .from('casestudies')
        .select('*')
        .order('project_date', { ascending: false });

      if (error) {
        console.error('[CaseStudyManager] 데이터 로드 에러:', error);
        throw error;
      }

      console.log('[CaseStudyManager] 데이터 로드 성공:', data?.length || 0, '건');
      setCaseStudies(data || []);
    } catch (error) {
      console.error('[CaseStudyManager] 로드 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'total_area_sqm' ? (value ? parseFloat(value) : null) : value,
    }));
  };

  const handleOpenModal = (caseStudy?: CaseStudy) => {
    if (caseStudy) {
      setEditingCase(caseStudy);
      setFormData({
        case_title: caseStudy.case_title,
        industry_type: caseStudy.industry_type,
        installation_env: caseStudy.installation_env,
        product_model_used: caseStudy.product_model_used || '',
        total_area_sqm: caseStudy.total_area_sqm,
        resolution_pixels: caseStudy.resolution_pixels || '',
        challenge: caseStudy.challenge || '',
        solution_provided: caseStudy.solution_provided || '',
        result_impact: caseStudy.result_impact || '',
        project_date: caseStudy.project_date || '',
      });
    } else {
      setEditingCase(null);
      setFormData({
        case_title: '',
        industry_type: '',
        installation_env: '',
        product_model_used: '',
        total_area_sqm: null,
        resolution_pixels: '',
        challenge: '',
        solution_provided: '',
        result_impact: '',
        project_date: '',
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingCase(null);
    setFormData({
      case_title: '',
      industry_type: '',
      installation_env: '',
      product_model_used: '',
      total_area_sqm: null,
      resolution_pixels: '',
      challenge: '',
      solution_provided: '',
      result_impact: '',
      project_date: '',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[CaseStudyManager] 폼 제출 시작:', { editingCase, formData });

    try {
      if (editingCase) {
        // 수정
        const updateData: CaseStudyUpdate = {
          case_title: formData.case_title,
          industry_type: formData.industry_type,
          installation_env: formData.installation_env,
          product_model_used: formData.product_model_used || null,
          total_area_sqm: formData.total_area_sqm,
          resolution_pixels: formData.resolution_pixels || null,
          challenge: formData.challenge || null,
          solution_provided: formData.solution_provided || null,
          result_impact: formData.result_impact || null,
          project_date: formData.project_date || null,
        };

        const { error } = await supabase
          .from('casestudies')
          .update(updateData)
          .eq('case_id', editingCase.case_id);

        if (error) throw error;
        console.log('[CaseStudyManager] 수정 성공');
        await recordAuditLog({
          action: 'case_update',
          entity: 'casestudies',
          entityId: editingCase.case_id,
          detail: { case_title: formData.case_title },
        });
      } else {
        // 추가
        const insertData: CaseStudyInsert = {
          case_title: formData.case_title!,
          industry_type: formData.industry_type!,
          installation_env: formData.installation_env!,
          product_model_used: formData.product_model_used || null,
          total_area_sqm: formData.total_area_sqm,
          resolution_pixels: formData.resolution_pixels || null,
          challenge: formData.challenge || null,
          solution_provided: formData.solution_provided || null,
          result_impact: formData.result_impact || null,
          project_date: formData.project_date || null,
        };

        const { data, error } = await supabase
          .from('casestudies')
          .insert([insertData])
          .select()
          .single();

        if (error) throw error;
        console.log('[CaseStudyManager] 추가 성공');
        await recordAuditLog({
          action: 'case_create',
          entity: 'casestudies',
          entityId: data?.case_id,
          detail: { case_title: formData.case_title },
        });
      }

      await loadCaseStudies();
      handleCloseModal();
    } catch (error) {
      const message = getErrorMessage(error);
      console.error('[CaseStudyManager] 저장 실패:', error);
      alert(`저장에 실패했습니다. ${message}`);
    }
  };

  const handleDelete = async (caseId: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    console.log('[CaseStudyManager] 삭제 시작:', caseId);

    try {
      const { error } = await supabase
        .from('casestudies')
        .delete()
        .eq('case_id', caseId);

      if (error) throw error;
      console.log('[CaseStudyManager] 삭제 성공');
      await loadCaseStudies();
      await recordAuditLog({
        action: 'case_delete',
        entity: 'casestudies',
        entityId: caseId,
      });
    } catch (error) {
      const message = getErrorMessage(error);
      console.error('[CaseStudyManager] 삭제 실패:', error);
      alert(`삭제에 실패했습니다. ${message}`);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-gray-600">Loading case studies...</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* 헤더 및 추가 버튼 */}
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">프로젝트 사례 관리</h2>
        <button
          onClick={() => handleOpenModal()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          + 새 사례 추가
        </button>
      </div>

      {/* 사례 목록 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  사례명
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  산업 분야
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  설치 환경
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  면적 (㎡)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  프로젝트 일자
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  작업
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {caseStudies.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                    등록된 사례가 없습니다.
                  </td>
                </tr>
              ) : (
                caseStudies.map((caseStudy) => (
                  <tr key={caseStudy.case_id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {caseStudy.case_id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{caseStudy.case_title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {caseStudy.industry_type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {caseStudy.installation_env}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {caseStudy.total_area_sqm ? `${caseStudy.total_area_sqm} ㎡` : '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {caseStudy.project_date
                        ? new Date(caseStudy.project_date).toLocaleDateString('ko-KR')
                        : '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                      <button
                        onClick={() => handleOpenModal(caseStudy)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        수정
                      </button>
                      <button
                        onClick={() => handleDelete(caseStudy.case_id)}
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
        총 {caseStudies.length}개의 사례가 등록되어 있습니다.
      </div>

      {/* 추가/수정 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* 모달 헤더 */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                {editingCase ? '사례 수정' : '새 사례 추가'}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 필수 필드 */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    사례명 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="case_title"
                    value={formData.case_title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    산업 분야 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="industry_type"
                    value={formData.industry_type}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    설치 환경 <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="installation_env"
                    value={formData.installation_env}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">선택하세요</option>
                    <option value="실내">실내</option>
                    <option value="실외">실외</option>
                    <option value="특수">특수</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    제품 모델
                  </label>
                  <input
                    type="text"
                    name="product_model_used"
                    value={formData.product_model_used || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    총 면적 (㎡)
                  </label>
                  <input
                    type="number"
                    name="total_area_sqm"
                    value={formData.total_area_sqm || ''}
                    onChange={handleInputChange}
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    해상도
                  </label>
                  <input
                    type="text"
                    name="resolution_pixels"
                    value={formData.resolution_pixels || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    프로젝트 일자
                  </label>
                  <input
                    type="date"
                    name="project_date"
                    value={formData.project_date || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* 텍스트 영역 */}
              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    도전 과제
                  </label>
                  <textarea
                    name="challenge"
                    value={formData.challenge || ''}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    제공 솔루션
                  </label>
                  <textarea
                    name="solution_provided"
                    value={formData.solution_provided || ''}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    결과 및 영향
                  </label>
                  <textarea
                    name="result_impact"
                    value={formData.result_impact || ''}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
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
                  {editingCase ? '수정' : '추가'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

