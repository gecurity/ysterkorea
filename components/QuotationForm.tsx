'use client';

import { useState } from 'react';
import { Database } from '@/types/database';
import { getErrorMessage } from '@/src/utils/error';

type LeadsQuotationInsert = Database['public']['Tables']['leads_quotation']['Insert'];

export default function QuotationForm() {
  const [formData, setFormData] = useState<LeadsQuotationInsert>({
    project_name: '',
    company_name: '',
    inquirer_name: '',
    contact_email: '',
    contact_phone: '',
    required_solution: '',
    expected_size: '',
    expected_timeline: '',
    budget_range: '',
    detailed_requirement: '',
    lead_status: 'New',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [category, setCategory] = useState('general');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    // 필수 필드 검증
    if (!formData.project_name?.trim()) {
      setErrorMessage('프로젝트명을 입력해주세요.');
      return false;
    }
    if (!formData.company_name?.trim()) {
      setErrorMessage('회사명을 입력해주세요.');
      return false;
    }
    if (!formData.contact_email?.trim()) {
      setErrorMessage('이메일을 입력해주세요.');
      return false;
    }
    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.contact_email)) {
      setErrorMessage('올바른 이메일 형식을 입력해주세요.');
      return false;
    }
    if (!formData.contact_phone?.trim()) {
      setErrorMessage('연락처를 입력해주세요.');
      return false;
    }
    if (!formData.required_solution?.trim()) {
      setErrorMessage('필요한 솔루션을 입력해주세요.');
      return false;
    }
    if (!formData.expected_size?.trim()) {
      setErrorMessage('예상 규모를 입력해주세요.');
      return false;
    }
    // 개인정보 동의 확인
    if (!privacyAgreed) {
      setErrorMessage('개인정보 수집 및 이용에 동의해주세요.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSubmitStatus('idle');

    // 프론트엔드 유효성 검사
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    console.log('[QuotationForm] 폼 제출 시작:', formData);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}));
        console.error('[QuotationForm] 서버 응답 에러:', response.status, errorBody);
        throw new Error(errorBody?.message || '견적 문의 제출에 실패했습니다.');
      }

      const responseData = await response.json();
      console.log('[QuotationForm] 데이터 저장 성공:', responseData);
      setSubmitStatus('success');
      
      // 폼 초기화
      setFormData({
        project_name: '',
        company_name: '',
        inquirer_name: '',
        contact_email: '',
        contact_phone: '',
        required_solution: '',
        expected_size: '',
        expected_timeline: '',
        budget_range: '',
        detailed_requirement: '',
        lead_status: 'New',
      });
    } catch (error) {
      const message = getErrorMessage(error) || '견적 문의 제출에 실패했습니다. 다시 시도해주세요.';
      console.error('[QuotationForm] 제출 실패:', error);
      setSubmitStatus('error');
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 문의 카테고리 */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
            문의 유형 <span className="text-red-500">*</span>
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="general">일반 문의</option>
            <option value="project">프로젝트 견적</option>
            <option value="partnership">협업 제안</option>
            <option value="support">기술 지원</option>
            <option value="other">기타</option>
          </select>
        </div>

        {/* 프로젝트명 */}
        <div>
          <label htmlFor="project_name" className="block text-sm font-medium text-gray-700 mb-2">
            프로젝트명 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="project_name"
            name="project_name"
            value={formData.project_name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* 회사명 */}
        <div>
          <label htmlFor="company_name" className="block text-sm font-medium text-gray-700 mb-2">
            회사명 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="company_name"
            name="company_name"
            value={formData.company_name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* 문의자명 */}
        <div>
          <label htmlFor="inquirer_name" className="block text-sm font-medium text-gray-700 mb-2">
            문의자명
          </label>
          <input
            type="text"
            id="inquirer_name"
            name="inquirer_name"
            value={formData.inquirer_name || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* 이메일 */}
        <div>
          <label htmlFor="contact_email" className="block text-sm font-medium text-gray-700 mb-2">
            이메일 <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="contact_email"
            name="contact_email"
            value={formData.contact_email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* 연락처 */}
        <div>
          <label htmlFor="contact_phone" className="block text-sm font-medium text-gray-700 mb-2">
            연락처 <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="contact_phone"
            name="contact_phone"
            value={formData.contact_phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* 필요한 솔루션 */}
        <div>
          <label htmlFor="required_solution" className="block text-sm font-medium text-gray-700 mb-2">
            필요한 솔루션 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="required_solution"
            name="required_solution"
            value={formData.required_solution}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* 예상 규모 */}
        <div>
          <label htmlFor="expected_size" className="block text-sm font-medium text-gray-700 mb-2">
            예상 규모 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="expected_size"
            name="expected_size"
            value={formData.expected_size}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* 예상 일정 */}
        <div>
          <label htmlFor="expected_timeline" className="block text-sm font-medium text-gray-700 mb-2">
            예상 일정
          </label>
          <input
            type="date"
            id="expected_timeline"
            name="expected_timeline"
            value={formData.expected_timeline || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* 예산 범위 */}
        <div>
          <label htmlFor="budget_range" className="block text-sm font-medium text-gray-700 mb-2">
            예산 범위
          </label>
          <input
            type="text"
            id="budget_range"
            name="budget_range"
            value={formData.budget_range || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* 상세 요구사항 */}
        <div>
          <label htmlFor="detailed_requirement" className="block text-sm font-medium text-gray-700 mb-2">
            상세 요구사항
          </label>
          <textarea
            id="detailed_requirement"
            name="detailed_requirement"
            value={formData.detailed_requirement || ''}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* 개인정보 수집 및 이용 동의 */}
        <div className="border-t border-gray-200 pt-6">
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h3 className="font-semibold text-gray-900 mb-2">개인정보 수집 및 이용 안내</h3>
            <div className="text-sm text-gray-700 space-y-2">
              <p><strong>수집 항목:</strong> 프로젝트명, 회사명, 문의자명, 이메일, 연락처</p>
              <p><strong>이용 목적:</strong> 견적 문의 응대 및 상담 서비스 제공</p>
              <p><strong>보유 기간:</strong> 문의일로부터 3년</p>
              <p className="text-gray-600">
                * 자세한 내용은{' '}
                <a href="/privacy" target="_blank" className="text-blue-600 hover:underline">
                  개인정보처리방침
                </a>
                을 확인해주세요.
              </p>
            </div>
          </div>
          
          <label className="flex items-start cursor-pointer">
            <input
              type="checkbox"
              checked={privacyAgreed}
              onChange={(e) => setPrivacyAgreed(e.target.checked)}
              className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-3 text-sm text-gray-700">
              개인정보 수집 및 이용에 동의합니다. <span className="text-red-500">*</span>
            </span>
          </label>
        </div>

        {/* 에러 메시지 */}
        {submitStatus === 'error' && errorMessage && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {errorMessage}
          </div>
        )}

        {/* 성공 메시지 */}
        {submitStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
            견적 문의가 성공적으로 제출되었습니다. 빠른 시일 내에 연락드리겠습니다.
          </div>
        )}

        {/* 제출 버튼 */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? '제출 중...' : '견적 문의 제출'}
        </button>
      </form>
    </div>
  );
}

