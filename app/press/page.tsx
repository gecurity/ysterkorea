import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NewsList from '@/components/NewsList';

export const metadata = {
  title: '보도자료 - ysterkorea',
  description: 'ysterkorea의 공식 보도자료를 확인하세요',
};

export default function PressPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">보도자료</h1>
          <p className="text-xl text-purple-100 max-w-3xl">
            ysterkorea의 공식 보도자료 및 언론 발표 내용입니다
          </p>
        </div>
      </section>

      {/* 보도자료 목록 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">언론 문의</h2>
            <p className="text-gray-600 mb-2">
              보도자료 및 취재 문의: <a href="mailto:pr@ysterkorea.com" className="text-blue-600 hover:underline">pr@ysterkorea.com</a>
            </p>
            <p className="text-gray-600">
              전화: 02-1234-5678
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <NewsList category="press" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
