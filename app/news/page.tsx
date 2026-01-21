import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NewsList from '@/components/NewsList';

export const metadata = {
  title: '뉴스룸 - ysterkorea',
  description: 'ysterkorea의 최신 소식과 기술 개발, 프로젝트 현황을 확인하세요',
};

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">뉴스룸</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            ysterkorea의 최신 소식과 기술 혁신, 프로젝트 성과를 만나보세요
          </p>
        </div>
      </section>

      {/* 뉴스 목록 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsList />
        </div>
      </section>

      <Footer />
    </main>
  );
}
