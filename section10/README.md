# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# ch1. 최적화란?

## 최적화(Optimization)

웹 서비스의 성능을 개선하는 모든 행위를 일컫음

아주 단순한 것부터 아주 어려운 방법까지 매우 다양함

### 일반적인 웹 서비스 최적화 방법

- 서버의 응답속도 개선
- 이미지, 폰트, 코드 파일 등의 정적 파일 로딩 개선
- 불필요한 네트워크 요청 줄임
- 등

### React App 내부의 최적화 방법

- 컴포넌트 내부의 불필요한 연산 방지
- 컴포넌트 내부의 불필요한 함수 재생성 방지
- 컴포넌트의 불필요한 리렌더링 방지
