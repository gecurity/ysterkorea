# Public 폴더

이 폴더에는 정적 파일들을 저장합니다.

## 폴더 구조

- `/images/` - 이미지 파일 (로고, 제품 이미지, 프로젝트 사진 등)
- 기타 정적 파일들 (favicon.ico, robots.txt 등)

## 필요한 이미지 에셋

### 우선순위 높음
- `logo.png` 또는 `logo.svg` - 회사 로고
- `favicon.ico` - 파비콘

### 권장 에셋
- 회사 소개 이미지
- 제품 솔루션 이미지
- 프로젝트 사례 이미지
- 팀 사진
- 인증서 이미지

## 사용 방법

Next.js에서 public 폴더의 파일은 루트 경로로 접근 가능합니다:

```jsx
<Image src="/images/logo.png" alt="Logo" />
```
