import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'ESG 경영 - ysterkorea',
  description: 'ysterkorea의 환경, 사회, 지배구조(ESG) 경영 철학과 실천 활동을 소개합니다',
};

export default function ESGPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">ESG 경영</h1>
          <p className="text-xl text-green-100 max-w-3xl">
            ysterkorea는 환경, 사회, 지배구조의 지속 가능한 경영을 통해 더 나은 미래를 만들어갑니다
          </p>
        </div>
      </section>

      {/* ESG 개요 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              지속 가능한 경영을 통한 가치 창출
            </h2>
            <p className="text-lg text-gray-600">
              ysterkorea는 ESG(Environment, Social, Governance) 경영을 핵심 전략으로 삼고,
              환경 보호, 사회적 책임, 투명한 지배구조를 실천하며 이해관계자 모두와 함께 성장하는 기업이 되고자 합니다.
            </p>
          </div>

          {/* ESG 3대 영역 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Environment */}
            <Link href="/esg/environment" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="bg-green-600 h-2"></div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Environment<br />환경
                  </h3>
                  <p className="text-gray-600 mb-4">
                    친환경 제품 개발, 에너지 효율 개선, 탄소 저감 활동을 통해 지구 환경 보호에 앞장섭니다
                  </p>
                  <span className="text-green-600 font-medium group-hover:underline">
                    자세히 보기 →
                  </span>
                </div>
              </div>
            </Link>

            {/* Social */}
            <Link href="/esg/social" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="bg-blue-600 h-2"></div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Social<br />사회
                  </h3>
                  <p className="text-gray-600 mb-4">
                    임직원 복지, 인권 존중, 지역사회 공헌을 통해 사회적 가치를 창출합니다
                  </p>
                  <span className="text-blue-600 font-medium group-hover:underline">
                    자세히 보기 →
                  </span>
                </div>
              </div>
            </Link>

            {/* Governance */}
            <Link href="/esg/governance" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="bg-purple-600 h-2"></div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Governance<br />지배구조
                  </h3>
                  <p className="text-gray-600 mb-4">
                    투명한 경영, 윤리 경영, 리스크 관리로 신뢰받는 기업이 되겠습니다
                  </p>
                  <span className="text-purple-600 font-medium group-hover:underline">
                    자세히 보기 →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ESG 목표 */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            2030 ESG 목표
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50%</div>
              <p className="text-gray-600">탄소 배출량 감축</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-600">재생 에너지 사용</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">30%</div>
              <p className="text-gray-600">여성 리더십 비율</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">100억</div>
              <p className="text-gray-600">사회공헌 투자액</p>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 성과 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            주요 성과
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">ISO 14001 인증 획득</h3>
              <p className="text-gray-700">
                2024년 10월, 환경경영시스템 국제 표준 인증을 획득하여 친환경 경영 체계를 공식 인정받았습니다.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">에너지 효율 30% 향상</h3>
              <p className="text-gray-700">
                차세대 LED 디스플레이 기술 개발로 기존 제품 대비 에너지 효율을 30% 향상시켰습니다.
              </p>
            </div>
            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">윤리경영 우수 기업 선정</h3>
              <p className="text-gray-700">
                투명한 경영과 윤리적 비즈니스 실천으로 2023년 윤리경영 우수 기업으로 선정되었습니다.
              </p>
            </div>
            <div className="bg-orange-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">지역사회 봉사활동</h3>
              <p className="text-gray-700">
                매년 임직원이 참여하는 봉사활동과 기부를 통해 지역사회에 기여하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">지속 가능한 미래를 함께 만들어갑니다</h2>
          <p className="text-xl mb-8 text-green-100">
            ysterkorea의 ESG 경영에 대해 더 알아보고 싶으신가요?
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-green-600 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors"
          >
            문의하기
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
