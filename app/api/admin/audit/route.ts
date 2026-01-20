import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { Database, Json } from '@/types/database';

type AdminAuditInsert = Database['public']['Tables']['admin_audit_logs']['Insert'];

type AuditPayload = {
  action: string;
  entity: string;
  entityId?: number;
  detail?: Json;
  performedBy?: string;
};

export async function POST(request: Request) {
  const cookieStore = cookies();
  const session = cookieStore.get('admin_session');

  if (!session) {
    return NextResponse.json({ message: '인증되지 않은 요청입니다.' }, { status: 401 });
  }

  if (!supabaseAdmin) {
    return NextResponse.json({ message: 'Supabase admin 클라이언트를 초기화할 수 없습니다.' }, { status: 500 });
  }

  const { action, entity, entityId, detail, performedBy }: AuditPayload = await request.json();

  if (!action || !entity) {
    return NextResponse.json({ message: 'action과 entity는 필수입니다.' }, { status: 400 });
  }

  const insertPayload: AdminAuditInsert = {
    action,
    entity,
    entity_id: entityId ?? null,
    detail: detail ?? null,
    performed_by: performedBy ?? null,
  };

  const { error } = await supabaseAdmin.from('admin_audit_logs').insert(insertPayload);

  if (error) {
    console.error('[admin/audit] 로그 저장 실패:', error);
    return NextResponse.json({ message: '감사 로그 저장에 실패했습니다.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}


