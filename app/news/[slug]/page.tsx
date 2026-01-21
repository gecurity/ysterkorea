import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { supabase } from '@/lib/supabase';
import { Database } from '@/types/database';

type News = Database['public']['Tables']['news']['Row'];

interface PageProps {
  params: {
    slug: string;
  };
}

async function getNews(slug: string): Promise<News | null> {
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .single();

  if (error) {
    console.error('[NewsDetailPage] 데이터 로드 에러:', error);
    return null;
  }

  return data;
}

export async function generateMetadata({ params }: PageProps) {
  const news = await getNews(params.slug);

  if (!news) {
    return {
      title: '뉴스를 찾을 수 없습니다 - ysterkorea',
    };
  }

  return {
    title: `${news.title} - ysterkorea`,
    description: news.summary || news.title,
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const news = await getNews(params.slug);

  if (!news) {
    notFound();
  }

  const categoryLabels: Record<string, string> = {
    press: '보도자료',
    tech: '기술',
    project: '프로젝트',
    announcement: '공지사항',
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 상단 네비게이션 */}
          <div className="mb-8">
            <Link
              href="/news"
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              뉴스 목록으로
            </Link>
          </div>

          {/* 카테고리 */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-blue-100 text-blue-800">
              {categoryLabels[news.category] || news.category}
            </span>
          </div>

          {/* 제목 */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {news.title}
          </h1>

          {/* 메타 정보 */}
          <div className="flex items-center text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <span>{formatDate(news.published_date)}</span>
            {news.author && (
              <>
                <span className="mx-2">•</span>
                <span>{news.author}</span>
              </>
            )}
            <span className="mx-2">•</span>
            <span>조회수 {news.view_count}</span>
          </div>

          {/* 썸네일 */}
          {news.thumbnail_url && (
            <div className="mb-8">
              <img
                src={news.thumbnail_url}
                alt={news.title}
                className="w-full rounded-lg shadow-md"
              />
            </div>
          )}

          {/* 요약 */}
          {news.summary && (
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                {news.summary}
              </p>
            </div>
          )}

          {/* 본문 */}
          <div className="prose prose-lg max-w-none">
            <div
              className="text-gray-800 leading-relaxed whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: news.content.replace(/\n/g, '<br />') }}
            />
          </div>

          {/* 하단 네비게이션 */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/news"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              목록으로 돌아가기
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
