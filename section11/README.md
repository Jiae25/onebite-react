# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Context
# ch1. Context란
## React Context
컴포넌트간의 데이터를 전달하는 또 다른 방법

기존의 Props가 가지고 있던 단점을 해결할 수 있음

### Props의 단점이란?
- Props Drilling
    - Props는 부모 -> 자식으로만 데이터를 전달할 수 있음
    - 컴포넌트의 계층 구조가 두 단계 이상으로 깊어지게 되면 데이터를 전달할 때 다이렉트로 전달할 수 없다.
 
### Context
- Props Drilling을 해결
  - Context가 데이터 보관서(객체) 역할로 필요한 데이터를 전달할 수 있다.
- 여러 개 만드는 것도 가능하다.