import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata = {
  title: '환경 (Environment) - ESG - ysterkorea',
  description: 'ysterkorea의 환경 보호 활동과 친환경 경영을 소개합니다',
};

export default function EnvironmentPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/esg" className="text-green-200 hover:text-white">
              ← ESG 경영
            </Link>
          </div>
          <h1 className="text-5xl font-bold mb-6">Environment | 환경</h1>
          <p className="text-xl text-green-100 max-w-3xl">
            지구 환경을 생각하는 책임 있는 기업으로서 친환경 경영을 실천합니다
          </p>
        </div>
      </section>

      {/* 환경 경영 방침 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">환경 경영 방침</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                ysterkorea는 LED 디스플레이 제품의 설계, 제조, 유통 전 과정에서 환경 영향을 최소화하고,
                에너지 효율을 극대화하여 지속 가능한 미래를 위해 노력합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 활동 */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">주요 환경 활동</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 친환경 제품 개발 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🌱</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">친환경 제품 개발</h3>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>에너지 효율 30% 향상 LED 디스플레이</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>유해 물질 저감 친환경 소재 사용</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>제품 수명 50% 연장으로 폐기물 감소</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>재활용 가능한 패키징 사용</span>
                </li>
              </ul>
            </div>

            {/* 탄소 저감 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🌍</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">탄소 저감 활동</h3>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>사업장 온실가스 배출 모니터링</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>재생 에너지 사용 확대 (목표: 100%)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>물류 최적화로 배송 중 탄소 배출 감소</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>2030년까지 탄소 배출 50% 저감 목표</span>
                </li>
              </ul>
            </div>

            {/* 자원 순환 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">♻️</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">자원 순환 경제</h3>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>폐기물 재활용률 90% 이상 달성</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>제품 수거 및 재활용 프로그램 운영</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>사무실 일회용품 사용 금지</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>디지털 문서화로 종이 사용 최소화</span>
                </li>
              </ul>
            </div>

            {/* 환경 관리 시스템 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">환경 관리 시스템</h3>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>ISO 14001 환경경영시스템 인증</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>환경 영향 평가 정기 실시</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>환경 목표 및 성과 투명 공개</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>임직원 환경 교육 프로그램 운영</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 환경 성과 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">2023년 환경 성과</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">30%</div>
              <p className="text-green-100">에너지 효율 향상</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">25%</div>
              <p className="text-blue-100">탄소 배출 감축</p>
            </div>
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-8 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">90%</div>
              <p className="text-teal-100">폐기물 재활용률</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 text-white p-8 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">40%</div>
              <p className="text-cyan-100">재생 에너지 사용</p>
            </div>
          </div>
        </div>
      </section>

      {/* 향후 계획 */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">2030 환경 목표</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">탄소 중립 달성</h3>
              <p className="text-gray-600">
                2030년까지 탄소 배출량 50% 감축 및 2040년 탄소 중립 달성을 목표로 합니다
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% 재생 에너지 전환</h3>
              <p className="text-gray-600">
                2030년까지 모든 사업장을 재생 에너지로 전환하여 운영할 계획입니다
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">순환 경제 실현</h3>
              <p className="text-gray-600">
                제품 설계부터 폐기까지 전 과정에서 순환 경제 원칙을 적용합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
