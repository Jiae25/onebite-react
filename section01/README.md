# JavaScript 기본

## ch1. 자바스크립트

#### Web 개발 언어

- HTML
  요소들의 내용, 배치, 모양을 정하기 위해 사용하는 언어
- CSS
  요소들의 색상, 크기 등의 스타일 설정
- JavaScript
  웹 내부에서 발생하는 다양한 기능을 만들 수 있는 언어

#### JavaScript 실행

- JavaScript 엔진에 의해 실행된다.
- 엔진은 게임 구동기, JavaScript는 게임이라고 생각
- JavaScript 엔진은 브라우저에 기본 탑재되어 있다.

## ch2. VSCode 설치

#### Visual Studio Code

- Microsoft에서 개발한 오픈소스 소스코드 에디터

#### 설치방법

1. 구글에 visual studio code 검색
2. code.visualstudio.com 에 들어감
3. Download 옆 화살표를 누른 후 Stable(안정적)인 버전 다운
4. zip 파일을 해제한 후 다운로드
5. VSCode 실행

#### 유용한 확장 플러그인

- Korean : 한국어팩 적용
- Prettier : Code formatter
- Material Icon Theme : 파일 확장자 아이콘
- Error Lens : 오류 메시지 표시
- Live Server - JS실습에 꼭 필요한 플러그인

#### plugin 설치방법

EXTENSIONS 상단 검색바에 원하는 플러그인 검색 후 설치

## ch3. 환경설정

자바스크립트 코드를 브라우저로 실행하는 방법
자바스크립트 파일을 불러와서 웹브라우저한테 실행시키도록 전달을 해줄 HTML 이 필요하다.

```
<!-- index.html -->
<html>
  <head>
    <!-- 자바스크립트 파일을 불러오는 속성 -->
    <script src="./chapter03.js"></script>
  </head>
  <body>
    Hello World
  </body>
</html>
```

1. `index.html`을 열어둔 상태에서 `ctrl + shift + p`를 누르면 상단에 검색 가능
2. live server 검색
3. Live Server : Open with Live Server 클릭 시 웹 브라우저에서 HTML 화면이 뜬다.
4. 개발자 도구(F12)에서 console 탭 확인
5. `index.html`에서 `<script>` 태그로 불러오도록 한 `chapter03.js`의 코드가 실행된 것을 확인할 수 있다.

라이브 서버가 코드에 변경사항이 생기면 자동으로 페이지를 새로고침한다.

1. `index.html` 파일이 다시 렌더링 되고
2. `chapter03.js` 파일도 다시 실행되기 때문에
3. 브라우저 console에서 새로운 실행 결과가 나타난다.

## ch4. 변수와 상수

### 1. 변수

값을 바꿔가면서 저장할 수 있는 저장소

`let 변수명 = 값; // 변수 선언 및 초기화`

### 2. 상수

값을 저장한다는 점에서 변수와 동일, 그러나 상수는 초기화 이후 값을 바꿀 수 없음

`const 상수명 = 값; // 상수 선언 및 초기화`

변수는 선언 후 나중에 초기화를 해도 되지만, **상수**는 값을 바꿀 수 없기 때문에 **선언과 동시에 초기화**를 해야 한다.

### 3. 변수 명명규칙(네이밍 규칙)

1. $, \_를 제외한 기호는 사용할 수 없다.
2. 숫자로 시작할 수 없다.
3. 예약어를 사용할 수 없다.

### 4. 변수 명명 가이드

정보가 없는 변수명은 협업 과정에서 문제가 될 수 있다.
따라서 의미있는 변수명으로 명명해야 한다.

참고 <a href="https://brunch.co.kr/@hopeless/8" target="_blank">_IT영단어 정리_</a>

## ch5. 자료형(타입)

<img width="80%" src="https://github.com/Jiae25/onebite-react/assets/77441385/ab4aab2c-a5e6-4016-80c2-362729d42469"/>

#### 원시타입

- 기본형 타입
- 프로그래밍에 있어 가장 기본적인 값들의 타입

#### Null과 Undefined의 차이점

**null**은 명시적으로 변수에 할당해줘야 하는 값
**Undefined**는 변수를 선언하고 값을 할당하지 않았을 때 자동으로 들어가는 값

