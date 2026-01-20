import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { Database } from '@/types/database';

type LeadsQuotationInsert = Database['public']['Tables']['leads_quotation']['Insert'];

const REQUIRED_FIELDS: Array<keyof LeadsQuotationInsert> = [
  'project_name',
  'company_name',
  'contact_email',
  'contact_phone',
  'required_solution',
  'expected_size',
];

const isEmpty = (value: unknown) =>
  value === undefined || value === null || (typeof value === 'string' && value.trim().length === 0);

/**
 * Supabase Admin 클라이언트는 서버 전용 환경 변수 `SUPABASE_SERVICE_ROLE_KEY`를 사용합니다.
 * 해당 키는 절대 클라이언트로 노출되면 안 됩니다.
 */
export async function POST(request: Request) {
  if (!supabaseAdmin) {
    return NextResponse.json(
      { message: 'Supabase admin 클라이언트를 초기화할 수 없습니다.' },
      { status: 500 },
    );
  }

  const payload = (await request.json()) as Partial<LeadsQuotationInsert>;

  const missingFields = REQUIRED_FIELDS.filter((field) => isEmpty(payload[field]));

  if (missingFields.length > 0) {
    return NextResponse.json(
      {
        message: '필수 필드가 누락되었습니다.',
        missingFields,
      },
      { status: 400 },
    );
  }

  const insertPayload: LeadsQuotationInsert = {
    project_name: payload.project_name!.trim(),
    company_name: payload.company_name!.trim(),
    contact_email: payload.contact_email!.trim(),
    contact_phone: payload.contact_phone!.trim(),
    required_solution: payload.required_solution!.trim(),
    expected_size: payload.expected_size!.trim(),
    inquirer_name: payload.inquirer_name || null,
    expected_timeline: payload.expected_timeline || null,
    budget_range: payload.budget_range || null,
    detailed_requirement: payload.detailed_requirement || null,
    lead_status: payload.lead_status || 'New',
    assigned_sales_rep: payload.assigned_sales_rep || null,
  };

  try {
    const { data, error } = await supabaseAdmin
      .from('leads_quotation')
      .insert([insertPayload])
      .select()
      .single();

    if (error) {
      console.error('[api/leads] 데이터 삽입 실패:', error);
      return NextResponse.json({ message: '견적 문의 저장에 실패했습니다.' }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 201 });
  } catch (error) {
    console.error('[api/leads] 예기치 못한 오류:', error);
    return NextResponse.json({ message: '알 수 없는 오류가 발생했습니다.' }, { status: 500 });
  }
}


