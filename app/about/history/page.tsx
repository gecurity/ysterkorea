import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata = {
  title: '연혁 - ysterkorea',
  description: 'ysterkorea의 성장 과정과 주요 마일스톤을 소개합니다',
};

interface TimelineItem {
  year: string;
  events: {
    month?: string;
    title: string;
    description?: string;
  }[];
}

const timeline: TimelineItem[] = [
  {
    year: '2024',
    events: [
      {
        month: '10월',
        title: 'ISO 14001 환경경영시스템 인증 획득',
        description: '친환경 경영 체계 구축 및 국제 표준 달성',
      },
      {
        month: '06월',
        title: '해외 법인 설립 (싱가포르)',
        description: '동남아시아 시장 본격 진출',
      },
      {
        month: '03월',
        title: '서울 강남구 본사 확장 이전',
        description: '조직 규모 확대에 따른 업무 공간 확장',
      },
    ],
  },
  {
    year: '2023',
    events: [
      {
        month: '11월',
        title: '대한민국 LED 기술 대상 수상',
        description: '기술 혁신 부문 최우수상 수상',
      },
      {
        month: '08월',
        title: '누적 프로젝트 500건 돌파',
        description: '국내외 주요 프로젝트 성공적 완수',
      },
      {
        month: '04월',
        title: '스마트 LED 제어 시스템 특허 등록',
        description: 'AI 기반 자동 제어 기술 개발',
      },
    ],
  },
  {
    year: '2022',
    events: [
      {
        month: '12월',
        title: '연매출 100억원 돌파',
        description: '안정적인 성장세 지속',
      },
      {
        month: '09월',
        title: '기업부설연구소 설립',
        description: 'R&D 역량 강화를 위한 전문 연구소 개소',
      },
      {
        month: '05월',
        title: '벤처기업 인증 획득',
        description: '기술력 인정 및 정부 지원 사업 참여',
      },
    ],
  },
  {
    year: '2021',
    events: [
      {
        month: '10월',
        title: '방송사 스튜디오 LED 디스플레이 공급',
        description: '주요 방송사 가상 스튜디오 구축 프로젝트 완료',
      },
      {
        month: '06월',
        title: '직원 50명 돌파',
        description: '조직 확대 및 전문 인력 채용',
      },
    ],
  },
  {
    year: '2020',
    events: [
      {
        month: '11월',
        title: '건축물 미디어 파사드 프로젝트 수주',
        description: '대형 빌딩 외벽 LED 디스플레이 설치',
      },
      {
        month: '03월',
        title: 'ISO 9001 품질경영시스템 인증',
        description: '국제 표준 품질 관리 체계 확립',
      },
    ],
  },
  {
    year: '2019',
    events: [
      {
        month: '12월',
        title: '사옥 확장 이전',
        description: '서울 강남구로 확장 이전',
      },
      {
        month: '07월',
        title: '첫 해외 프로젝트 수주 (일본)',
        description: '글로벌 시장 진출의 첫 발걸음',
      },
    ],
  },
  {
    year: '2018',
    events: [
      {
        month: '09월',
        title: 'LED 디스플레이 기술 특허 등록',
        description: '핵심 기술 지적재산권 확보',
      },
      {
        month: '03월',
        title: '누적 프로젝트 100건 달성',
        description: '안정적인 프로젝트 수주 및 완료',
      },
    ],
  },
  {
    year: '2017',
    events: [
      {
        month: '11월',
        title: '대형 리테일 매장 LED 디스플레이 공급',
        description: '백화점 및 쇼핑몰 프로젝트 다수 수주',
      },
      {
        month: '05월',
        title: '주요 파트너사와 전략적 협약 체결',
        description: '안정적인 공급망 구축',
      },
    ],
  },
  {
    year: '2016',
    events: [
      {
        month: '08월',
        title: '첫 대형 프로젝트 수주',
        description: '상업용 빌딩 로비 LED 디스플레이 설치',
      },
      {
        month: '02월',
        title: '법인 전환 (주식회사 ysterkorea)',
        description: '사업 확장에 따른 법인 전환',
      },
    ],
  },
  {
    year: '2015',
    events: [
      {
        month: '03월',
        title: 'ysterkorea 설립',
        description: 'LED 디스플레이 전문 기업으로 출발',
      },
    ],
  },
];

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">연혁</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            2015년 설립 이래, ysterkorea는 끊임없는 혁신과 도전으로 성장해왔습니다
          </p>
        </div>
      </section>

      {/* 주요 성과 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">주요 성과</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10년</div>
              <p className="text-gray-600">업력</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">완료 프로젝트</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <p className="text-gray-600">파트너 기업</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5개국</div>
              <p className="text-gray-600">진출 국가</p>
            </div>
          </div>
        </div>
      </section>

      {/* 타임라인 */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">성장의 발자취</h2>
          
          <div className="relative">
            {/* 타임라인 세로선 */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

            {timeline.map((yearData, yearIndex) => (
              <div key={yearData.year} className="mb-12">
                {/* 연도 */}
                <div className="flex items-center mb-6">
                  <div className="relative z-10 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{yearData.year}</span>
                  </div>
                  <div className="ml-6 h-0.5 w-20 bg-blue-200"></div>
                </div>

                {/* 이벤트들 */}
                <div className="ml-0 md:ml-24 space-y-6">
                  {yearData.events.map((event, eventIndex) => (
                    <div
                      key={`${yearData.year}-${eventIndex}`}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600"
                    >
                      {event.month && (
                        <span className="text-sm font-semibold text-blue-600">{event.month}</span>
                      )}
                      <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">{event.title}</h3>
                      {event.description && (
                        <p className="text-gray-600">{event.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 인증 및 수상 */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">인증 및 수상 내역</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">대한민국 LED 기술 대상</h3>
              <p className="text-gray-600">2023년 기술 혁신 부문 최우수상</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ISO 인증</h3>
              <p className="text-gray-600">ISO 9001, ISO 14001 품질/환경 경영시스템</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">특허 등록</h3>
              <p className="text-gray-600">LED 디스플레이 핵심 기술 다수 특허 보유</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">다음 10년도 함께 해주세요</h2>
          <p className="text-xl text-gray-600 mb-8">
            ysterkorea의 성장과 함께할 파트너를 기다립니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quotation"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              프로젝트 시작하기
            </Link>
            <Link
              href="/solutions"
              className="inline-block px-8 py-3 bg-gray-200 text-gray-900 rounded-lg text-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              제품 솔루션 보기
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
