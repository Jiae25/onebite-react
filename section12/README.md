# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# ch1. 감정일기장 소개 및 준비

## 감정 일기장 소개

- 감정 일기장

  - 일기를 작성하는 서비스

  - 감정까지 함께 기록할 수 있음

- 새로운 일기를 작성하는 페이지

  - /new라는 경로를 가짐

  - 감정 일기장은 여러개의 페이지로 이루어짐

## 감정 일기장 프로젝트의 목표

- 외부 폰트(Font) 사용법

- 이미지 사용법 (+최적화)

- 다양한 페이지를 제공하는 방법

- 공통 컴포넌트로 UI 요소 모듈화

- 복잡한 데이터를 다루는 방법

- 클라우드 서비스를 이용해 리액트 앱을 실제로 배포하는 방법

- ... 기타 등등

# ch2. 페이지 라우팅 - 1. 소개

## 페이지라우팅(Page Routing)

경로에 따라 알맞은 페이지를 렌더링하는 과정

ex) /new → new 페이지 렌더링

## 페이지 라우팅의 원리

### Multi Page Application (MPA)

애초에 서버가 여러개의 페이지를 가지고 있음

많은 서비스가 사용하는 전통적인 방식

페이지 이동 시 모든 요소 교체

⇒ 서버 사이드 렌더링 (Server Side Rendering)

