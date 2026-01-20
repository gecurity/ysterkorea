import Link from 'next/link';
import SolutionList from '@/components/SolutionList';

export default function SolutionsPage() {
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

      {/* 제품 솔루션 섹션 */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">제품 솔루션</h1>
            <p className="text-lg text-gray-600">
              프로젝트에 맞는 최적의 LED 디스플레이 솔루션을 만나보세요
            </p>
          </div>
          <SolutionList />
          <div className="text-center mt-12">
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



