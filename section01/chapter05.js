// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); // 모듈러 연산

let inf = Infinity; // 양의 무한대
let mInf = -Infinity; // 음의 무한대

let nan = NaN; // Not a Number

console.log(1 * "hello"); // 연산 실패 시 결과값 Nan

// 2. String Type
let myName = "이정환"; // 큰 or 작은 따옴표를 쓰지 않으면 변수명으로 받아들임
let myLocation = "목동";
let introduce = myName + myLocation; // 문자열의 덧셈 연산

let introduceText = `${myName}은 ${myLocation}에 거주합니다`; // 백틱으로 만든 문자열. 변수의 값을 동적으로 넣을 수 있음.
// 템플릿 리터럴 문법

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;

// 5. Undefined Type
let none;
console.log(none);

// undefined 는 변수를 선언하고 값을 할당하지 않았을떄 자동으로 들어가는 값
// null은 명시적으로 변수에 할당해줘야 하는 값
