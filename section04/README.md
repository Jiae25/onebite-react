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
