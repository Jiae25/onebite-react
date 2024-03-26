// 1. 묵시적 형 변환
// → 자바스크립트 엔진이 알아서 형 변환 하는 것
let num = 10;
let str = "20";

const result = num + str;
console.log(result); // 1020

// 2. 명시적 형 변환
// → 프로그래머가 내장함수(JS가 기본으로 제공하는 함수) 등을 이용해서 직접 형 변환을 명시
// → 문자열 → 숫자
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1); // 20

let str2 = "10개";
let strToNum2 = parseInt(str2); // str2의 숫자가 앞쪽에 나와있어야 함
console.log(strToNum2); // 10

// → 숫자 → 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다"); // 20입니다
