// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
// → 웹 서비스 개발 시 특정 조건에 의해서 검색시키는 기능이나 카테고리별 필터 기능을 만드는데 필수적으로 사용.
let arr1 = [
  { name: "이정환", hobby: "테니스" },
  { name: "김효빈", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => {
  if (item.hobby === "테니스") return true;
});

// 동일코드
// const tennisPeople = arr1.filter((item) => item.hobby === "테니스"));

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];

const mapResult1 = arr2.map((item, idx, arr1) => {
  return item * 2;
});

// 실용적인 사례
let names = arr1.map((item) => item.name);

// 3. sort
// 배열을 사전 순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();

// 숫자의 대소관계를 기준으로 정렬한다면,
let arr3_1 = [10, 3, 5];

// 오름차순 정렬
arr3_1.sort((a, b) => {
  if (a > b) {
    // b가 a앞에 와라
    return 1; // b, a 배치
  } else if (a < b) {
    // a가 b의 앞에 와라
    return -1; // a, b 배치
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0; // a, b 자리를 그대로 유지
  }
});

// 4. toSorted (가장 최근에 추가된 최신 함수)
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

// 5. join
// 배열의 모든 요소를 하나의 문자열로 함쳐서 반환하는 메서드
let arr6 = ["hi", "im", "winterlood"];
const joined = arr6.join("-");
