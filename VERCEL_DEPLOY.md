# Vercel 배포 가이드

이 프로젝트를 Vercel에 배포하는 방법을 안내합니다.

## 방법 1: Vercel 웹 인터페이스를 통한 배포 (권장)

### 1단계: GitHub에 코드 푸시

1. GitHub 저장소에 코드를 푸시합니다:
   ```bash
   git add .
   git commit -m "Vercel 배포 준비"
   git push origin main
   ```

### 2단계: Vercel에서 프로젝트 Import

1. [Vercel 웹사이트](https://vercel.com)에 로그인합니다
2. "Add New..." → "Project" 클릭
3. GitHub 저장소를 선택하거나 연결합니다
4. 프로젝트를 선택하고 "Import" 클릭

### 3단계: 프로젝트 설정

1. **프로젝트 이름**: `ysterkorea-led` (또는 원하는 이름)
2. **Framework Preset**: Next.js (자동 감지됨)
3. **Root Directory**: `./` (기본값)
4. **Build Command**: `npm run build` (기본값)
5. **Output Directory**: `.next` (기본값)
6. **Install Command**: `npm install` (기본값)

### 4단계: 환경 변수 설정

Vercel 대시보드에서 "Environment Variables" 섹션으로 이동하여 다음 변수들을 추가합니다:

#### 필수 환경 변수

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
ADMIN_DASHBOARD_PASSWORD=your-admin-password
```

#### 환경 변수 설정 방법

1. Vercel 프로젝트 설정 페이지에서 "Environment Variables" 탭 클릭
2. 각 변수를 추가:
   - **Key**: 변수 이름 (예: `NEXT_PUBLIC_SUPABASE_URL`)
   - **Value**: 변수 값
   - **Environment**: Production, Preview, Development 모두 선택 (또는 필요에 따라 선택)
3. "Save" 클릭

> ⚠️ **중요**: `SUPABASE_SERVICE_ROLE_KEY`는 서버 전용 키이므로 절대 클라이언트에 노출되지 않도록 주의하세요.

### 5단계: 배포

1. "Deploy" 버튼 클릭
2. 배포가 완료될 때까지 대기 (보통 2-5분)
3. 배포 완료 후 제공되는 URL로 접속하여 확인

## 방법 2: Vercel CLI를 통한 배포 (선택사항)

터미널에서 직접 배포하려면:

1. Vercel CLI 설치:
   ```bash
   npm i -g vercel
   ```

2. 로그인:
   ```bash
   vercel login
   ```

3. 배포:
   ```bash
   vercel
   ```

4. 프로덕션 배포:
   ```bash
   vercel --prod
   ```

## 환경 변수 확인

배포 전에 다음 환경 변수가 모두 설정되어 있는지 확인하세요:

- ✅ `NEXT_PUBLIC_SUPABASE_URL`
- ✅ `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- ✅ `SUPABASE_SERVICE_ROLE_KEY`
- ✅ `ADMIN_DASHBOARD_PASSWORD`

## 배포 후 확인 사항

1. **홈페이지 접속**: 배포된 URL로 접속하여 정상 작동 확인
2. **관리자 페이지**: `/admin` 경로 접속 및 로그인 테스트
3. **API 엔드포인트**: `/api/leads` 등 API 동작 확인
4. **환경 변수**: Vercel 대시보드에서 환경 변수가 올바르게 설정되었는지 확인

## 문제 해결

### 빌드 실패

- Vercel 대시보드의 "Deployments" 탭에서 빌드 로그 확인
- 환경 변수가 모두 설정되었는지 확인
- `package.json`의 빌드 스크립트 확인

### 환경 변수 오류

- Vercel 대시보드에서 환경 변수 재확인
- 변수 이름에 오타가 없는지 확인
- Production, Preview, Development 환경 모두에 설정되어 있는지 확인

### Supabase 연결 오류

- Supabase 프로젝트가 활성화되어 있는지 확인
- Supabase URL과 키가 올바른지 확인
- Supabase의 네트워크 설정에서 Vercel 도메인을 허용했는지 확인

## 자동 배포 설정

GitHub에 코드를 푸시하면 자동으로 배포되도록 설정됩니다:

1. Vercel 프로젝트 설정에서 "Git" 탭 확인
2. GitHub 저장소가 연결되어 있는지 확인
3. 브랜치별 배포 설정:
   - `main` 브랜치 → Production 배포
   - 다른 브랜치 → Preview 배포

## 추가 리소스

- [Vercel 공식 문서](https://vercel.com/docs)
- [Next.js 배포 가이드](https://nextjs.org/docs/deployment)
- [Supabase 설정 가이드](https://supabase.com/docs)
