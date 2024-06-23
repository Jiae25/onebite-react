# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Section7 라이프 사이클

## ch1. 라이프 사이클이란?

### 리액트 컴포넌트의 라이프 사이클

- Mount

  컴포넌트가 탄생하는 순간

  화면에 처음 렌더링 되는 순간

- Update

  컴포넌트가 다시 렌더링 되는 순간

  리렌더링 될 때를 의미

- UnMount

  컴포넌트가 화면에서 사라지는 순간

  렌더링에서 제외 되는 순간을 의미

### 라이프 사이클 제어

컴포넌트의 라이프 사이클의 단계별로 각각 다른 작업을 수행하도록 만드는 것

- useEffect를 이용하여 구현
