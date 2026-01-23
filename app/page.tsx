import Link from 'next/link';
import { Suspense } from 'react';
import SolutionList from '@/components/SolutionList';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Popup from '@/components/Popup';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Popup />
      <Header />

      {/* 메인 비주얼 섹션 */}
      <section className="relative h-[600px] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">공간을 이해하고 신뢰를 설계하는 LED 디스플레이 파트너 YSTER KOREA</h1>
        </div>
      </section>

      {/* 회사 소개 - 주요 성과 */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">ysterkorea</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              2015년 설립 이래 끊임없는 혁신과 도전으로 LED 디스플레이 업계를 선도하고 있습니다
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-3">10년</div>
              <p className="text-gray-600 text-lg">업계 경력</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-3">500+</div>
              <p className="text-gray-600 text-lg">완료 프로젝트</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-3">150+</div>
              <p className="text-gray-600 text-lg">파트너 기업</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-3">5개국</div>
              <p className="text-gray-600 text-lg">글로벌 진출</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/about"
              className="inline-block px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              회사 소개 자세히 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 제품 소개 섹션 */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">제품 소개</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              프로젝트에 맞는 최적의 LED 디스플레이 제품을 만나보세요
            </p>
          </div>
          <Suspense fallback={<div className="text-center py-12 text-gray-600">로딩 중...</div>}>
            <SolutionList />
          </Suspense>
          <div className="text-center mt-12">
            <Link
              href="/solutions"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              전체 제품 보기
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

