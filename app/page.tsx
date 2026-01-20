import Link from 'next/link';
import CaseStudySearch from '@/components/CaseStudySearch';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 헤더 */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">ysterkorea</h1>
          </div>
        </div>
      </header>

      {/* 메인 비주얼 섹션 */}
      <section className="relative h-[600px] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h2 className="text-5xl font-bold mb-4">미래 건축의 기준</h2>
          <p className="text-xl text-gray-300 mb-8">혁신적인 LED 디스플레이 기술로 공간을 변화시키세요</p>
          <Link 
            href="/quotation"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            견적 문의 요청
          </Link>
        </div>
      </section>

      {/* 제품 솔루션 섹션 */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">제품 솔루션</h2>
            <p className="text-lg text-gray-600 mb-8">
              프로젝트에 맞는 최적의 LED 디스플레이 솔루션을 만나보세요
            </p>
            <Link
              href="/solutions"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              제품 보러가기
            </Link>
          </div>
        </div>
      </section>

      {/* 프로젝트 사례 검색 섹션 */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">프로젝트 사례</h2>
          <CaseStudySearch />
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 ysterkorea. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

