import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

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
            공간을 이해하고 신뢰를 설계하는 LED 디스플레이 파트너 YSTER KOREA 입니다.
          </p>
        </div>
      </section>

      {/* 회사 개요 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">
              회사 개요 (About Us)
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              <span className="text-xl font-bold text-gray-900">YSTER KOREA</span>는 LED 디스플레이 제품을 전문으로 공급하는 기업으로,
              다양한 환경과 목적에 최적화된 디스플레이 솔루션을 제공합니다.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              단순한 제품 납품을 넘어,
              고객의 공간과 사용 목적을 깊이 이해하고 <span className="text-xl font-bold text-gray-900">도면 설계 단계부터 함께 고민</span>하여
              안정적이고 효율적인 LED 디스플레이 구현을 지원합니다.
            </p>
            <p className="text-lg text-gray-600">
              우리는 눈에 보이는 결과뿐 아니라,
              그 과정에서 쌓이는 <span className="text-xl font-bold text-gray-900">신뢰와 책임</span>을 가장 중요한 가치로 생각합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 우리의 강점 */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-12">
            <h2 className="text-4xl font-bold text-gray-900">우리의 강점 (What We Do)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                다양한 환경에 대응 가능한 LED 디스플레이 제품 공급
              </h3>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                설치 전 단계까지의 도면 설계 및 기술 지원
              </h3>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                프로젝트 목적에 맞춘 합리적인 제품 제안
              </h3>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                명확한 커뮤니케이션과 책임 있는 대응
              </h3>
            </div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed">
              YSTER KOREA는 &quot;잘 보이는 디스플레이&quot;가 아닌<br />
              <span className="text-2xl font-bold text-gray-900">오래 신뢰할 수 있는 선택</span>이 되기 위해 노력합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 비전 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">
              비전 (Vision)
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              YSTER KOREA의 비전은 단순한 LED 디스플레이 공급업체를 넘어,
              고객의 목적과 환경을 이해하고 함께 최적의 해답을 만들어가는
              <span className="text-xl font-bold text-gray-900"> 신뢰받는 파트너</span>로 성장하는 것입니다.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              우리는 빠르게 변화하는 디스플레이 시장 속에서도
              단기적인 성과보다 장기적인 관계를 중요하게 생각합니다.
              프로젝트의 시작 단계부터 충분한 검토와 명확한 소통을 바탕으로,
              고객이 안심하고 선택할 수 있는 방향을 제시하고자 합니다.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              또한, 기본에 충실한 품질과 정직한 제안을 원칙으로 삼아
              각 프로젝트에 적합한 LED 디스플레이 솔루션을 제공하며,
              결과뿐 아니라 과정까지 책임지는 기업이 되고자 합니다.
            </p>
            <p className="text-lg text-gray-600">
              YSTER KOREA는 앞으로도<br />
              기술의 변화와 시장의 흐름을 꾸준히 이해하고 연구하며,<br />
              고객에게 오래도록 신뢰받고 꾸준히 선택받는 브랜드로 성장해 나가겠습니다.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
