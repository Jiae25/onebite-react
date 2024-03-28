// 함수선언

let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);

// 호이스팅
// → 끌러올리다 라는 뜻
function getArea(width, height) {
  // 중첩 함수
  function another() {
    console.log("another");
  }

  another();
  let area = width * height;

  return area; // 반환값
  console.log("hello"); // return 후 함수가 종료되기 때문에 실행되지 않음
}
