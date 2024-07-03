# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# ch1. useReducer 소개

## useReducer

컴포넌트 내부에 새로운 State를 생성하는 React Hook

모든 useState는 useReducer로 대체 가능

상태 관리 코드를 컴포넌트 외부로 분리할 수 있음

### useReducer란?

컴포넌트 내부에 상태관리 코드를 작성해야 했는데,

useReducer를 사용하면 컴포넌트 외부에 상태관리 코드를 분리할 수 있음
