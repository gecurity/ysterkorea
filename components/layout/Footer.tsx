import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-xl font-bold mb-4">YSTER KOREA</h3>
            <p className="text-gray-400 mb-4">
              혁신적인 LED 디스플레이 기술로<br />
              건축의 미래를 만들어갑니다
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <span className="font-medium text-gray-300">주소:</span>{' '}
                경기도 평택시 고덕중앙로 290, 9F 944호<br />
                (에이스퍼스트 고덕)
              </p>
              <p>
                <span className="font-medium text-gray-300">대표번호:</span>{' '}
                031-665-7441
              </p>
              <p>
                <span className="font-medium text-gray-300">이메일:</span>{' '}
                ysterkorea@naver.com
              </p>
            </div>
          </div>

          {/* 사이트맵 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">사이트맵</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  회사소개
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-400 hover:text-white transition-colors">
                  제품 소개
                </Link>
              </li>
              {/* 뉴스룸 - 잠시 숨김 */}
              {/* <li>
                <Link href="/news" className="text-gray-400 hover:text-white transition-colors">
                  뉴스룸
                </Link>
              </li> */}
              {/* ESG - 잠시 숨김 */}
              {/* <li>
                <Link href="/esg" className="text-gray-400 hover:text-white transition-colors">
                  ESG
                </Link>
              </li> */}
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  프로젝트 사례
                </Link>
              </li>
              <li>
                <Link href="/quotation" className="text-gray-400 hover:text-white transition-colors">
                  견적 문의
                </Link>
              </li>
            </ul>
          </div>

          {/* SNS & 정책 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">소셜 미디어</h3>
            <div className="flex space-x-4 mb-6">
              {/* SNS 아이콘 - 준비되면 링크 추가 */}
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
            
            <div className="space-y-2 text-sm">
              <Link href="/privacy" className="block text-gray-400 hover:text-white transition-colors">
                개인정보처리방침
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                연락처
              </Link>
            </div>
          </div>
        </div>

        {/* 하단 저작권 */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} ysterkorea. All rights reserved.</p>
          <p className="mt-2">사업자등록번호: 470-81-01788 | 대표이사: 조화걸</p>
        </div>
      </div>
    </footer>
  );
}
