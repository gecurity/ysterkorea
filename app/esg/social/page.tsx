import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata = {
  title: '사회 (Social) - ESG - ysterkorea',
  description: 'ysterkorea의 사회적 책임과 공헌 활동을 소개합니다',
};

export default function SocialPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/esg" className="text-blue-200 hover:text-white">
              ← ESG 경영
            </Link>
          </div>
          <h1 className="text-5xl font-bold mb-6">Social | 사회</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            사람을 존중하고 사회와 함께 성장하는 기업이 되겠습니다
          </p>
        </div>
      </section>

      {/* 사회 경영 방침 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">사회 경영 방침</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                ysterkorea는 임직원, 파트너, 지역사회 등 모든 이해관계자와 함께 성장하며,
                인권을 존중하고 사회적 가치를 창출하는 책임 있는 기업 시민이 되고자 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 활동 */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">주요 사회 활동</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 임직원 복지 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">임직원 복지</h3>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>경쟁력 있는 급여 및 성과 보상 체계</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>워라밸 실현 (유연 근무제, 재택근무)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>건강 검진 및 의료비 지원</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>자녀 학자금 및 경조사 지원</span>
                </li>
              </ul>
            </div>

            {/* 인재 개발 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">인재 개발</h3>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>직무별 전문 교육 프로그램</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>외부 교육 및 자격증 취득 지원</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>리더십 개발 프로그램</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>멘토링 및 코칭 제도</span>
                </li>
              </ul>
            </div>

            {/* 다양성과 포용성 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🌈</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">다양성과 포용성</h3>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>성별, 연령, 국적 차별 금지</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>여성 리더십 육성 (목표: 30%)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>장애인 고용 확대</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>다문화 인재 채용 및 지원</span>
                </li>
              </ul>
            </div>

            {/* 안전보건 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏥</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">안전보건</h3>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>안전사고 제로 목표 달성</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>정기 안전 교육 실시</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>쾌적한 근무 환경 조성</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>정신 건강 상담 프로그램</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 지역사회 공헌 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">지역사회 공헌</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">사랑의 김장 나눔</h3>
              <p className="text-gray-600">
                매년 임직원이 참여하여 지역 독거노인과 소외계층에 김장을 전달합니다
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">📖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">장학금 지원</h3>
              <p className="text-gray-600">
                지역 인재 육성을 위해 매년 장학금을 지원하고 있습니다
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">자원봉사</h3>
              <p className="text-gray-600">
                임직원 봉사단을 운영하여 정기적인 봉사활동을 실시합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 인권 경영 */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">인권 경영</h2>
          
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">인권 경영 선언</h3>
            <p className="text-gray-700 mb-6">
              ysterkorea는 유엔 인권선언과 국제노동기구(ILO) 핵심 협약을 지지하며,
              모든 임직원과 파트너의 인권을 존중하고 보호합니다.
            </p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-1">강제 노동 금지</h4>
                <p className="text-gray-600 text-sm">모든 형태의 강제 노동과 인신매매를 금지합니다</p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-1">아동 노동 금지</h4>
                <p className="text-gray-600 text-sm">법정 최저 연령 미만의 아동 고용을 금지합니다</p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-1">차별 금지</h4>
                <p className="text-gray-600 text-sm">성별, 인종, 종교, 장애 등을 이유로 한 차별을 금지합니다</p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-1">결사의 자유 보장</h4>
                <p className="text-gray-600 text-sm">노동자의 단결권과 단체교섭권을 보장합니다</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 성과 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">2023년 사회 성과</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-blue-100">임직원 만족도</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white p-8 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">25%</div>
              <p className="text-indigo-100">여성 임원 비율</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">40시간</div>
              <p className="text-purple-100">1인당 교육 시간</p>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white p-8 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">5억원</div>
              <p className="text-pink-100">사회공헌 투자액</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
