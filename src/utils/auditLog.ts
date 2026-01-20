export type AuditLogParams = {
  action: string;
  entity: string;
  entityId?: number;
  detail?: Record<string, unknown>;
  performedBy?: string;
};

/**
 * 관리자 감사 로그 기록
 * 모든 API 통신/에러 처리를 이 유틸에서 담당한다.
 */
export async function recordAuditLog(params: AuditLogParams): Promise<boolean> {
  try {
    const response = await fetch('/api/admin/audit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: params.action,
        entity: params.entity,
        entityId: params.entityId,
        detail: params.detail,
        performedBy: params.performedBy,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}));
      console.error('[auditLog] 서버 응답 에러:', response.status, errorBody);
      return false;
    }

    return true;
  } catch (error) {
    console.error('[auditLog] 감사 로그 기록 실패:', error);
    return false;
  }
}


