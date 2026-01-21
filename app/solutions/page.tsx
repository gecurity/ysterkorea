import Link from 'next/link';
import SolutionList from '@/components/SolutionList';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: '제품 소개 - ysterkorea',
  description: '프로젝트에 맞는 최적의 LED 디스플레이 제품을 만나보세요',
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* 제품 솔루션 섹션 */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">제품 소개</h1>
            <p className="text-lg text-gray-600">
              프로젝트에 맞는 최적의 LED 디스플레이 제품을 만나보세요
            </p>
          </div>
          <SolutionList />
          <div className="text-center mt-12">
            <Link
              href="/quotation"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              견적 문의 요청
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}



