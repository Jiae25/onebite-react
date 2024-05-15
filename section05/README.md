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

## 컴포넌트 (Component)

html 태그들을 반환하는 함수

컴포넌트를 생성하는 함수의 이름은 반드시 첫 글자가 대문자가 되어야 한다.

- 함수 선언식 컴포넌트

  App Component

  ```
  function App() {

    return (
      <>
        <Header / >
        <h1>안녕 리액트!</h1>
      </>
    )
  }
  ```

- 화살표 함수식 컴포넌트

  Header Component

  ```
  const Header = () => {
    return (
      <header>
        <h1>header</h1>
      </header>
    );
  };
  ```

화면을 렌더링하기 위해서는 App 컴포넌트의 자식 컴포넌트로 존재해야 한다.

### 컴포넌트 관계

계층구조로 App(부모) → Header(자식)

- 자식 컴포넌트

  Hedader 컴포넌트와 같이 다른 컴포넌트의 리턴문 내부에 포함되는 컴포넌트 (Main, Footer)

- 부모 컴포넌트

  반대로 App 컴포넌트와 같이 자식을 포함시켜주는 컴포넌트

  특히 App 컴포넌트는 모든 컴포넌트들의 뿌리 역할로 루트 컴포넌트라 부른다.

→ `main.jsx` 파일에 `.render` 메서드의 인수로 전달된 컴포넌트이기 때문에 변경도 가능하다. 하지만 개발 관례상 `App`을 루트 컴포넌트로 설정한다.
