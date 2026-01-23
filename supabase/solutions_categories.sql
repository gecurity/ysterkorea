-- Solutions 테이블에 카테고리 및 이미지 관련 컬럼 추가
-- 작성일: 2024-01-21
-- 설명: 제품 카테고리, 이미지, 상세 설명 컬럼 추가

-- 1. 카테고리 컬럼 추가 (실외, 실내, 특수, 렌탈, 간판)
ALTER TABLE "Solutions" 
ADD COLUMN IF NOT EXISTS category TEXT;

-- 2. 이미지 URL 컬럼 추가
ALTER TABLE "Solutions" 
ADD COLUMN IF NOT EXISTS image_url TEXT;

-- 3. 상세 설명 컬럼 추가 (제품 소개용, short_description보다 긴 내용)
ALTER TABLE "Solutions" 
ADD COLUMN IF NOT EXISTS description TEXT;

-- 컬럼 설명 추가
COMMENT ON COLUMN "Solutions".category IS '제품 카테고리: outdoor(실외), indoor(실내), special(특수), rental(렌탈), signage(간판)';
COMMENT ON COLUMN "Solutions".image_url IS '제품 이미지 파일명 (예: indoor-led.jpg)';
COMMENT ON COLUMN "Solutions".description IS '제품 상세 설명 (제품 소개 섹션용)';

-- 카테고리 제약조건 추가 (선택사항)
ALTER TABLE "Solutions"
ADD CONSTRAINT valid_category CHECK (
  category IS NULL OR 
  category IN ('outdoor', 'indoor', 'special', 'rental', 'signage')
);
