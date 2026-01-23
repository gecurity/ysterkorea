import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: '개인정보처리방침 - ysterkorea',
  description: 'ysterkorea의 개인정보처리방침을 확인하세요',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">개인정보처리방침</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
            <p className="text-gray-700">
              (주)ysterkorea(이하 &ldquo;회사&rdquo;)는 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하여,
              적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다.
            </p>
            <p className="text-sm text-gray-600 mt-4">시행일자: 2024년 1월 1일</p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 개인정보의 수집 및 이용 목적</h2>
            <p className="text-gray-700 mb-4">
              회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며,
              이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>견적 문의 및 상담 서비스 제공</li>
              <li>프로젝트 제안 및 계약 체결</li>
              <li>고객 문의 응대 및 사후 관리</li>
              <li>서비스 개선을 위한 통계 분석</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 수집하는 개인정보의 항목</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 border-b text-left">수집 방법</th>
                    <th className="px-4 py-3 border-b text-left">수집 항목</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 border-b">견적 문의 폼</td>
                    <td className="px-4 py-3 border-b">
                      프로젝트명, 회사명, 문의자명, 이메일, 연락처, 요구사항
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-b">자동 수집</td>
                    <td className="px-4 py-3 border-b">
                      IP 주소, 쿠키, 방문 일시, 서비스 이용 기록
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 개인정보의 보유 및 이용 기간</h2>
            <p className="text-gray-700 mb-4">
              회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>견적 문의 정보:</strong> 문의일로부터 3년</li>
              <li><strong>계약 체결 정보:</strong> 계약 종료 후 5년 (상법)</li>
              <li><strong>쿠키 및 로그 기록:</strong> 1년</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 개인정보의 제3자 제공</h2>
            <p className="text-gray-700">
              회사는 정보주체의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
              다만, 아래의 경우에는 예외로 합니다.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
              <li>정보주체가 사전에 동의한 경우</li>
              <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. 개인정보처리의 위탁</h2>
            <p className="text-gray-700">
              회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 border-b text-left">수탁업체</th>
                    <th className="px-4 py-3 border-b text-left">위탁업무</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 border-b">Supabase</td>
                    <td className="px-4 py-3 border-b">데이터 저장 및 관리</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-b">Vercel</td>
                    <td className="px-4 py-3 border-b">웹사이트 호스팅</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. 정보주체의 권리·의무 및 행사방법</h2>
            <p className="text-gray-700 mb-4">
              정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>개인정보 열람 요구</li>
              <li>오류 등이 있을 경우 정정 요구</li>
              <li>삭제 요구</li>
              <li>처리정지 요구</li>
            </ul>
            <p className="text-gray-700 mt-4">
              권리 행사는 회사에 대해 서면, 전화, 이메일 등을 통하여 하실 수 있으며,
              회사는 이에 대해 지체없이 조치하겠습니다.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. 개인정보의 파기</h2>
            <p className="text-gray-700 mb-4">
              회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
            </p>
            <p className="text-gray-700">
              <strong>파기 방법:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>전자적 파일 형태: 복구 및 재생되지 않도록 안전하게 삭제</li>
              <li>종이 문서: 분쇄기로 분쇄하거나 소각</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. 개인정보 보호책임자</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>부서:</strong> 정보보호팀</p>
              <p className="text-gray-700 mb-2"><strong>담당자:</strong> 개인정보보호책임자</p>
              <p className="text-gray-700 mb-2"><strong>이메일:</strong> privacy@ysterkorea.com</p>
              <p className="text-gray-700"><strong>전화:</strong> 02-1234-5678</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. 개인정보의 안전성 확보조치</h2>
            <p className="text-gray-700 mb-4">
              회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>개인정보 취급 직원의 최소화 및 교육</li>
              <li>개인정보에 대한 접근 제한</li>
              <li>개인정보를 저장하는 물리적 장소에 대한 출입통제</li>
              <li>해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손 방지를 위한 보안 프로그램 설치</li>
              <li>개인정보의 암호화</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. 개인정보처리방침의 변경</h2>
            <p className="text-gray-700">
              이 개인정보처리방침은 2024년 1월 1일부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는
              변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
            </p>
          </section>

          <div className="bg-gray-100 p-6 rounded-lg mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">개인정보 침해 관련 상담 및 신고</h3>
            <ul className="space-y-2 text-gray-700">
              <li>개인정보침해신고센터: (국번없이) 118 (privacy.kisa.or.kr)</li>
              <li>대검찰청 사이버범죄수사단: 02-3480-3573 (www.spo.go.kr)</li>
              <li>경찰청 사이버안전국: (국번없이) 182 (cyberbureau.police.go.kr)</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
