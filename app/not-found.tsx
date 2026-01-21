import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-2xl">
          {/* 404 아이콘 */}
          <div className="mb-8">
            <svg
              className="mx-auto w-48 h-48 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="text-8xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">페이지를 찾을 수 없습니다</h2>
          <p className="text-lg text-gray-600 mb-8">
            죄송합니다. 요청하신 페이지가 존재하지 않거나 이동되었습니다.<br />
            아래 링크를 통해 원하시는 페이지로 이동하실 수 있습니다.
          </p>

          {/* 주요 페이지 링크 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <Link
              href="/"
              className="block p-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              🏠 홈으로 가기
            </Link>
            <Link
              href="/solutions"
              className="block p-4 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              💡 제품 솔루션
            </Link>
            <Link
              href="/about"
              className="block p-4 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              ℹ️ 회사소개
            </Link>
            <Link
              href="/quotation"
              className="block p-4 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              ✉️ 견적 문의
            </Link>
          </div>

          <p className="text-sm text-gray-500">
            문제가 계속되면{' '}
            <Link href="/quotation" className="text-blue-600 hover:underline">
              고객센터
            </Link>
            로 문의해 주세요.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}



