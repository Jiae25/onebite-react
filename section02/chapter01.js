// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // Big Integer

// 2. Truthy 한 값
// → 7가지 Falsy 한 값을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = []; // 배열
let t4 = {}; // 객체
let t5 = () => {}; // 함수

// 3. 활용 사례
function printName(person) {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.printName);
}

let person = null;
printName(person);
