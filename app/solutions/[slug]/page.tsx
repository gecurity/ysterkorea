import { supabase } from '@/lib/supabase';
import { Database } from '@/types/database';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Solution = Database['public']['Tables']['Solutions']['Row'];

async function getSolution(slug: string): Promise<Solution | null> {
  try {
    console.log('[SolutionDetailPage] 슬러그로 솔루션 조회 시작:', slug);
    
    const { data, error } = await supabase
      .from('Solutions')
      .select('*')
      .eq('slug', slug)
      .eq('is_active', true)
      .single();

    if (error) {
      console.error('[SolutionDetailPage] 데이터 로드 에러:', error);
      // PGRST116: no rows returned 에러는 정상적인 경우 (해당 슬러그 없음)
      if (error.code === 'PGRST116') {
        console.log('[SolutionDetailPage] 해당 슬러그의 활성 솔루션을 찾을 수 없습니다:', slug);
      }
      return null;
    }

    if (!data) {
      console.log('[SolutionDetailPage] 데이터가 없습니다:', slug);
      return null;
    }

    console.log('[SolutionDetailPage] 솔루션 조회 성공:', data.title);
    return data as Solution;
  } catch (error) {
    console.error('[SolutionDetailPage] 로드 실패:', error);
    return null;
  }
}

export default async function SolutionDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const solution = await getSolution(params.slug);

  if (!solution) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* 헤더 */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
              ysterkorea
            </Link>
          </div>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 제목 */}
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{solution.title}</h1>

        {/* 짧은 설명 */}
        {solution.short_description && (
          <p className="text-xl text-gray-600 mb-8">{solution.short_description}</p>
        )}

        {/* 기술 스펙 */}
        {solution.technical_specs && typeof solution.technical_specs === 'object' && !Array.isArray(solution.technical_specs) && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">기술 스펙</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <ul className="space-y-3">
                {Object.entries(solution.technical_specs as Record<string, unknown>).map(([key, value]) => (
                  <li key={key} className="flex justify-between items-start">
                    <span className="font-medium text-gray-700">{key}:</span>
                    <span className="text-gray-900 ml-4 text-right">
                      {typeof value === 'object' && value !== null ? JSON.stringify(value) : String(value)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* 비즈니스 가치 */}
        {solution.business_value && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">비즈니스 가치</h2>
            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-gray-800 whitespace-pre-wrap">{solution.business_value}</p>
            </div>
          </div>
        )}

        {/* 견적 문의 유도 버튼 */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              이 솔루션에 대해 더 자세히 알고 싶으신가요?
            </h3>
            <p className="text-gray-600 mb-6">
              전문 상담을 통해 프로젝트에 맞는 최적의 솔루션을 제안해드립니다.
            </p>
            <Link
              href="/quotation"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              견적 문의 요청
            </Link>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 ysterkorea. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

