import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata = {
  title: '지배구조 (Governance) - ESG - ysterkorea',
  description: 'ysterkorea의 투명한 지배구조와 윤리경영을 소개합니다',
};

export default function GovernancePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/esg" className="text-purple-200 hover:text-white">
              ← ESG 경영
            </Link>
          </div>
          <h1 className="text-5xl font-bold mb-6">Governance | 지배구조</h1>
          <p className="text-xl text-purple-100 max-w-3xl">
            투명하고 공정한 지배구조로 신뢰받는 기업이 되겠습니다
          </p>
        </div>
      </section>

      {/* 지배구조 방침 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">지배구조 원칙</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                ysterkorea는 투명하고 책임 있는 경영을 통해 주주와 이해관계자의 권리를 보호하고,
                장기적이고 지속 가능한 기업 가치를 창출합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 활동 */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">지배구조 체계</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 이사회 구성 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">👔</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">이사회 구성</h3>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>사내이사 및 사외이사의 균형 있는 구성</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>독립성과 전문성을 갖춘 사외이사 선임</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>정기적인 이사회 개최 (분기 1회 이상)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>주요 경영 사항에 대한 심의 및 의결</span>
                </li>
              </ul>
            </div>

            {/* 윤리경영 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚖️</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">윤리경영</h3>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>윤리강령 제정 및 준수</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>부패 방지 및 공정거래 정책</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>내부신고 제도 운영 (제보자 보호)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>정기적인 윤리 교육 실시</span>
                </li>
              </ul>
            </div>

            {/* 리스크 관리 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">리스크 관리</h3>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>통합 리스크 관리 체계 구축</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>재무, 운영, 법률 리스크 모니터링</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>위기 대응 매뉴얼 수립 및 훈련</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>사이버 보안 체계 강화</span>
                </li>
              </ul>
            </div>

            {/* 내부통제 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📋</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">내부통제</h3>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>내부회계관리제도 운영</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>정기 내부감사 실시</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>외부 회계감사 수검</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>규정 및 프로세스 정비</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 정도경영 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">정도경영</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">윤리강령</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">1. 고객 최우선</h4>
                  <p className="text-gray-600">
                    고객의 가치를 최우선으로 하며, 고품질의 제품과 서비스를 제공합니다
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">2. 공정한 경쟁</h4>
                  <p className="text-gray-600">
                    공정거래법을 준수하고 시장에서 정당한 방법으로 경쟁합니다
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">3. 부정부패 금지</h4>
                  <p className="text-gray-600">
                    일체의 금품 수수와 부정청탁을 금지하며 투명한 거래를 실천합니다
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">4. 정보보호</h4>
                  <p className="text-gray-600">
                    회사와 고객의 정보를 안전하게 보호하고 개인정보 보호법을 준수합니다
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">5. 이해상충 방지</h4>
                  <p className="text-gray-600">
                    회사와 개인의 이익이 충돌하지 않도록 투명하게 업무를 처리합니다
                  </p>
                </div>
              </div>
            </div>

            {/* 신고 제도 */}
            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">윤리경영 신고센터</h3>
              <p className="text-gray-700 mb-4">
                부정부패, 비윤리적 행위를 목격하셨다면 신고해 주세요.
                제보자의 신원은 철저히 보호됩니다.
              </p>
              <div className="space-y-2 text-gray-700">
                <p>📧 이메일: ethics@ysterkorea.com</p>
                <p>📞 전화: 02-1234-5679 (윤리경영팀)</p>
                <p>📮 우편: 서울특별시 강남구 테헤란로 123 윤리경영팀</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 정보 공개 */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">정보 공개</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">재무 정보</h3>
              <p className="text-gray-600 mb-4">
                정기적인 재무제표 및 감사보고서 공개
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">📢</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">공시 정보</h3>
              <p className="text-gray-600 mb-4">
                주요 경영 사항에 대한 적시 공시
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ESG 보고서</h3>
              <p className="text-gray-600 mb-4">
                연간 지속가능경영 보고서 발간
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 성과 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">지배구조 성과</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-purple-100">윤리교육 이수율</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white p-8 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">0건</div>
              <p className="text-indigo-100">윤리 위반 사례</p>
            </div>
            <div className="bg-gradient-to-br from-violet-500 to-violet-600 text-white p-8 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">4회</div>
              <p className="text-violet-100">이사회 개최</p>
            </div>
            <div className="bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 text-white p-8 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">A등급</div>
              <p className="text-fuchsia-100">지배구조 평가</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
