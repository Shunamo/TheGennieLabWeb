# The Gennie Lab 웹사이트

연구실 홈페이지 및 어드민 관리 시스템

## 프로젝트 구조

```
├── README.md                       # README file
├── .vscode                         # VSCode configuration
├── public                          # Public assets folder
├── src
│   ├── app                         # Next JS App (App Router)
│   ├── components                  # React components
│   └── styles                      # Styles folder
├── next.config.ts                  # Next JS configuration
└── tsconfig.json                   # TypeScript configuration
```

## 기능

- **홈페이지**: 연구실 소개 및 카테고리 네비게이션

## 시작하기

### 1. 의존성 설치

```bash
npm install
# 또는
yarn install
```

### 2. 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## Vercel 배포

### 1. Vercel에 프로젝트 연결

1. [Vercel](https://vercel.com)에 로그인
2. "New Project" 클릭
3. GitHub 저장소를 연결하거나 직접 배포

### 2. 배포

프로젝트가 자동으로 배포됩니다!

## 도메인 연결

Vercel 대시보드에서:

1. 프로젝트 설정으로 이동
2. "Domains" 섹션에서 도메인 추가
3. DNS 설정 안내를 따르세요

## 기술 스택

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Pretendard** (폰트)
