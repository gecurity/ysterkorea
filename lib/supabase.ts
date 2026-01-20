import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/database';

// Supabase 클라이언트 생성
// 환경 변수에서 URL과 키를 가져옵니다
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase 환경 변수가 설정되지 않았습니다. .env.local 파일을 확인하세요.');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// 타입 안전한 Supabase 클라이언트 타입
export type SupabaseClient = typeof supabase;

