'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { Database } from '@/types/database';

type Solution = Database['public']['Tables']['Solutions']['Row'];

export default function SolutionList() {
  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadSolutions();
  }, []);

  const loadSolutions = async () => {
    setIsLoading(true);
    console.log('[SolutionList] 솔루션 데이터 로드 시작');

    try {
      const { data, error } = await supabase
        .from('Solutions')
        .select('*')
        .eq('is_active', true)
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

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">제품 솔루션을 불러오는 중...</p>
      </div>
    );
  }

  if (solutions.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {solutions.map((solution) => (
        <div
          key={solution.solution_id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
        >
          <div className="p-6 flex-grow">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{solution.title}</h3>
            {solution.short_description && (
              <p className="text-gray-600 mb-4 line-clamp-3">{solution.short_description}</p>
            )}
          </div>
          <div className="px-6 pb-6">
            <Link
              href={`/solutions/${solution.slug}`}
              className="inline-block w-full px-6 py-3 bg-blue-600 text-white rounded-lg text-center font-semibold hover:bg-blue-700 transition-colors"
            >
              자세히 보기
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

