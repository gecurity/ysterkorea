'use client';

import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import { Database } from '@/types/database';
import { getErrorMessage } from '@/src/utils/error';

type CaseStudy = Database['public']['Tables']['casestudies']['Row'];

export default function CaseStudySearch() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [filteredStudies, setFilteredStudies] = useState<CaseStudy[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 필터 상태
  const [filters, setFilters] = useState({
    installation_env: '',
    industry_type: '',
    minArea: '',
    maxArea: '',
  });

  // 고유한 필터 옵션 추출
  const uniqueInstallationEnvs = Array.from(new Set(caseStudies.map(c => c.installation_env)));
  const uniqueIndustryTypes = Array.from(new Set(caseStudies.map(c => c.industry_type)));
  
  // 설치 환경 옵션: 기본 옵션(실내, 실외) + 데이터베이스에서 가져온 고유 값들
  const installationEnvOptions = [
    '실내',
    '실외',
    ...uniqueInstallationEnvs.filter(env => env !== '실내' && env !== '실외')
  ];

  const applyFilters = useCallback(() => {
    let filtered = [...caseStudies];

    if (filters.installation_env) {
      filtered = filtered.filter(c => c.installation_env === filters.installation_env);
    }

    if (filters.industry_type) {
      filtered = filtered.filter(c => c.industry_type === filters.industry_type);
    }

    if (filters.minArea) {
      const min = parseFloat(filters.minArea);
      filtered = filtered.filter(c => c.total_area_sqm !== null && c.total_area_sqm >= min);
    }
    if (filters.maxArea) {
      const max = parseFloat(filters.maxArea);
      filtered = filtered.filter(c => c.total_area_sqm !== null && c.total_area_sqm <= max);
    }

    console.log('[CaseStudySearch] 필터 적용 결과:', filtered.length, '건');
    setFilteredStudies(filtered);
  }, [caseStudies, filters]);

  // 데이터 로드
  useEffect(() => {
    loadCaseStudies();
  }, []);

  // 필터 적용
  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  const loadCaseStudies = async () => {
    setIsLoading(true);
    console.log('[CaseStudySearch] 사례 연구 데이터 로드 시작');

    try {
      const { data, error } = await supabase
        .from('casestudies')
        .select('*')
        .order('project_date', { ascending: false });

      if (error) {
        console.error('[CaseStudySearch] 데이터 로드 에러:', error);
        throw error;
      }

      console.log('[CaseStudySearch] 데이터 로드 성공:', data?.length || 0, '건');
      setCaseStudies(data || []);
      setFilteredStudies(data || []);
    } catch (error) {
      console.error('[CaseStudySearch] 로드 실패:', getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterChange = (name: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      installation_env: '',
      industry_type: '',
      minArea: '',
      maxArea: '',
    });
  };

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">데이터를 불러오는 중...</p>
      </div>
    );
  }

  return (
    <div>
      {/* 필터 섹션 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">필터</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* 설치 환경 필터 */}
          <div>
            <label htmlFor="installation_env" className="block text-sm font-medium text-gray-700 mb-2">
              설치 환경
            </label>
            <select
              id="installation_env"
              value={filters.installation_env}
              onChange={(e) => handleFilterChange('installation_env', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">전체</option>
              {installationEnvOptions.map(env => (
                <option key={env} value={env}>{env}</option>
              ))}
            </select>
          </div>

          {/* 산업 분야 필터 */}
          <div>
            <label htmlFor="industry_type" className="block text-sm font-medium text-gray-700 mb-2">
              산업 분야
            </label>
            <select
              id="industry_type"
              value={filters.industry_type}
              onChange={(e) => handleFilterChange('industry_type', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">전체</option>
              {uniqueIndustryTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* 최소 면적 */}
          <div>
            <label htmlFor="minArea" className="block text-sm font-medium text-gray-700 mb-2">
              최소 면적 (㎡)
            </label>
            <input
              type="number"
              id="minArea"
              value={filters.minArea}
              onChange={(e) => handleFilterChange('minArea', e.target.value)}
              placeholder="0"
              min="0"
              step="0.01"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* 최대 면적 */}
          <div>
            <label htmlFor="maxArea" className="block text-sm font-medium text-gray-700 mb-2">
              최대 면적 (㎡)
            </label>
            <input
              type="number"
              id="maxArea"
              value={filters.maxArea}
              onChange={(e) => handleFilterChange('maxArea', e.target.value)}
              placeholder="무제한"
              min="0"
              step="0.01"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* 필터 초기화 버튼 */}
        <div className="mt-4">
          <button
            onClick={resetFilters}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 underline"
          >
            필터 초기화
          </button>
        </div>
      </div>

      {/* 결과 카운트 */}
      <div className="mb-6">
        <p className="text-gray-600">
          총 <span className="font-semibold text-gray-900">{filteredStudies.length}</span>개의 사례가 있습니다.
        </p>
      </div>

      {/* 사례 카드 그리드 */}
      {filteredStudies.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <p className="text-gray-600">조건에 맞는 사례가 없습니다.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudies.map((study) => (
            <div
              key={study.case_id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{study.case_title}</h3>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p><span className="font-medium">산업 분야:</span> {study.industry_type}</p>
                  <p><span className="font-medium">설치 환경:</span> {study.installation_env}</p>
                  {study.total_area_sqm && (
                    <p><span className="font-medium">면적:</span> {study.total_area_sqm} ㎡</p>
                  )}
                  {study.product_model_used && (
                    <p><span className="font-medium">제품 모델:</span> {study.product_model_used}</p>
                  )}
                  {study.project_date && (
                    <p><span className="font-medium">프로젝트 일자:</span> {new Date(study.project_date).toLocaleDateString('ko-KR')}</p>
                  )}
                </div>
                {study.challenge && (
                  <div className="mb-3">
                    <p className="text-sm font-medium text-gray-700 mb-1">도전 과제:</p>
                    <p className="text-sm text-gray-600 line-clamp-2">{study.challenge}</p>
                  </div>
                )}
                {study.solution_provided && (
                  <div className="mb-3">
                    <p className="text-sm font-medium text-gray-700 mb-1">제공 솔루션:</p>
                    <p className="text-sm text-gray-600 line-clamp-2">{study.solution_provided}</p>
                  </div>
                )}
                {study.result_impact && (
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">결과 및 영향:</p>
                    <p className="text-sm text-gray-600 line-clamp-2">{study.result_impact}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

