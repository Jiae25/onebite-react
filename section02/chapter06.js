// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
}

// length : 현재의 길이를 저장하는 프로퍼티가 저장되어 있음

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
  // console.log(arr2[i]);
}

// 1.2 for of 반복문
for (let item of arr) {
  // console.log(item);
}

// 1.1은 인덱스를 활용할 수 있다는 차이점이 있다.

// 2. 객체 순회
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

// 2.1 Object.keys 사용
// → 객체에서 key값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
// console.log(keys);

for (let i = 0; i < keys.length; i++) {
  // console.log(keys[i]);
}

for (let key of keys) {
  const value = person[key];
  // console.log(key, value);
}
// key 값과 함께 객체의 value 값도 동시에 순회하려면 괄호 표기법 사용

// 2.2 Object.values
// → 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
// console.log(values);

for (let value of values) {
  // console.log(value);
}

// 2.3 for in
// → person 객체의 property의 key를 순서대로 key라는 변수에 할당
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
