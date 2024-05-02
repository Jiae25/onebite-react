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

## ch3. Node.js 사용하기

### 프로젝트(Project)

특정 목적을 갖는 프로그램의 단위

- 쇼핑몰 프로그램
- 웹 포털 프로그램
- ...

### 패키지

Node.js에서 사용하는 프로그램의 단위

Node.js 환경에서는 여러 개의 JavaScript 파일로 어떤 목적을 갖는 프로그램을 만들 때 패키지 단위로 프로그램을 만든다.

- 쇼핑몰 패키지
- 웹 포털 패키지
- ...

### Node.js 패키지 만들기

1. 패키지의 루트 폴더 만들기. `section03`
2. VSCode에서 `onebite-react` 전체 폴더가 아닌 `section03` 폴더를 따로 연다.
3. `Ctrl + J`를 눌러서 VSCode 하단의 터미널을 연다.
4. 새로운 패키지 초기화 (생성) `npm init`

   package name, version, description, entry point(메인으로 실행될 JS파일) 등을 물어본다. 엔터를 눌러서 진행

5. 패키지 생성 완료. package.json 설정 파일이 생성됨

### 자바스크립트 파일 Node.js로 실행

1. `index.js` 자바스크립트 파일 생성
2. Node.js를 이용해서 실행하려면 터미널에서 `node index.js`를 실행.

   `node + 실행시킬 파일 이름`

3. 만약 현재 위치 `section03`가 아닌 `src` 폴더 아래에 js 파일이 있다면 경로를 명시해야한다.
   `node src/index.js`

4. 새로운 파일, 폴더가 만들어질때 경로는 계속해서 복잡해질 수 있기 때문에 `package.json`에서 `package script`를 이용한다.

   스크립트에 명시해주면 경로를 다 명시해주지 않아도 `start` 명령으로 수행이 가능하다.

   ```
   "start" : "node src/index.js"
   ```

5. 스크립트 실행 `npm run start`

   ```
   $ npm run start

   > section03@1.0.0 start
   > node src/index.js

   안녕 Node.js
   ```

## ch4. Node.js 모듈 시스템 이해하기

### 모듈 시스템(Module System)이란?

모듈을 다루는 시스템

- 쇼핑몰 페이지
  - 회원 관리 기능 - `user.js` - user 모듈
  - 장바구니 기능 - `cart.js` - cart 모듈
  - 결제 기능 - `payment.js` - payment 모듈

이렇게 기능별로 나누어진 각각의 자바스크립트 파일을 **모듈**이라 부른다.

모듈을 생성하고, 불러오고, 사용하는 등의 모듈을 다루는 다양한 기능을 제공하는 시스템을 **모듈 시스템**이라고 한다.

### JavaScript의 모듈 시스템

- Common JS (CJS)
- ES Module (ESM)
- AMD, UMD 등

모듈 시스템을 이용해 math 모듈에 작성한 함수를 내보내서 다른 모듈(인덱스)에서 불러와서 사용할 수 있도록 해보자.
`math.js`

```
// math 모듈 (계산 기능)
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}
```

### CJS (Common JS 모듈 시스템)

1. module 내장객체에 exports라는 프로퍼티의 값으로 객체를 저장

   객체 안에 프로퍼티로 내보내고 싶은 값들을 넣어줌

   ```
   // CJS
   module.exports = {
   add : add,
   sub : sub,
   };
   ```

   - add 프로퍼티 value로 내보낼 값 add 함수
   - sub 프로퍼티 value로 내보낼 값 sub 함수

   ```
   module.exports = {
      add,
      sub,
   }
   ```

   - value 값으로 사용되는 변수의 이름과 키 값이 같을 때에는 변수나 함수의 이름만 명시해줘도 알아서 저장된다.

2. CommonJS 모듈 시스템에 의해 Math 모듈로 부터 내보내진다.

3. 내보내진 값은 다른 모듈에서 내장함수인 `require`를 이용해서 모듈의 경로를 인수로 전달하여 사용한다.

   `index.js`

   ```
   const moduleData = require("./math");
   console.log(moduleData);

   moduleData.add(1, 2); // moduleData에 객체로 저장되어있기 때문에 함수 호출 가능
   moduleData.sub(1, 2);

   ```

   - `require` 함수가 현재 경로의 `math` 모듈로부터 객체 형태로 값을 반환한다.

   - 객체의 구조분해 할당으로 표현

   ```
   const {add, sub} = require("./maht");
   console.log(add(1, 2));
   console.log(sub(1, 2));
   ```

### ES 모듈 시스템

CJS 보다 최신식으로 동작한다.

React에서도 사용한다.

1. ES 모듈 시스템을 사용하겠다는 설정

   - `package.json`에 `"type" : "module"` 이라는 옵션 추가
   - 패키지 설정 후 CJS를 활용하는 코드를 `npm run start` 로 가동시키면 오류 발생 (함께 이용할 수 없음)

2. `export` 키워드 사용하여 내보냄

   `math.js`

   ```
   export {add, sub};
   ```

3. 내보내진 값을 다른 모듈에서 사용

   `index.js`

   ```
   import {add, sub} from "./math.js";
   ```

   - ES 모듈시스템을 사용할때는 확장자까지 명시해줘야한다.

다른 방법

1. 함수 선언문 앞에 `export`를 적어준다.

   `math.js`

   ```
   export function add(a, b) {
   return a + b;
   }

   export function sub(a, b) {
   return a - b;
   }
   ```

2. 하나의 모듈을 대표하는 default 값을 내보내는 방법

   `math.js`

   ```
   export default function multiply(a, b) {
   return a * b;
   }
   ```

   - 기본값으로 내보내진 함수
     `index.js`

   ```
   import multi from "./math.js";
   import {add, sub} from "./math.js";
   ```

   - 새로운 import 문을 만들어서 중괄호 없이 불러오도록 설정해야한다.
   - 불러올때 이름을 마음대로 정할 수 있다.

   ```
   import mul, {add, sub} from "./math.js";
   ```

   - 동일한 경로로부터 값을 불러오는 import문을 합쳐서 사용할 수 있다.
