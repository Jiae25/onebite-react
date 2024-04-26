// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  // console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

// 2. includes
// 배열에 특정 요소가 있는 지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3); // 찾으려는 값을 넣음

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 변환하는 메서드
let arr3 = [1, 1, 1];
let index = arr3.indexOf(10);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는
// 특정 요소의 인덱스(위치)를 변환하는 메서드
let arr4 = [1, 2, 3];
const finedeIndex = arr4.findIndex((item) => item === 999);

// console.log(finedeIndex);

// let objectArr = [{ name: "이정환" }, { name: "홍길동" }];
// console.log(objectArr.indexOf({ name: "이정환" }));

// console.log(objectArr.findIndex((item) => item.name === "이정환"));

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [{ name: "이정환" }, { name: "홍길동" }];

console.log(arr5.find((item) => item.name === "이정환"));
