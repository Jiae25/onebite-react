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

# ch2. useMemo와 연산 최적화

## useMemo란?

"메모이제이션" 기법을 기반으로 불필요한 연산을 최적화 하는 리액트 훅

자매품 : useCallback

## 메모이제이션

Memoization : 기억해주기, 메모해두기 라는 뜻

동일한 연산을 반복적으로 수행해야할 때, 매번 계산하도록 하지 않고,

최초로 한 번 계산했을 떄 결과값을 메모리에 저장해두고 다시 이 연산이 필요해지면 저장되어 있던 결과값을 돌려준다.