## ch6. 형변환(Type Casting)

어떤 값의 타입을 다른 타입으로 변경하는 것

예시)
Number Type → String Type
10 → "10"

### 1. 묵시적 형 변환

개발자가 직접 설정하지 않아도 알아서 자바스크립트 엔진이 형 변환 하는 것

### 2. 명시적 형 변환

개발자가 직접 함수 등을 이용해 형 변환을 일으킴

## ch7. 연산자1

### 연산자(Operator)란?

프로그래밍에서의 다양한 연산을 위한 기호, 키워드를 말함

### 1. 대입 연산자

- `=`

### 2. 산술 연산자

- `+ - * / %`

### 3. 복합 대입 연산자(산술 + 대입)

- `+= -= *= /= %=`

### 4. 증감 연산자

- `++ --`

### 5. 논리 연산자

- `|| && !`

### 6. 비교 연산자

- `=== !== > < >= <=`

## ch8. 연산자2

### 특수한 연산자

### 1. null 병합 연산자

- ??
- 존재하는 값을 추려내는 기능
- null, undefined가 아닌 값을 찾아내는 연산자

### 2. typeof 연산자

- typeof
- 값의 타입을 문자열로 반환하는 기능을 하는 연산자

### 3. 삼항 연산자

- 조건 ? 참 : 거짓
- 항을 3개 사용하는 연산자
- 조건식을 이용해서 참, 거짓일 때의 값과 다르게 반환

## ch9. 조건문

특정 조건을 만족했을 때만 실행되는 코드를 작성하기 위한 문법

대표적으로 if, switch 조건문 존재

switch는 다수의 조건을 처리할 때 if보다 더 직관적이다.

## ch10. 반복문(Loop, Iteration)

어떠한 동작을 반복해서 수행할 수 있도록 만들어주는 문법

```
for (초기식; 조건식; 증감식){
  console.log("반복!");
}
```

- 초기식: 변수, 반복문이 총 몇 번 실행됐는지 count (= 카운터 변수)
- 조건식: 반복문이 언제까지 반복할 것인지 설정 (참: 반복 / 거짓: 종료)
- 증감식: 한 번의 반복이 종료될 때마다 카운터 변수인 idx의 값을 증가시킴

## ch11. 함수

중복으로 작성된 유사한 기능을 하는 코드

- 동일한 기능을 일일이 타이핑 해야 함
- 향후 코드 수정 시 문제될 수 있음
  → 함수로 해결 가능

함수: 함수가 호출되었을 때 어떤 코드들을 실행할 것인지 미리 준비해두는 작업과도 같다.

```
// 함수선언
function getArea(width, height) { // 매개변수
  let area = width * height;

  console.log(area);
}

getArea(10, 20); // 인수
```

- 인수: 함수를 호출하면서 함수에게 전달한 값
- 매개변수: 전달된 인수들을 순서대로 저장하는 특수한 함수의 변수 (매개체 역할을 하는 변수)

### 호이스팅

자바스크립트에서 코드 밑에 작성된 선언문들을 코드를 실행하기 전에 최상단으로 끌어올려서 실행시켜주는 것.

선언문을 호출문보다 아래에 두어도 내부적으로 호이스팅되어 실행되기 때문에 문제없이 동작한다.

## ch12. 함수 표현식과 화살표 함수

### 1. 함수 표현식

기본 함수 선언과 호출 과정

```
function funcA() {
  console.log("funcA");
}

let varA = funcA;
console.log(varA); // 함수 자체가 출력 → 하나의 값으로 취급
varA(); // 변수의 이름으로 함수 호출 가능
```

함수 호출식을 사용

```
let varB = function funcB () { // funcB 생략 가능 = 익명함수
  console.log("funcB");
};

varB();
```

`funcB();` : 선언식이 아닌 값으로써 함수가 생성됐기 때문에 함수이름으로는 호출 불가능

변수에 담으면서 함수를 생성할 때 함수이름 생략가능
*함수 표현식으로 만든 함수*는 값으로 표현되기 때문에 선언식으로 만든 함수와 다르게 **호이스팅**의 대상이 되지 않는다.
→ 콜백함수에서 유용하게 사용