![image](https://github.com/user-attachments/assets/b148a5b0-14ba-4cde-90a8-ed302609c715)

- React.js는 이 방식을 따르지 않음 → 쾌적한 페이지 이동 제공이 어렵기 때문

### MPA 방식의 단점

1. 페이지 이동이 매끄럽지 않고 비효율적임
2. 다수의 사용자 접속시, 서버의 부하가 심해짐

## React의 SPA(Single Page Application)

1. 페이지 이동이 매끄럽고 효율적임
2. 다수의 사용자가 접속해도 크게 상관 없음
3. 페이지 이동 시 필요한 요소만 교체

⇒ 클라이언트 사이드 렌더링 (Client Side Rendering)

![image](https://github.com/user-attachments/assets/2be1a58f-33a4-4c84-a169-d39cb445dd36)

# ch3. 페이지 라우팅 - 2. 라우팅 설정하기

### 이번 시간에 이용할 라이브러리

### React Router

[npmjs.com](http://npmjs.com) 에 등록되어 있는 라이브러리

대다수의 리액트 앱이 사용하고 있는 대표격 라이브러리

~~모르면 간첩~~

### BrowserRouter

BrowserRouter로 App 컴포넌트를 감싸주면 리액트 앱의 모든 컴포넌트들이 페이지 라우팅과 관련된 모든 데이터들을 공급받아서 사용할 수 있게 된다.

```
<BrowserRouter>
    <App />
</BrowserRouter>
```

### 주의점

- Routes 안에는 Route 컴포넌트만 쓸 수 있다.

- Routes 컴포넌트 바깥에 배치된 요소들은 페이지 라우팅과는 관련 없이, 모든 페이지에 동일하게 렌더링이 된다.

  ```
  function App() {
    return (
      <>
        <div>Hello</div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </>
    )
  }
  ```

# ch4. 페이지 라우팅 - 3. 페이지 이동

## Link 를 이용한 페이지 이동

- Link 컴포넌트 추가

  ```
  import { Routes, Route, Link } from "react-router-dom";

  function App() {
    return (
      <>
        <div>
          <Link to={"/"} >Home</Link>
          <Link to={"/new"} >New</Link>
          <Link to={"/diary"} >Diary</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </>
    )
  }
  ```

- 클라이언트 사이드 렌더링 방식으로 페이지 이동

- 페이지를 날려버리고 새롭게 렌더링 하는 것이 아니라 필요한 컴포넌트만 교체한다.

- 페이지를 이동하는데 페이지가 새로고침되지 않고 빠른 속도로 쾌적하게 페이지 이동이 제공된다.

## 특정 이벤트가 발생했을 때 페이지 이동

- useNavigate 컴포넌트 추가

  ```
  import { Routes, Route, Link, useNavigate } from "react-router-dom";

  function App() {
    const nav = useNavigate();

    const onClickButton = () => {
      nav("/new");
    }
    return (
      <>
        <div>
          <Link to={"/"} >Home</Link>
          <Link to={"/new"} >New</Link>
          <Link to={"/diary"} >Diary</Link>
        </div>
        <button onClick={onClickButton}>New 페이지로 이동</button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </>
    )
  }
  ```

# ch5. 페이지 라우팅 - 4. 동적 경로

## 동적 경로(Dynamic Segments)란?

동적인 데이터를 포함하고 있는 경로

### URL Parameter

/ 뒤에 아이템의 id를 명시

- ~/product/**1**
- ~/product/**2**
- ~/product/**3**

=> 아이템의 id 등의 변경되지 않는 값을 주소로 명시하기 위해 사용됨

### Query String

? 뒤에 변수명과 값 명시

- ~/search?**q=검색어**

=> 검색어 등의 자주 변경되는 값을 주소로 명시하기 위해 사용됨

```
<Route path="/diary/:id" element={<Diary />} />
```

- path props에 `/:값` 이 있다면 이 값은 동적 경로인 URL 파라미터를 의미한다.

### URL Parameter 사용하기 위한 useParams 호출

useParams 라는 훅은 현재 브라우저에 명시한 이 URL 파라미터의 값을 가져오는 기능을 하는 커스텀 훅이다.

```
import { useParams } from 'react-router-dom';

const Diary = () => {
  const params = useParams();
  console.log(params);

  return <div>{params.id}번 일기입니다.</div>;
};

export default Diary;

```

### Query String 사용하기 위한 useSearchParams 호출

parmas 변수에 useState를 썼던 것처럼 QueryString으로 전달한 변수와 값들이 들어온다.

setParams에는 특정 QueryString의 값을 변경할 수 있는 함수가 들어오게 된다.

```
import { useSearchParams } from 'react-router-dom';

const Home = () => {
  const [params, setParams] = useSearchParams();
  console.log(params.get("value"))

  return <div>Home</div>;
};

export default Home;
```

# ch6. 폰트, 이미지, 레이아웃 설정하기

감정 일기장 프로젝트에서 사용하는 폰트, 이미지

폰트 사용 : Nanum Pen Script

- Public, assets 두 폴더 모두 폰트나 이미지 파일 등 정적인 파일을 보관한다.

- 폰트는 public에 이미지는 assets에 넣은 이유는?

  - vite가 내부적으로 진행하는 이미지 최적화 설정 때문이다.

  - 그래서 이미지를 최적화할 게 아니라면 Public 에 넣어줘도 상관이 없다. Public에 넣으면 import를 통해 불러오진 않지만 대신에 URL을 통해 불러오도록 설정할 수 있다.

  ```
  <div>
    <img src={emotion1} /> {/* assert에 있는 이미지 불러오는 방법 */}
  </div>

  <div>
    <img src={'/emotion1.png'} /> {/* Public에 있는 이미지 불러오는 방법 -> 이미지 최적화X*/}
  </div>
  ```

  - URL 포맷으로 이미지 주소를 설정한 경우
    - 이미지들은 자동으로 브라우저의 메모리에 캐싱, 즉 저장되어서 새로고침하더라도 다시는 불러오지 않도록 최적화된다.
  - Public 폴더 아래에서 불러온 것은 일반적인 주소로 불러오도록 설정한 경우

    - 새로고침할 때마다 매번 새롭게 불러온다

  - 불러와야 되는 이미지가 만약 막 개, 십만 개 이렇게 어마무시하게 많을 때 브라우저의 메모리에 캐싱해두면 그 브라우저의 메모리에도 용량이 과부하가 될 수 있기 떄문에 이미지가 굉장히 많이 필요한 상황에는 Public 폴더에 보관하는게 좋을 수 있다.
