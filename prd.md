# 📄 제품 요구 사항 정의서 (PRD.md)
## LED 디스플레이 B2B 홈페이지 구축

### 1. 프로젝트 요약 (Project Summary)

| 항목 | 상세 내용 |
| :--- | :--- |
| **최종 목표** | 영업 문의 및 견적 요청 (Lead Generation) 전환율 극대화 |
| **핵심 대상** | B2B 건설/인테리어 업체 구매 담당자 및 설계자 |
| **핵심 가치** | 기술적 전문성, 프로젝트 성공 신뢰도, 미니멀리즘 UX |
| **권장 기술 스택** | Front-end: Next.js (React), Styling: Tailwind CSS |
| **백엔드/DB 환경** | **Supabase (PostgreSQL 기반)** 사용 확정 |
| **데이터 모델** | **ERD Cloud에서 모델링 완료.** 두 테이블 (`Leads_Quotation`, `CaseStudies`) 간 관계 정의됨. |

---

### 2. 디자인 및 UX/UI 요구 사항

**톤앤매너:** 혁신적, 기술 중심적, 신뢰를 주는 전문가적, 깔끔한 미니멀리즘

**핵심 시각 전략:**
1.  **메인 비주얼:** 압도적인 고해상도 실제 설치 영상/이미지로 기술력 증명.
2.  **지양 요소:** 추상적인 스톡 이미지, 비전문가적인 톤.
3.  **CTA:** 모든 주요 섹션 하단 및 상단에 명확하게 **[견적 문의 요청]** 버튼 배치.

---

### 3. 핵심 기능 요구 사항 (Functional Requirements)

#### FR1: 메인 페이지 구현
* **헤더/푸터:** 필수 링크 및 CTA 버튼 포함, 반응형 디자인 필수.
* **5대 핵심 섹션:** 메인 비주얼(H1: 미래 건축의 기준), 솔루션 요약, 차별화 기술, 프로젝트 사례 요약, 전환 유도 섹션으로 구성.
* **카피라이팅 반영:** 모든 텍스트는 B2B 고객의 '비즈니스 이익'에 초점.

#### FR2: 견적 문의 리드 생성 시스템
* **기능:** 사용자가 견적 문의 폼을 통해 데이터를 제출하면, 백엔드 API를 통해 `Leads_Quotation` 테이블에 저장되어야 함.
* **유효성 검사:** `project_name`, `company_name`, `contact_email`, `required_solution` 등 **필수 필드**는 프론트엔드와 백엔드 모두에서 검증되어야 함.

#### FR3: 프로젝트 사례 검색 시스템
* **기능:** `CaseStudies` 테이블의 데이터를 조회하며, 사용자가 **3가지 핵심 필터**를 사용하여 원하는 사례를 찾을 수 있어야 함.
    1.  **설치 환경** (실내/실외/특수 등)
    2.  **산업 분야** (건설/리테일/방송 등)
    3.  **설치 면적** (범위 검색)
* **UX:** 필터링 결과는 깔끔한 카드 형식으로 즉시 업데이트되어야 함.

---

### 4. 데이터베이스 스키마 정의 (For Development)

#### 4.1. 견적 문의 데이터 테이블: `Leads_Quotation`

```sql
CREATE TABLE Leads_Quotation (
    lead_id SERIAL PRIMARY KEY,
    project_name VARCHAR(255) NOT NULL,
    company_name VARCHAR(255) NOT NULL,
    inquirer_name VARCHAR(100),
    contact_email VARCHAR(255) NOT NULL,
    contact_phone VARCHAR(50) NOT NULL,
    required_solution VARCHAR(255) NOT NULL,
    expected_size VARCHAR(50) NOT NULL,
    expected_timeline DATE,
    budget_range VARCHAR(100),
    detailed_requirement TEXT,
    inquiry_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    lead_status VARCHAR(50) DEFAULT 'New', -- ENUM: New, Contacted, Follow-up, Proposal, Closed-Won, Closed-Lost
    assigned_sales_rep VARCHAR(100)
);


CREATE TABLE CaseStudies (
    case_id SERIAL PRIMARY KEY,
    case_title VARCHAR(255) NOT NULL,
    industry_type VARCHAR(100) NOT NULL, -- 필터링 기준
    installation_env VARCHAR(100) NOT NULL, -- 필터링 기준
    product_model_used VARCHAR(100),
    total_area_sqm DECIMAL(10, 2), -- 필터링 기준 (범위 검색)
    resolution_pixels VARCHAR(100),
    challenge TEXT,
    solution_provided TEXT,
    result_impact TEXT,
    project_date DATE
);



### 3단계: Cursor 활용 가이드 (Cursor AI에 PRD 주입)

이제 위의 PRD.md 내용을 복사하여 Cursor에서 활용할 차례입니다.

1.  **`PRD.md` 파일 생성:** 프로젝트 루트 폴더에 위의 내용을 붙여넣어 `PRD.md` 파일을 생성합니다.
2.  **Cursor Chat 시작 시:** Cursor의 대화창에 다음 프롬프트를 입력하여 **AI에게 이 문서를 프로젝트 컨텍스트로 지정**합니다.

    > **"나는 이제 Next.js와 Tailwind CSS를 사용하여 B2B LED 홈페이지를 개발할 거야. 이 프로젝트의 모든 요구 사항과 DB 스키마는 첨부된 `PRD.md` 파일에 정의되어 있어. 이 문서를 이 대화의 주 컨텍스트로 설정하고, 내가 요청하는 모든 코드 생성 및 질문은 이 PRD에 명시된 스택과 요구 사항을 기반으로 해줘."**

3.  **코드 생성 요청 예시:** 이제 구체적인 코딩 요청을 할 수 있습니다.

    > "PRD의 **FR2 요구 사항**을 기반으로, `project_name`과 `contact_email`을 포함하는 **Tailwind 스타일의 견적 문의 React 컴포넌트** 초안을 작성해줘. 폼 제출 시 백엔드 API Route로 데이터를 POST하는 로직의 주석도 포함해줘."

이러한 방식으로 작업하면, Cursor는 `PRD.md`를 **가이드라인** 삼아 일관성 있고 정확하며 사용자님의 요구 사항에 완벽하게 부합하는 코드를 제공할 것입니다.
