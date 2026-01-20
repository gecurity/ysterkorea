import Link from 'next/link';
import QuotationForm from '@/components/QuotationForm';

export default function QuotationPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
              ysterkorea
            </Link>
          </div>
        </div>
      </header>

      {/* 견적 문의 섹션 */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">견적 문의</h1>
          <p className="text-lg text-gray-600">
            프로젝트에 맞는 최적의 LED 디스플레이 솔루션을 제안해드립니다
          </p>
        </div>
        <QuotationForm />
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 ysterkorea. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

