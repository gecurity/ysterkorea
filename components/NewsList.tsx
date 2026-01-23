'use client';

import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import { Database } from '@/types/database';
import NewsCard from './NewsCard';

type News = Database['public']['Tables']['news']['Row'];

interface NewsListProps {
  category?: string;
  limit?: number;
}

export default function NewsList({ category, limit }: NewsListProps) {
  const [news, setNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');

  const loadNews = useCallback(async () => {
    setIsLoading(true);
    console.log('[NewsList] 뉴스 데이터 로드 시작');

    try {
      let query = supabase
        .from('news')
        .select('*')
        .eq('is_published', true)
        .order('published_date', { ascending: false });

      if (selectedCategory && selectedCategory !== 'all') {
        query = query.eq('category', selectedCategory);
      }

      if (limit) {
        query = query.limit(limit);
      }

      const { data, error } = await query;

      if (error) {
        console.error('[NewsList] 데이터 로드 에러:', error);
        throw error;
      }

      console.log('[NewsList] 데이터 로드 성공:', data?.length || 0, '건');
      setNews(data || []);
    } catch (error) {
      console.error('[NewsList] 로드 실패:', error);
    } finally {
      setIsLoading(false);
    }
  }, [selectedCategory, limit]);

  useEffect(() => {
    loadNews();
  }, [loadNews]);

  const categories = [
    { value: 'all', label: '전체' },
    { value: 'press', label: '보도자료' },
    { value: 'tech', label: '기술' },
    { value: 'project', label: '프로젝트' },
    { value: 'announcement', label: '공지사항' },
  ];

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">뉴스를 불러오는 중...</p>
      </div>
    );
  }

  return (
    <div>
      {/* 카테고리 필터 */}
      {!category && (
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === cat.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 뉴스 목록 */}
      {news.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <p className="text-gray-600">등록된 뉴스가 없습니다.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <NewsCard key={item.news_id} news={item} />
          ))}
        </div>
      )}
    </div>
  );
}
