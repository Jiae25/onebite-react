## ch1. Node.js 소개

### Node.js를 배우는 이유?

React.js는 Node.js 기반으로 동작하는 기술이다.

- Node.js 기반: React.js, Next.js, Vue.js, Svelte 등

### Node.js 란?

> Node.js = JavaScript 실행환경(Run Time) = 구동기

Node.js는 웹 브라우저가 아닌 환경에서도 자바스크립트 코드를 실행시켜주는 자바스크립트의 런타임, 즉 *실행환경*이다.

https://nodejs.org 소개 :
Node.js는 *Chrome V8 JavaScript 엔진*으로 빌드된 JavaScript 런타임입니다.

### Node.js가 필요한 이유

JavaScript 히스토리

- 웹 페이지 내부에 필요한 아주 단순한 기능만을 개발하기 위해 만들어진 간단한 스크립트 언어이다.

- 오직 웹 브라우저 내에서만 동작할 수 있도록 개발

- C언어, 자바 언어와 다르게 문법이 유연하고 작성이 편리하여 빠르게 개발할 수 있어 생산성이 높았다.

- 웹 브라우저 바깥에서도 범용적으로 사용할 수 있도록 도와주는 JavaScript의 실행 환경이 Node.js이다.

JavaScript 활용

- 웹 서버 (넷플릭스, 에어비엔비 등)
- 모바일 앱 (페이스북, 인스타그램 등)
- 데스크톱 앱 (슬랙, 디스코드 등)

## ch2. Node.js 설치

1.  https://nodejs.org/en
2.  Download Node.js (LTS):
    Long Term Support. 장기적으로 안정적이게 지원되는 버전.
3.  Install 진행
4.  설치가 완료되면 터미널에서 설치된 노드 버전 확인
    `C:\Users\me>node -v`

    기존에 설치되어있던 v16.13.0 삭제 후 재설치 진행

5.  NPM(Node Package Manage) 설치 확인

    `C:\Users\me>node -v`

    NPM : 새로운 패키지 생성, 외부 라이브러리 설치/삭제 등의 유용한 기능 제공

    ```
    C:\Users\me>node -v
    v20.12.2

    C:\Users\me>npm -v
    10.5.0
    ```
