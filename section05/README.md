# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# ch1. 실습 준비하기

1. 새로운 리액트 앱 생성

   `npm create vite@latest`

2. 생성한 폴더로 열기

   `파일 → 폴더열기 → 생성한 폴더 선택`

3. package.json에 있는 dependency 설치

   `npm install` or `npm i`

4. 리액트 앱 가동

   `npm run dev`

5. 리액트 앱 접속

   `http://localhost:5173`

# ch2. React 컴포넌트(Component)

### 컴포넌트 (Component)

html 태그들을 반환하는 함수

App Component

```
function App() {

  return (
    <>
      <h1>안녕 리액트!</h1>
    </>
  )
}
```
