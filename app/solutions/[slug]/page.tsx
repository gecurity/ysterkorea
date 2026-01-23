import { supabase } from '@/lib/supabase';
import { Database } from '@/types/database';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

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
      <Header />

      {/* 메인 컨텐츠 */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 뒤로 가기 */}
        <div className="mb-8">
          <Link
            href={solution.category ? `/solutions?category=${solution.category}` : '/solutions'}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← 목록으로 돌아가기
          </Link>
        </div>

        {/* 1. 제품 이미지 */}
        {solution.image_url && (
          <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden mb-12">
            <img 
              src={`/images/products/${solution.image_url}`}
              alt={solution.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* 제목 */}
        <h1 className="text-4xl font-bold mb-8 text-gray-900">{solution.title}</h1>

        {/* 2. 제품 소개 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 border-b-2 border-gray-200 pb-2">
            제품 소개
          </h2>
          <div className="prose prose-lg max-w-none">
            {solution.description ? (
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{solution.description}</p>
            ) : solution.short_description ? (
              <p className="text-gray-700 leading-relaxed">{solution.short_description}</p>
            ) : (
              <p className="text-gray-500 italic">제품 소개가 준비 중입니다.</p>
            )}
          </div>
        </div>

        {/* 3. 제품 스펙 */}
        {solution.technical_specs && typeof solution.technical_specs === 'object' && !Array.isArray(solution.technical_specs) && Object.keys(solution.technical_specs).length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 border-b-2 border-gray-200 pb-2">
              제품 스펙
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <tbody className="divide-y divide-gray-200">
                  {Object.entries(solution.technical_specs as Record<string, unknown>).map(([key, value]) => (
                    <tr key={key} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-700 bg-gray-50 w-1/3">
                        {key}
                      </td>
                      <td className="px-6 py-4 text-gray-900">
                        {typeof value === 'object' && value !== null ? JSON.stringify(value) : String(value)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 견적 문의 CTA */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              이 제품에 대해 문의하시겠어요?
            </h3>
            <p className="text-gray-600 mb-6">
              전문 상담을 통해 프로젝트에 맞는 최적의 솔루션을 제안해드립니다.
            </p>
            <Link
              href="/quotation"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              견적 문의하기
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
