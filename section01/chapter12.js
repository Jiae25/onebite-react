// 1. 함수 표현식

function funcA() {
  console.log("funcA");
}

let varA = funcA;
console.log(varA); // 함수 자체가 출력 → 하나의 값으로 취급
varA(); // 변수의 이름으로 함수 호출 가능

let varB = function () {
  // 익명함수
  console.log("funcB");
};

varB();
// funcB(); // 선언식이 아닌 값으로써 함수가 생성됐기 때문에 함수이름으로는 호출 불가능
// → 변수에 담으면서 함수를 생성할때 함수이름 생략가능

// 함수 표현식으로 만든 함수는 값으로 표현되기 때문에
// 선언문으로 만든 함수와 다르게 호이스팅의 대상이 되지 않는다.
// → 콜백함수에서 유용하게 사용

// 2. 화살표 함수
// 함수를 더 빠르고 간결하게 생성
let varC = () => {
  return 1;
};

console.log(varC());

let varC1 = () => 1; // 값을 반환하기만 한다면 더 간결하게 표현 가능
console.log(varC1());

let varC2 = (value) => value + 1; // 매개변수를 쓰는 경우
console.log(varC2(10));

let varC3 = (value) => {
  console.log(value);
  return value + 1;
};
console.log(varC3(10));
