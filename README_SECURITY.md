# 🛡️ BuildingWorks 콘텐츠 및 코드 보호 시스템 (Security Guide)

본 프로젝트는 지식재산권 보호와 무단 데이터 수집 방지를 위해 다층적인 보안 시스템이 적용되어 있습니다.

---

## 1. 클라이언트 사이드 보안 (Client-Side Protection)
사용자의 브라우저 환경에서 직접적인 복제 및 분석 시도를 차단합니다.
- **조작 제한**: 마우스 우클릭, 텍스트 선택, 이미지 드래그, 복사(Ctrl+C) 금지.
- **브라우저 도구 차단**: F12(개발자 도구), Ctrl+Shift+I/J/C, Ctrl+U(소스 보기) 단축키 비활성화.
- **실시간 탐지**: 개발자 도구 활성화 시 디버거 루프를 통한 실행 방해 및 감지.
- **보안 컴포넌트**: `SecurityShield.tsx`를 통해 전역 적용.

## 2. 크롤링 및 봇 방제 (Anti-Crawling & Bot Defense)
자동화된 프로그램(스크래퍼, 크롤러)의 접근을 원천 차단합니다.
- **미들웨어 제어**: `proxy.ts`(Next.js 16 규격)를 사용하여 Python, Selenium 등 스크래핑 라이브러리 차단.
- **허니팟(Honeypot)**: 봇만 식별 가능한 보이지 않는 함정을 설치하여 비정상 접근 탐지.
- **로봇 제어**: `robots.txt`를 통해 AI 모델(GPTBot 등) 및 무분별한 크롤러 접근 거부.

## 3. 코드 보호 및 난독화 (Code Obfuscation)
배포 시 소스 코드를 해석 불가능한 형태로 변환하여 로직 유출을 방지합니다.
- **Webpack Obfuscator**: `webpack-obfuscator` 플러그인을 통한 전역 난독화.
- **주요 설정**: 문자열 암호화, 제어 흐름 왜곡, 자가 방어(Self-Defending) 모드 활성화.
- **엔진 강제**: 난독화 플러그인 호환성을 위해 Webpack 엔진을 사용합니다 (`--webpack` 플래그).

## 4. 법적 보호 및 추적 (Legal & Forensic Layer)
기술적 방어 외에 사후 대응을 위한 장치를 마련했습니다.
- **디지털 마킹**: HTML 구조 내에 보이지 않는 고유 식별 주석(Forensic Marking) 삽입.
- **이용약관(TOS)**: `이용약관 제2조`에 무단 복제 및 크롤링 금지 조항 강력 명시.
- **저작권 공지**: Footer 및 소스 코드 헤더에 Copyright 문구 상시 노출.

---

## 🛠️ 유지보수 참고사항
- **패키지 설치**: 난독화 기능을 위해 `javascript-obfuscator`, `webpack-obfuscator`가 설치되어 있어야 합니다.
- **빌드 명령어**: `npm run build` 시 자동으로 모든 보안 설정이 반영됩니다.
- **수정 필요 시**: `app/layout.tsx`에 포함된 보안 컴포넌트들의 위치를 확인하십시오.

---
*Last Updated: 2026-04-11*
