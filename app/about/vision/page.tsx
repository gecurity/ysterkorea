import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata = {
  title: '비전 & 미션 - ysterkorea',
  description: 'ysterkorea의 비전과 미션, 그리고 미래를 향한 목표를 소개합니다',
};

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">비전 & 미션</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            혁신적인 기술과 창의적인 솔루션으로 더 나은 미래를 만들어갑니다
          </p>
        </div>
      </section>

      {/* 비전 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-4">Our Vision</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-8">우리의 비전</h3>
            <p className="text-2xl text-gray-700 font-medium leading-relaxed mb-6">
              "LED 디스플레이 기술의 혁신을 통해<br />
              사람과 공간을 연결하는 글로벌 리더"
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              ysterkorea는 최첨단 LED 디스플레이 기술을 바탕으로 건축, 인테리어, 미디어 산업의 경계를 넘어
              새로운 가치를 창출합니다. 우리는 단순한 디스플레이를 넘어 공간과 사람을 연결하고,
              감동을 전달하는 경험을 제공하는 글로벌 리더가 되고자 합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 미션 */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-4">Our Mission</h2>
            <h3 className="text-4xl font-bold text-gray-900">우리의 미션</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">고객 중심 혁신</h4>
              <p className="text-gray-600">
                고객의 니즈를 정확히 이해하고, 맞춤형 솔루션을 통해 
                비즈니스 성공을 지원합니다
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl mb-4">⚡</div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">기술 선도</h4>
              <p className="text-gray-600">
                지속적인 R&D 투자를 통해 업계 최고 수준의 
                기술력을 유지하고 발전시킵니다
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl mb-4">🌍</div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">지속 가능한 성장</h4>
              <p className="text-gray-600">
                환경을 생각하는 친환경 제품과 프로세스로 
                사회적 책임을 다합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 핵심 가치관 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-4">Core Values</h2>
            <h3 className="text-4xl font-bold text-gray-900">핵심 가치관</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">전문성 (Professionalism)</h4>
                <p className="text-gray-600">
                  깊이 있는 전문 지식과 경험을 바탕으로 고객에게 최고의 서비스를 제공합니다
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">신뢰 (Trust)</h4>
                <p className="text-gray-600">
                  약속을 지키고 투명한 커뮤니케이션으로 고객과의 신뢰를 구축합니다
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">열정 (Passion)</h4>
                <p className="text-gray-600">
                  우리가 하는 일에 대한 열정으로 더 나은 결과물을 만들어냅니다
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">도전 (Challenge)</h4>
                <p className="text-gray-600">
                  새로운 기술과 시장에 대한 끊임없는 도전으로 성장을 이어갑니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2030 목표 */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-blue-400 tracking-wide uppercase mb-4">2030 Goals</h2>
            <h3 className="text-4xl font-bold mb-6">미래를 향한 우리의 목표</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              2030년까지 달성할 구체적인 목표를 설정하고, 
              이를 실현하기 위해 매일 노력하고 있습니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-4xl font-bold text-blue-400 mb-2">Top 3</div>
              <p className="text-gray-300">국내 LED 디스플레이 시장 점유율</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-4xl font-bold text-blue-400 mb-2">30개국</div>
              <p className="text-gray-300">글로벌 시장 진출 국가 수</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-4xl font-bold text-blue-400 mb-2">1,000+</div>
              <p className="text-gray-300">누적 프로젝트 완료 건수</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-4xl font-bold text-blue-400 mb-2">30%</div>
              <p className="text-gray-300">에너지 효율 개선 목표</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">함께 미래를 만들어갈 파트너를 찾습니다</h2>
          <p className="text-xl text-gray-600 mb-8">
            ysterkorea와 함께 새로운 가능성을 열어보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quotation"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              프로젝트 문의하기
            </Link>
            <Link
              href="/about/history"
              className="inline-block px-8 py-3 bg-gray-200 text-gray-900 rounded-lg text-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              연혁 보기
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
