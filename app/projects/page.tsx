import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CaseStudySearch from '@/components/CaseStudySearch';

export const metadata = {
  title: '프로젝트 사례 - ysterkorea',
  description: 'ysterkorea의 다양한 LED 디스플레이 프로젝트 사례를 확인하세요',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">프로젝트 사례</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            다양한 산업 분야에서 성공적으로 완료한 LED 디스플레이 프로젝트를 만나보세요
          </p>
        </div>
      </section>

      {/* 프로젝트 사례 검색 섹션 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">성공 사례 둘러보기</h2>
            <p className="text-lg text-gray-600">
              설치 환경, 산업 분야, 면적 등 다양한 조건으로 프로젝트를 검색할 수 있습니다
            </p>
          </div>
          <CaseStudySearch />
        </div>
      </section>

      <Footer />
    </main>
  );
}
