// 1. 콟백함수
function main(value) {
  // console.log(value); // sub함수 자체가 출력
  value(); // sub함수를 호출. callback 함수는 main이 원하는 타이밍에 실행시킬 수 있다.
}

function sub() {
  // console.log("i am sub");
}

// main(sub);
// 함수 표현식 + 화살표 함수 활용
main(() => {
  console.log("i am sub");
});

// 2. 콜백함수의 활용
// 구조가 흡사한 함수 → 콜백함수를 이용하여 코드개선
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