### 2. 화살표 함수

함수를 더 빠르고 간결하게 생성

```
let varC = () => {
  return 1;
};
```

값을 반환하기만 한다면 더 간결하게 표현 가능

```
let varC1 = () => 1;
```

매개변수를 쓰는 경우

```
let varC3 = (value) => {
  console.log(value);
  return value + 1;
};
```

## ch13. 콜백함수(Callback Function)

자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미함
callback 함수는 main이 원하는 타이밍에 실행시킬 수 있다.

```
function main(value){ // 2. value로 받은 매개변수에는 sub 함수가 들어감
  value(); // 3. main 함수에서 sub 함수를 호출
}

function sub(){
  console.log("sub");
}

main(sub); // 1. 인수로 sub 함수를 전달해줌.
```

sub() 처럼 main() 에 인수로써 전달된 함수를 콜백 함수라 부른다.

### 콜백함수의 활용

구조가 흡사한 함수 → 콜백함수를 이용하여 코드개선

```
function repeat(count, callback) {
 for (let idx = 1; idx <= count; idx++) {
   callback(idx);
 }
}

repeat(5, function (idx) {
 console.log(idx);
});

repeat(5, (idx) => {
 console.log(idx * 2); // repeatDouble
});

repeat(5, (idx) => {
 console.log(idx * 3); // repeatTriple
});
```

콜백함수를 이용하면 중복 코드를 제거하면서 간결하게 코드를 작성할 수 있다.

## ch14. 스코프(Scope)

우리말로 "범위"를 뜻함

변수나 함수에 접근하거나 호출할 수 있는 범위를 말 함

전역(전체 영역) 스코프 / 지역(특정 영역) 스코프

- 전역 스코프 : 전체 영역에서 접근 가능
- 지역 스코프 : 특정 영역에서만 접근 가능

## ch15. 객체1

- 원시타입이 아닌 객체 타입의 자료형
- 여러가지 값을 동시에 저장할 수 있는 자료형을 의미
- Array, Functionn, RegexExp
- 객체를 이용하면 현실세계에 존재하는 어떤 사물이나 개념을 표현하기 용이함

### 1. 객체생성

```
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)
```

### 2. 객체속성

`key : value`의 형태로 설정

```
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
  job: "FE Developer",
  extra: {},
  10: 20,
  "like cat": true,
};
```

### 3. 객체 프로퍼티를 다루는 방법

#### 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)

```
let name = person.name; // 존재하지 않는 프로퍼티에 접근하려고 하면 Undefined 값이 나온다

let age = person["age"]; // key를 쌍따옴표와 함께 문자열로 작성, 쌍타옴표가 없으면 변수로 인식함
```

#### 새로운 프로퍼티 추가

```
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";
```

#### 프로퍼티 수정

```
person.job = "educator";
person["favoriteFood"] = "초콜릿";
```

#### 프로퍼티 삭제

```
delete person.job;
delete person["favoriteFood"];
```

#### 프로퍼티 존재 유무 확인 (in 연산자)

```
let result1 = "name" in person; // true
let result2 = "cat" in person; // false
```

## ch16. 객체2

### 1. 상수객체

상수 객체 선언 후 새롭게 초기화 할 수는 없지만, 선언된 프로퍼티의 추가, 수정, 삭제는 할 수 있다.

### 3. 메서드

값이 함수인 프로퍼티를 말함

객체의 동작을 정의하는 데에 사용함

```
const person = {
  name: "이정환",
  // 메서드 선언
  sayHi() {
    // sayHi: funcion () {} 또는 sayHi: () => {} 형태로도 가능
    console.log("안녕!");
  },
};

person.sayHi();
person["sayHi"]();
```

## ch17. 배열(Array)

여러 개의 값을 **순차적**으로 담을 수 있는 자료형

객체와의 차이점은 배열은 순차적으로 담는다는 것!

### 1. 배열 생성

```
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용)

let arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []]; // 타입, 길이 제한 X
```

### 2. 배열 요소 접근

```
let item1 = arrC[0];
arrC[0] = "hello"; // 인덱스를 활용해 배열 요소 수정
```
