import QuotationForm from '@/components/QuotationForm';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function QuotationPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

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

      <Footer />
    </main>
  );
}

