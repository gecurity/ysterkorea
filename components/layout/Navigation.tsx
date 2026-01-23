'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const navigationItems: NavItem[] = [
  {
    label: '회사소개',
    href: '/about',
  },
  {
    label: '제품 소개',
    href: '/solutions',
  },
  {
    label: '프로젝트 사례',
    href: '/projects',
  },
  // 뉴스룸 - 잠시 숨김
  // {
  //   label: '뉴스룸',
  //   children: [
  //     { label: '전체 뉴스', href: '/news' },
  //     { label: '보도자료', href: '/press' },
  //   ],
  // },
  // ESG - 잠시 숨김
  // {
  //   label: 'ESG',
  //   children: [
  //     { label: 'ESG 경영', href: '/esg' },
  //     { label: '환경', href: '/esg/environment' },
  //     { label: '사회', href: '/esg/social' },
  //     { label: '지배구조', href: '/esg/governance' },
  //   ],
  // },
  {
    label: '견적 문의',
    href: '/quotation',
  },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav className="relative">
      {/* 데스크톱 네비게이션 */}
      <div className="hidden lg:flex items-center space-x-8">
        {navigationItems.map((item) => (
          <div key={item.label} className="relative group">
            {item.children ? (
              <div>
                <button
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                >
                  {item.label}
                  <svg
                    className="inline-block w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* 드롭다운 메뉴 */}
                <div
                  className={`absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-200 ${
                    openDropdown === item.label ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`block px-4 py-3 text-sm hover:bg-blue-50 transition-colors ${
                        isActive(child.href) ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                href={item.href!}
                className={`text-gray-700 hover:text-blue-600 font-medium transition-colors ${
                  isActive(item.href!) ? 'text-blue-600' : ''
                }`}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* 모바일 햄버거 버튼 */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-700 hover:text-blue-600 focus:outline-none"
          aria-label="메뉴"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full right-0 mt-2 w-64 bg-white shadow-lg rounded-lg overflow-hidden z-50">
          {navigationItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 font-medium flex items-center justify-between"
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === item.label && (
                    <div className="bg-gray-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block px-6 py-2 text-sm hover:bg-blue-50 transition-colors ${
                            isActive(child.href) ? 'text-blue-600 bg-blue-50' : 'text-gray-600'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href!}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 hover:bg-blue-50 transition-colors ${
                    isActive(item.href!) ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
