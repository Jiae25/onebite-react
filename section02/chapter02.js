function returnFalse() {
  console.log("False 함수");
  return undefined;
}

function returnTrue() {
  console.log("True 함수");
  return 10;
}

console.log(returnTrue() || returnFalse()); // && 앞에서 False 판별완료

// 단락 평가 활용 사례
function printName(person) {
  // if (!person) {
  //   console.log("person에 값이 없음");
  //   return;
  // }
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "이정환" });

// → T || T 이면 첫 번째 값이 반환
// → T && T 이변 두 번째 값이 반환
