import Link from 'next/link';
import { Database } from '@/types/database';

type News = Database['public']['Tables']['news']['Row'];

interface NewsCardProps {
  news: News;
}

export default function NewsCard({ news }: NewsCardProps) {
  const categoryLabels: Record<string, string> = {
    press: '보도자료',
    tech: '기술',
    project: '프로젝트',
    announcement: '공지사항',
  };

  const categoryColors: Record<string, string> = {
    press: 'bg-purple-100 text-purple-800',
    tech: 'bg-blue-100 text-blue-800',
    project: 'bg-green-100 text-green-800',
    announcement: 'bg-orange-100 text-orange-800',
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
    <Link href={`/news/${news.slug}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
        {/* 썸네일 */}
        {news.thumbnail_url ? (
          <div className="h-48 bg-gray-200">
            <img
              src={news.thumbnail_url}
              alt={news.title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
            <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
        )}

        {/* 콘텐츠 */}
        <div className="p-6 flex-grow flex flex-col">
          {/* 카테고리 */}
          <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 w-fit ${categoryColors[news.category] || 'bg-gray-100 text-gray-800'}`}>
            {categoryLabels[news.category] || news.category}
          </span>

          {/* 제목 */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 flex-grow">
            {news.title}
          </h3>

          {/* 요약 */}
          {news.summary && (
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {news.summary}
            </p>
          )}

          {/* 메타 정보 */}
          <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
            <span>{formatDate(news.published_date)}</span>
            {news.author && <span>{news.author}</span>}
          </div>
        </div>
      </div>
    </Link>
  );
}
