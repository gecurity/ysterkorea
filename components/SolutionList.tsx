'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Database } from '@/types/database';

type Solution = Database['public']['Tables']['Solutions']['Row'];

const categories = [
  { 
    id: 'outdoor', 
    name: '실외용 LED', 
    icon: '🏢',
    image: '/images/categories/outdoor.png',
    description: '날씨에 강한 고휘도 실외 디스플레이' 
  },
  { 
    id: 'indoor', 
    name: '실내용 LED', 
    icon: '🏠',
    image: '/images/categories/indoor.png',
    description: '고해상도 실내 전용 디스플레이' 
  },
  { 
    id: 'special', 
    name: '특수 LED', 
    icon: '⚡',
    image: '/images/categories/special.png',
    description: '특수 용도 맞춤형 디스플레이' 
  },
  { 
    id: 'rental', 
    name: '렌탈', 
    icon: '📦',
    image: '/images/categories/rental.png',
    description: '행사 및 이벤트용 단기 렌탈' 
  },
  { 
    id: 'signage', 
    name: '간판', 
    icon: '🪧',
    image: '/images/categories/signage.png',
    description: '상업용 LED 간판 및 사이니지' 
  },
];

export default function SolutionList() {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams?.get('category');
  
  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (selectedCategory) {
      loadSolutionsByCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const loadSolutionsByCategory = async (category: string) => {
    setIsLoading(true);
    console.log('[SolutionList] 카테고리별 솔루션 로드:', category);

    try {
      const { data, error } = await supabase
        .from('Solutions')
        .select('*')
        .eq('is_active', true)
        .eq('category', category)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('[SolutionList] 데이터 로드 에러:', error);
        throw error;
      }

      console.log('[SolutionList] 데이터 로드 성공:', data?.length || 0, '건');
      setSolutions((data as Solution[]) || []);
    } catch (error) {
      console.error('[SolutionList] 로드 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // 카테고리가 선택되지 않았을 때: NovaStar 스타일 카테고리 카드
  if (!selectedCategory) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/solutions?category=${category.id}`}
            className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            {/* 이미지 섹션 - NovaStar 스타일 */}
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-700">
              <img 
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              {/* 오버레이 효과 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
            </div>

            {/* 제목 & 설명 섹션 */}
            <div className="p-6 bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {category.name}
              </h3>
              <p className="text-gray-600 line-clamp-2">
                {category.description}
              </p>
            </div>

            {/* 빛나는 테두리 효과 */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 rounded-xl transition-all duration-500 pointer-events-none"></div>
          </Link>
        ))}
      </div>
    );
  }

  // 카테고리가 선택되었을 때: 제품 목록 표시
  const currentCategory = categories.find(c => c.id === selectedCategory);

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">제품을 불러오는 중...</p>
      </div>
    );
  }

  return (
    <div>
      {/* 카테고리 제목 */}
      {currentCategory && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">{currentCategory.name}</h2>
        </div>
      )}

      {/* 제품 목록 */}
      {solutions.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-600">등록된 제품이 없습니다.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <Link
              key={solution.solution_id}
              href={`/solutions/${solution.slug}`}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-blue-300 transition-all duration-500 transform hover:-translate-y-1 flex flex-col"
            >
              {/* 제품 이미지 */}
              <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                {solution.image_url ? (
                  <img 
                    src={`/images/products/${solution.image_url}`}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl text-gray-400">📦</span>
                  </div>
                )}
                {/* 오버레이 효과 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* 제품 정보 */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {solution.title}
                </h3>
                {solution.short_description && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                    {solution.short_description}
                  </p>
                )}
                
                {/* 하단 버튼 영역 */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-blue-600 font-semibold">
                    <span className="group-hover:text-blue-700 transition-colors">
                      자세히 보기
                    </span>
                    <svg 
                      className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 테두리 효과 */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 rounded-xl transition-all duration-500 pointer-events-none"></div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
