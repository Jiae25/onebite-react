# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

# ch1. React.js 소개합니다

## React.js란?

Meta(Facebook)이 개발한 오픈소스 JavaScript 라이브러리

대규모 웹 서비스의 UI를 더 편하게 개발하기 위해 만들어진 기술

넷플릭스, 페이스북, 인스타그램, 노션 등

## React의 기술적인 특징

### 1. 컴포넌트를 기반으로 UI를 표현한다

컴포넌트 (Component) : 구성요소

화면을 구성하는 요소, UI를 구성하는 요소를 말함

![image](https://github.com/Jiae25/onebite-react/assets/77441385/d579a828-0f99-480f-b89a-ebc597890c25)

- Header, Main, Footer 각각의 자바스크립트 파일에 컴포넌트 단위로 나눠서 모듈화하여 보관 가능

- 장점: 중복코드 제거하여 유지보수에 용이하다.

### 2. 화면 업데이트 구현이 쉽다

업데이트 : 사용자의 행동(클릭, 드래그)에 따라 웹 페이지가 스스로 모습을 바꿔 상호작용 하는 것

- 선언형 프로그래밍 : 과정은 생략하고 목적만 간결히 명시하는 방법

  - 코드가 간결함

- 명령형 프로그래밍 : 목적을 이루기 위한 모든 일련의 과정을 설명하는 방식
  - 코드가 길고 복잡함

React 는 _선언형 프로그래밍_ 방식이기 때문에 구현이 쉽다.

어떻게?

![image](https://github.com/Jiae25/onebite-react/assets/77441385/b1df6c37-f2c6-4f26-aa93-241e01d78cc6)

- 컴포넌트가 가지고 있는 State 변수의 값에 따라 다른 UI를 화면에 렌더링하도록 설정
  - 렌더링 (Rendering) : UI요소를 화면에 그려내는 것을 말함

업데이트를 위한 복잡한 동작을 직접 정의할 필요 없이 특정 변수의 값을 바꾸는 것 만으로도 화면을 업데이트 시킬 수 있다.

### 3. 화면 업데이트가 빠르게 처리된다

브라우저의 렌더링 과정 (Critical Rendering Path)

![image](https://github.com/Jiae25/onebite-react/assets/77441385/b523944d-5a5f-4371-8699-aebe514bfd0c)

- DOM (Document Object Model) : 문서 객체 모델. HTML 코드를 브라우저가 이해하기 쉬운 방식으로 변환한 형태의 객체

  - 요소들의 위치, 배치, 모양에 관한 모든 정보

  ![image](https://github.com/Jiae25/onebite-react/assets/77441385/b4b3206b-c64b-4d01-8fa4-b9b26d215f21)

- CSSOM (CSS Object Model) : CSS 코드를 브라우저가 이해하기 쉬운 형태로 변환한 것

  - 요소들의 스타일과 관련된 모든 정보

- Render Tree : 웹페이지의 청사진
- Layout : 요소의 배치를 잡는 작업
  - Reflow : Layout 을 다시 한다
- Painting : 실제로 화면에 그려내는 과정

  - Repaint : Painting을 다시 한다

업데이트 : JavaScript가 DOM을 수정하게 되면 발생하게 된다.

Reflow와 Repaint는 오래 걸리는 과정이다. 따라서 DOM 수정 횟수를 최소화해야한다.

but, 복잡한 대규모 서비스에서는 쉽지 않다.

React는 동시에 발생한 업데이트를 모아서 DOM 수정 횟수를 최소화하는 작업을 자동으로 처리해준다.

- Virtual DOM
  - DOM을 자바스크립트 객체로 흉내낸 것으로 일종의 복제판이라고 생각하면 된다.
  - React는 업데이트가 발생하면 실제 DOM을 수정하기 전에 이 가상의 복제판 DOM에 먼저 반영해 본다.
  - 업데이트가 다 모인 Virtual DOM을 한번에 반영하여 DOM은 1회 수정이 된다.
  - 좋은 업데이트 성능을 어느정도 보장해준다.

# ch2. 첫 React App 생성하기

## React Application

React로 만든 웹 서비스들을 보통 React App, React Application 이라고 불리움

단순한 웹 페이지 기능을 넘어서 다양한 기능을 제공하기 때문에

## React App 생성하기

1. Node.js 패키지 생성
2. React 라이브러리 설치
3. 기타 도구 설치 및 설정 (복잡하고 까다롭기 때문에 입문자에게는 권장하기 어려움)

따라서, Vite 를 이용한다.

- Vite
  - 차세대 프론트엔드 개발 툴
  - 기본 설정이 적용된 React App 생성 가능
  - 리액트 공식 문서에서도 권장된다.

### Vite을 이용한 React App 생성

1. 프로젝트를 만들 폴더에서 터미널을 켜고 `npm create vite@latest` 실행
2. `Need to install following packages.. `는 create vite를 진행하기 위해서 추가적으로 설치해야하는 것.

   `y`를 눌러서 설치 진행

3. Project name : section04
4. 프레임워크 선택 : React
5. React 앱의 버전 선택 : JavaScript
6. VSCode에서 새로 생긴 section04 폴더를 열어서 진행

### React App의 구성

- package.json

  - 기본적으로 Node.js 패키지이기 때문에 package.json 파일이 있다.
  - dependencies : react와 react-dom 라이브러리가 미리 설치되어 있다.
  - devDependencies : 개발할 떄만 사용되는 라이브러리들이 저장되는 곳 (문법 체크 도구, 테스트 도구 등) 배포할 땐 포함되지 않는다.
  - node_modules나 package-lock.json 파일이 없으면 아직 설치되지 않은 것으로 `npm i` 또는 `npm install` 하여 package.json 정보를 기반으로 라이브러리를 설치한다.
    ```
    /Documents/onebite-react/section04 (main)
    $ npm i
    added 278 packages, and audited 279 packages in 2m
    ```
  - 이렇게 많은 라이브러리들이 추가로 필요한데 직접 설치할 수 없으니 Vite을 이용해서 리액트 앱을 생성한다.

- public

  - svg, PNG, JPG 와 같은 이미지 파일을 보관하거나 코드가 아닌 폰트, 동영상과 같은 정적인 파일을 저장한다.

- src

  - source의 약자. 실제 리액트, 자바스크립트 코드를 저장하는 폴더

- asset : 이미지 파일, 폰드 등의 정적 파일 보관

- eslint.cjs : eslint 도구의 설정파일 (코드 스타일 설정)

- .gitignore : github에 올리면 안되는 파일 명시

- index.html : 리액트 앱의 기본 틀 역할

- vite.config.js : vite 도구의 옵션 설정

### React App 실행

- package.json의 script 안에 실행시킬 수 있는 4가지의 명령어가 미리 설정되어 있다.

  - dev : 리액트 앱을 개발용으로 실행
    `npm run dev` 하면 vite가 리액트 앱을 작동시켜주고 주소가 주어진다.

    ```
    VITE v5.2.11  ready in 1011 ms

    ➜  Local:   http://localhost:5173/
    ➜  Network: use --host to expose
    ➜  press h + enter to show help
    ```

    ```
    h

    Shortcuts
    press r + enter to restart the server
    press u + enter to show server url
    press o + enter to open in browser
    press c + enter to clear console
    press q + enter to quit
    ```

# ch3. React App 구동원리 살펴보기

### React App 구동 순서

1. React App 생성 (with Vite)
2. React App 가동 (npm run dev)
3. 콘솔에 나온 React App 접속 주소

   `http://localhost:5173/`

React App 에 Web Server 가 내장되어 있고
React App 을 가동하기 위해 사용했던 `npm run dev`는 React App 서버를 가동시키는 명령어이다.

### React App 접속 원리

- localhost : 내 컴퓨터의 주소
- 브라우저에서 내 컴퓨터에서 실행되고 있는 리액트 웹서버에 접속 요청을 보낸다.
  ![image](https://github.com/Jiae25/onebite-react/assets/77441385/c677dec2-f6d0-422c-926f-53f9df6a21ba)

- 포트번호(Port Number) : 하나의 컴퓨터에서 여러 대의 서버를 동작시키기 위해 필요한 주소 체계
  ![image](https://github.com/Jiae25/onebite-react/assets/77441385/e935e11f-a0b2-4ebf-ac74-0a9aab8e7d1a)

### 화면 렌더링 원리

- `index.html` 파일을 브라우저에 보내준다.
  - `<body>` 태그 안에 비어있다.
  - `<script>` 태그로 불러오고 있는 `src/main.jsx` 자바스크립트 파일이 실행되었을 때 화면에 보여지는 것이다.
- `main.jsx` 파일

  - 리액트가 제공하는 내부 메서드를 이용하고 있다.

    `ReactDOM.createRoot().render~`

  - createRoot 메서드는 인수로 전달받은 HTML 요소를 리액트의 루트로 만들어주는 역할을 한다.
  - 인수로 전달된 요소는 `document.getElementById`는 루트라고 `index.html` 파일 안에 있는 루트를 아이디로 갖는 요소를 불러온다.

    `<div id="root"></div>`

  - render 메서드 호출

    `<App/>` 을 렌더링하는 설정

  - 앱 컨포넌트를 렌더링하고 있다.

    `import App from './App.jsx'`

- `App.jsx` 파일 열기
  - 함수가 HTML 태그를 리턴하면 이 함수를 컴포넌트라고 한다.
  - function App(){}
