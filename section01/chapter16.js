// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

// animal = { a: 1 }; // 오류발생
animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

console.log(animal);
// 상수 객체에 프로퍼티 추가, 수정, 삭제 가능

// 2. 메서드
// → 값이 함수인 프로퍼티를 말함
// → 객체의 동작을 정의하는 데에 사용함

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
