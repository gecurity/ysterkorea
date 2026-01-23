import { Suspense } from 'react';
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
          <Suspense fallback={<div className="text-center py-12 text-gray-600">로딩 중...</div>}>
            <SolutionList />
          </Suspense>
        </div>
      </section>

      <Footer />
    </main>
  );
}



