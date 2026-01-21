import Link from 'next/link';
import Image from 'next/image';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between items-center">
          {/* 로고 */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/images/logo.png?v=3"
              alt="ysterkorea"
              width={250}
              height={65}
              priority
              className="h-16 w-auto"
              unoptimized
            />
          </Link>

          {/* 네비게이션 */}
          <Navigation />
        </div>
      </div>
    </header>
  );
}
