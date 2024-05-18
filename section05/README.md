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

# ch3. JSX 로 UI 표현하기

React Component

```
function Footer(){
  return (
    <footer>
      <h1>footer</h1>
    </footer>
  );
}
```

JavaScript에서는함수가 HTML을 return하는 것을 문법적인 오류로 판단.

But, React.js에서는 JSX 문법을 사용하므로 적법하다고 판단한다.

## JSX (JavaScript Extensions)

확장된 자바스크립트 문법

컵포넌트 내부에 변수를 선언하고 변수를 중괄호에 넣어서 HTML로 렌더링하도록 설정할 수 있다.

```
const Main = () => {
  const number = 10;
  const obj = { a: 1 };

  return (
    <main>
      <h1>main</h1>
      <h2>{number}</h2>
      {obj.a}
    </main>
  );
};

export default Main;
```

### JSX 주의사항

1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
2. 숫자, 문자열, 배열 값만 렌더링 된다.

   객체 값은 그대로 렌더링 X. 점 표기법을 이용해서 문자열이나 숫자값을 렌더링 하도록 해야한다.

3. 모든 태그는 닫혀있어야 한다
4. 최상위 태그는 반드시 하나여야만 한다.

### JSX 문법을 활용한 각각 다른 UI 렌더링

- 삼항 연산자 사용
  ```
  return (
    <>
      {user.isLogin ? (<div>로그아웃</div>) : (<div>로그인</div>)}
    </>
  )
  ```
- 조건문 사용
  ```
  if (user.isLogin) {
    return <div>로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }
  ```

### 스타일 적용

- DOM 요소에 직접 스타일 적용

  ```
  return <div style={{
    backgroundColor: "red",
    borderBottom:"5px solid blue",
  }}
  >
    로그아웃</div>;
  ```

  - 스타일 규칙이 많아질수록 가독성이 떨어진다.

- CSS 파일을 만들어서 스타일링 적용

  1. Main.css 파일 생성

  2. Main.jsx 에서 import

     `import "./Main.css`

  3. 요소의 클래스를 css에 작성한 것으로 설정한다.

     `return <div className="logout">로그아웃</div>;`

# ch4. Props로 데이터 전달하기

## Props란?

부모 컴퍼넌트가 자식 컴퍼넌트들에게 원하는 값을 전달해 줄 수 있다. 이때 컴퍼넌트에 전달된 값을 Props라 부른다.

![image](https://github.com/Jiae25/onebite-react/assets/77441385/3a3aef86-754e-434d-9400-c4661676d5f0)

부모 컴포넌트

```
function App() {

  return (
    <>
      <Button text={"메일"} />
      <Button text={"카페"}/>
      <Button text={"블로그"}/>
    </>
  );
}
```

자식 컴포넌트

```
const Button = (props) => {
  console.log(props);
  return <button style={{color: props.color}}>{props.text}</button>;
};
```

props 값

```
{text: '메일'}
{text: '카페'}
{text: '블로그'}
```

props가 무조건 들어올거라고 예상하고 코드를 작성하면 오류가 발생할 수 있다.

→ props의 default 값을 설정한다.

```
Button.defaultProps = {
  color: "black",
}
```

### Props를 사용하는 방법

- 점표기법

  ```
  const Button = (props) => {
    console.log(props);
    return <button style={{ color: props.color }}>{props.text} - {props.color.toUpperCase()}</button>;
  };
  ```

- props는 매개변수에 객체 형태의 값이 무조건 들어온다

  그러므로 객체의 구조분해할당을 이용

  ```
  const Button = ({text, color}) => {
    return <button style={{ color: color }}>{text} - {color.toUpperCase()}</button>;
  };
  ```

- props로 여러 값을 전달해야 된다면, 스프레드연산자를 사용

  buttonProps라는 객체에 있는 프로퍼티의 값을 개별로 Button 컴퍼넌트의 props로 전달해준다.

  ```
  function App() {
    const buttonProps = {
      text: "메일",
      color: "red",
      a: 1,
      b: 2,
      c: 3,
    };
    return (
      <>
        <Button {...buttonProps} />
  ```

- 자식요소는 자동으로 children 이라는 props로 전달된다.

  ```
  <Button text={"블로그"}>
    <div> 자식요소</div>
  </Button>
  ```

  ```
  const Button = ({text, color, children}) => {
    return <button style={{ color: color }}>
    {text} - {color.toUpperCase()}
    {children}</button>;
  };
  ```

**Props는 부모 컴퍼넌트에서 자식 컴퍼넌트로만 전달할 수 있다.**

반대로 자식 → 부모 컴퍼넌트로 값을 전달하는 것은 React에서는 불가능하다.
