import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata = {
  title: '연락처 - ysterkorea',
  description: 'ysterkorea의 연락처 및 오시는 길 정보',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            ysterkorea에 문의하시거나 방문하시려면 아래 정보를 참고하세요
          </p>
        </div>
      </section>

      {/* 연락처 정보 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* 전화 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">전화</h3>
              <p className="text-gray-600">02-1234-5678</p>
              <p className="text-sm text-gray-500 mt-1">평일 09:00 - 18:00</p>
            </div>

            {/* 이메일 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">이메일</h3>
              <p className="text-gray-600">contact@ysterkorea.com</p>
              <p className="text-sm text-gray-500 mt-1">24시간 접수 가능</p>
            </div>

            {/* 주소 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">주소</h3>
              <p className="text-gray-600">서울특별시 강남구<br />테헤란로 123</p>
            </div>

            {/* 팩스 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">팩스</h3>
              <p className="text-gray-600">02-1234-5679</p>
            </div>
          </div>

          {/* 부서별 연락처 */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">부서별 연락처</h2>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">부서</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">담당 업무</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">연락처</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">영업팀</td>
                    <td className="px-6 py-4 text-sm text-gray-600">견적 문의, 프로젝트 상담</td>
                    <td className="px-6 py-4 text-sm text-gray-600">sales@ysterkorea.com</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">기술지원팀</td>
                    <td className="px-6 py-4 text-sm text-gray-600">기술 문의, A/S</td>
                    <td className="px-6 py-4 text-sm text-gray-600">support@ysterkorea.com</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">홍보팀</td>
                    <td className="px-6 py-4 text-sm text-gray-600">보도자료, 언론 문의</td>
                    <td className="px-6 py-4 text-sm text-gray-600">pr@ysterkorea.com</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">인사팀</td>
                    <td className="px-6 py-4 text-sm text-gray-600">채용 문의</td>
                    <td className="px-6 py-4 text-sm text-gray-600">hr@ysterkorea.com</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">정보보호팀</td>
                    <td className="px-6 py-4 text-sm text-gray-600">개인정보 관련</td>
                    <td className="px-6 py-4 text-sm text-gray-600">privacy@ysterkorea.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 오시는 길 */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">오시는 길</h2>
          
          {/* 지도 (Google Maps 없이 정보만 제공) */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-500">서울특별시 강남구 테헤란로 123</p>
                <p className="text-sm text-gray-400 mt-2">Google Maps에서 보기</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 대중교통 */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  대중교통
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-900">지하철</p>
                    <p className="text-gray-600">2호선 강남역 3번 출구 도보 5분</p>
                    <p className="text-gray-600">신분당선 강남역 1번 출구 도보 7분</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">버스</p>
                    <p className="text-gray-600">간선: 146, 301, 472</p>
                    <p className="text-gray-600">지선: 3414, 4412</p>
                  </div>
                </div>
              </div>

              {/* 자가용 */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>
                  자가용
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-900">주차</p>
                    <p className="text-gray-600">건물 지하 1~3층 주차장 이용</p>
                    <p className="text-gray-600">방문 고객 2시간 무료</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">내비게이션</p>
                    <p className="text-gray-600">"ysterkorea 본사" 또는</p>
                    <p className="text-gray-600">"서울 강남구 테헤란로 123"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">프로젝트 문의가 있으신가요?</h2>
          <p className="text-xl text-gray-600 mb-8">
            전문 상담을 통해 최적의 솔루션을 제안해드립니다
          </p>
          <Link
            href="/quotation"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            견적 문의하기
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
