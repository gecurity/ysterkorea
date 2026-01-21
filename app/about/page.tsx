import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata = {
  title: '회사소개 - ysterkorea',
  description: '혁신적인 LED 디스플레이 기술로 건축의 미래를 만들어가는 ysterkorea를 소개합니다',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">회사소개</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            ysterkorea는 혁신적인 LED 디스플레이 기술로 건축과 공간의 미래를 만들어가는 선도 기업입니다
          </p>
        </div>
      </section>

      {/* 회사 개요 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                LED 디스플레이의<br />새로운 기준을 제시합니다
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                ysterkorea는 2015년 설립 이래 국내외 다양한 프로젝트에서 혁신적인 LED 디스플레이 솔루션을 제공해왔습니다.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                건축, 인테리어, 광고, 방송 등 다양한 분야에서 고객의 요구사항을 완벽하게 구현하며,
                기술적 전문성과 창의적인 솔루션으로 업계를 선도하고 있습니다.
              </p>
              <p className="text-lg text-gray-600">
                우리의 목표는 단순히 제품을 판매하는 것이 아닌, 고객의 비즈니스 성공을 위한
                최적의 파트너가 되는 것입니다.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">설립연도</h3>
                  <p className="text-3xl font-bold text-blue-600">2015년</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">완료 프로젝트</h3>
                  <p className="text-3xl font-bold text-blue-600">500+</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">파트너 기업</h3>
                  <p className="text-3xl font-bold text-blue-600">150+</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">설치 면적</h3>
                  <p className="text-3xl font-bold text-blue-600">50,000㎡+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 핵심 가치 */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">핵심 가치</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">혁신</h3>
              <p className="text-gray-600">
                끊임없는 기술 개발과 연구를 통해 업계를 선도하는 혁신적인 솔루션을 제공합니다
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">품질</h3>
              <p className="text-gray-600">
                최고 품질의 제품과 서비스를 통해 고객의 신뢰를 얻고 장기적인 관계를 구축합니다
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">협력</h3>
              <p className="text-gray-600">
                고객, 파트너와의 긴밀한 협력을 통해 모두가 성장하는 생태계를 만들어갑니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 사업 분야 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">주요 사업 분야</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="font-semibold text-gray-900 mb-2">건축</h3>
              <p className="text-sm text-gray-600">건물 외벽, 로비, 엘리베이터 등</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="font-semibold text-gray-900 mb-2">리테일</h3>
              <p className="text-sm text-gray-600">매장 디스플레이, 광고판</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📺</div>
              <h3 className="font-semibold text-gray-900 mb-2">방송</h3>
              <p className="text-sm text-gray-600">스튜디오 배경, 가상 세트</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="font-semibold text-gray-900 mb-2">이벤트</h3>
              <p className="text-sm text-gray-600">무대, 전시회, 컨퍼런스</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">더 궁금하신 사항이 있으신가요?</h2>
          <p className="text-xl text-blue-100 mb-8">
            전문 상담을 통해 최적의 솔루션을 제안해드립니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quotation"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              견적 문의하기
            </Link>
            <Link
              href="/about/vision"
              className="inline-block px-8 py-3 bg-blue-700 text-white rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              비전 & 미션 보기
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
