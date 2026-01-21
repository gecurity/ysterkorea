'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { Database } from '@/types/database';

type Popup = Database['public']['Tables']['popups']['Row'];

export default function Popup() {
  const [popup, setPopup] = useState<Popup | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    loadPopup();
  }, []);

  const loadPopup = async () => {
    try {
      // 오늘 하루 보지 않기 체크
      const hideUntil = localStorage.getItem('popup_hide_until');
      if (hideUntil) {
        const hideDate = new Date(hideUntil);
        if (hideDate > new Date()) {
          console.log('[Popup] 오늘 하루 보지 않기 설정됨');
          return;
        }
      }

      // 활성 팝업 조회
      const { data, error } = await supabase
        .from('popups')
        .select('*')
        .eq('is_active', true)
        .gte('end_date', new Date().toISOString())
        .lte('start_date', new Date().toISOString())
        .order('priority', { ascending: false })
        .limit(1)
        .single();

      if (error) {
        if (error.code !== 'PGRST116') { // "No rows returned" 에러가 아닌 경우만 로그
          console.error('[Popup] 데이터 로드 에러:', error);
        }
        return;
      }

      if (data) {
        setPopup(data);
        setIsVisible(true);
      }
    } catch (error) {
      console.error('[Popup] 로드 실패:', error);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleHideToday = () => {
    // 내일 자정까지 숨기기
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    localStorage.setItem('popup_hide_until', tomorrow.toISOString());
    setIsVisible(false);
  };

  if (!isVisible || !popup) {
    return null;
  }

  return (
    <>
      {/* 오버레이 */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={handleClose}
      >
        {/* 팝업 콘텐츠 */}
        <div
          className="bg-white rounded-lg shadow-2xl max-w-md w-full relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* 닫기 버튼 */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
            aria-label="닫기"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* 이미지 */}
          {popup.image_url && (
            <div className="w-full">
              <img
                src={popup.image_url}
                alt={popup.title}
                className="w-full rounded-t-lg"
              />
            </div>
          )}

          {/* 콘텐츠 */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {popup.title}
            </h2>
            <div className="text-gray-700 mb-6 whitespace-pre-line">
              {popup.content}
            </div>

            {/* 링크 버튼 */}
            {popup.link_url && (
              <Link
                href={popup.link_url}
                onClick={handleClose}
                className="block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-4"
              >
                {popup.link_text || '자세히 보기'}
              </Link>
            )}
          </div>

          {/* 하단 버튼 */}
          <div className="border-t border-gray-200 p-4 flex items-center justify-between">
            <button
              onClick={handleHideToday}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              오늘 하루 보지 않기
            </button>
            <button
              onClick={handleClose}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
