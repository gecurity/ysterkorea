'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Database } from '@/types/database';
import { recordAuditLog } from '@/src/utils/auditLog';
import { getErrorMessage } from '@/src/utils/error';

type Lead = Database['public']['Tables']['leads_quotation']['Row'];

// 리드 상태 옵션 (영어 값 - 데이터베이스 저장용)
const LEAD_STATUS_OPTIONS = [
  'New',
  'Contacted',
  'Follow-up',
  'Proposal',
  'Closed-Won',
  'Closed-Lost',
] as const;

// 상태 한글 매핑
const STATUS_LABELS: Record<string, string> = {
  'New': '신규',
  'Contacted': '연락완료',
  'Follow-up': '후속조치',
  'Proposal': '제안서',
  'Closed-Won': '성공',
  'Closed-Lost': '실패',
};

type LeadStatus = typeof LEAD_STATUS_OPTIONS[number];

export default function LeadDashboardTable() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState<LeadStatus | 'All'>('All');
  const [updatingLeadId, setUpdatingLeadId] = useState<number | null>(null);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 데이터 로드
  useEffect(() => {
    loadLeads();
  }, []);

  // 필터 적용
  useEffect(() => {
    if (selectedStatus === 'All') {
      setFilteredLeads(leads);
    } else {
      setFilteredLeads(leads.filter(lead => lead.lead_status === selectedStatus));
    }
  }, [selectedStatus, leads]);

  const loadLeads = async () => {
    setIsLoading(true);
    console.log('[LeadDashboardTable] 리드 데이터 로드 시작');

    try {
      const { data, error } = await supabase
        .from('leads_quotation')
        .select('*')
        .order('inquiry_date', { ascending: false });

      if (error) {
        console.error('[LeadDashboardTable] 데이터 로드 에러:', error);
        throw error;
      }

      console.log('[LeadDashboardTable] 데이터 로드 성공:', data?.length || 0, '건');
      setLeads(data || []);
      setFilteredLeads(data || []);
    } catch (error) {
      console.error('[LeadDashboardTable] 로드 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusChange = async (leadId: number, newStatus: string) => {
    setUpdatingLeadId(leadId);
    console.log('[LeadDashboardTable] 리드 상태 변경 시작:', { leadId, newStatus });

    try {
      const { error } = await supabase
        .from('leads_quotation')
        .update({ lead_status: newStatus })
        .eq('lead_id', leadId);

      if (error) {
        console.error('[LeadDashboardTable] 상태 업데이트 에러:', error);
        throw error;
      }

      console.log('[LeadDashboardTable] 상태 업데이트 성공:', { leadId, newStatus });
      
      // 데이터 재조회
      await loadLeads();
      await recordAuditLog({
        action: 'lead_status_update',
        entity: 'leads_quotation',
        entityId: leadId,
        detail: { newStatus },
      });
    } catch (error) {
      const message = getErrorMessage(error);
      console.error('[LeadDashboardTable] 상태 변경 실패:', error);
      alert(`리드 상태 변경에 실패했습니다. ${message}`);
    } finally {
      setUpdatingLeadId(null);
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return dateString;
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-gray-600">Loading leads...</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* 필터 버튼 그룹 */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedStatus('All')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedStatus === 'All'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          전체 ({leads.length})
        </button>
        {LEAD_STATUS_OPTIONS.map((status) => {
          const count = leads.filter(lead => lead.lead_status === status).length;
          return (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedStatus === status
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {STATUS_LABELS[status]} ({count})
            </button>
          );
        })}
      </div>

      {/* 테이블 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  회사명
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  프로젝트명
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  이메일
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  문의일자
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  상태
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  상세보기
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                    리드 데이터가 없습니다.
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead) => (
                  <tr key={lead.lead_id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {lead.lead_id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {lead.company_name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {lead.project_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {lead.contact_email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {formatDate(lead.inquiry_date)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={lead.lead_status}
                        onChange={(e) => handleStatusChange(lead.lead_id, e.target.value)}
                        disabled={updatingLeadId === lead.lead_id}
                        className={`text-sm border border-gray-300 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          updatingLeadId === lead.lead_id
                            ? 'bg-gray-100 cursor-not-allowed'
                            : 'bg-white cursor-pointer hover:border-gray-400'
                        }`}
                      >
                        {LEAD_STATUS_OPTIONS.map((status) => (
                          <option key={status} value={status}>
                            {STATUS_LABELS[status]}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => {
                          setSelectedLead(lead);
                          setIsModalOpen(true);
                        }}
                        className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        상세보기
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
        총 {filteredLeads.length}개의 리드가 표시됩니다. (전체: {leads.length}개)
      </div>

      {/* 상세 정보 모달 */}
      {isModalOpen && selectedLead && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            {/* 모달 헤더 */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">문의 상세 정보</h2>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setSelectedLead(null);
                }}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {/* 모달 내용 */}
            <div className="px-6 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 기본 정보 */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      리드 ID
                    </label>
                    <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded">
                      {selectedLead.lead_id}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      프로젝트명
                    </label>
                    <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded">
                      {selectedLead.project_name}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      회사명
                    </label>
                    <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded">
                      {selectedLead.company_name}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      문의자명
                    </label>
                    <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded">
                      {selectedLead.inquirer_name || '-'}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      이메일
                    </label>
                    <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded">
                      {selectedLead.contact_email}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      연락처
                    </label>
                    <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded">
                      {selectedLead.contact_phone}
                    </p>
                  </div>
                </div>

                {/* 프로젝트 정보 */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      필요한 솔루션
                    </label>
                    <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded">
                      {selectedLead.required_solution}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      예상 규모
                    </label>
                    <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded">
                      {selectedLead.expected_size}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      예상 일정
                    </label>
                    <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded">
                      {selectedLead.expected_timeline
                        ? new Date(selectedLead.expected_timeline).toLocaleDateString('ko-KR')
                        : '-'}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      예산 범위
                    </label>
                    <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded">
                      {selectedLead.budget_range || '-'}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      문의일자
                    </label>
                    <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded">
                      {formatDate(selectedLead.inquiry_date)}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      상태
                    </label>
                    <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded">
                      {STATUS_LABELS[selectedLead.lead_status] || selectedLead.lead_status}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      담당 영업사원
                    </label>
                    <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded">
                      {selectedLead.assigned_sales_rep || '-'}
                    </p>
                  </div>
                </div>
              </div>

              {/* 상세 요구사항 */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  상세 요구사항
                </label>
                <div className="bg-gray-50 px-4 py-3 rounded-lg min-h-[100px]">
                  <p className="text-sm text-gray-900 whitespace-pre-wrap">
                    {selectedLead.detailed_requirement || '상세 요구사항이 없습니다.'}
                  </p>
                </div>
              </div>
            </div>

            {/* 모달 푸터 */}
            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex justify-end">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setSelectedLead(null);
                }}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

