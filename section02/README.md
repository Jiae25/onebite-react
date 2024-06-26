# JavaScript 심화

## ch1. Truthy와 Falsy

- JavaScript 에서는 참, 거짓이 아닌 값도 참, 거짓으로 평가한다.
- 참(123)이나 거짓(undefined)을 의미하지 않는 값도, 조건문 내에서 참이나 거짓으로 평가하는 특징
- 이를 이용하면 조건문을 간결하게 만들 수 있다.

1. Falsy한 값

   ```
   let f1 = undefined;
   let f2 = null;
   let f3 = 0;
   let f4 = -0;
   let f5 = NaN;
   let f6 = "";
   let f7 = 0n; // Big Integer
   ```

2. Truthy 한 값

   → 7가지 Falsy 한 값을 제외한 나머지 모든 값

## ch2. 단락평가

#### 단락평가 (Short-circuit Evaluation)

- 첫 번째 피연산자의 값만으로도 연산의 결과를 확정할 수 있다면 그때는 두 번째 피연산자에는 접근조차 하지 않는 실행방식

  ```
  True || True 이면 첫 번째 값이 반환
  True && True 이변 두 번째 값이 반환
  ```

## ch3. 구조 분해 할당

배열이나 객체에 저장된 여러 개의 값들을 분해해서 각각 다른 변수에 할당하는 문법

### 배열의 구조분해 할당

```
let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

let [one, two, three] = arr;

let [one, two, three, four] = arr; // 출력 : 1 2 3 undefined

let [one, two, three, four = 4] = arr;
```

- `let [one, two, three] = arr;` 를 보면 one, two, three 변수에 값을 저장한다.
- arr 배열의 원소 일부분만 저장해도 된다.
- 원소의 개수를 넘어가는 변수를 넣었을땐 오류가 발생하진 않고 초기화 되지 않은 변수처럼 undefined 값이 나온다.

- 기본값을 설정하는 것도 가능하다.

### 객체의 구조분해 할당

객체는 중괄호를 사용하여 각 객체의 프로퍼티 키 값을 기준으로 변수에 저장할 수 있다.

```
let person = {
  name: "홍길동",
  age: 30,
  hobby: "달리기",
};

// let name = person.name;
// let age = person.age;
// let hobby = person.hobby;

let { name, age, hobby } = person;

let { name, age, hobby, extra = "hello" } = person;
```

- 배열의 구조분해 할당과 동일하게 이루어진다.

### 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법

- 객체를 넘겼을 때만 이 방식으로 중괄호와 함께 구조분해 할당을 받을 수 있다.

## ch4. Spread 연산자 & Rest 매개변수

### 1. Spread 연산자

- Spread: 흩뿌리다. 펼치다.
- 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할

  ```
  let arr1 = [1, 2, 3];
  let arr2 = [4, arr1[0], arr1[1], 5, 6];
  ```

- arr2에 arr1 원소의 값을 넣을 때 arr1의 인덱스를 활용해서 arr2에 값을 넣는 방법은 arr1 배열의 원소가 추가되거나 삭제될 수 있어서 위험한 방법이다.

  → Spread 연산자 ... 를 사용!

- ... 의 의미: arr1 배열의 모든 요소들을 개별로 풀어헤쳐라

  ```
  let arr2 = [4, ...arr1, 5, 6];
  ```

- 배열 뿐 아니라 객체, 함수에서도 사용 가능하다.

### 2. Rest 매개변수

- Rest: 나머지, 나머지 매개변수
- 여러 개의 매개변수를 받아야할 때 배열 형태로 한번에 받아올수 있게 해주는 문법

  ```
  // function funcA(p1, p2, p3) { // 2. 전달받은 인수를 매개변수 p1, p2, p3로 저장
  //  console.log(p1, p2, p3);
  // }

  function funcA(...rest) { // rest 매개변수 사용
    console.log(rest);
  }

  funcA(...arr1); // 1. 배열 arr1의 모든 요소를 funcA의 인수로 전달
  ```

- 만약 첫 번째 매개변수 이름을 바꾸고 싶다면 아래와 같이 쓴다.

- 첫 번째로 전달되는 인수가 one에 저장되고 그 이후 전달되는 인수들은 남은 배열에 저장된다.

  ```
  function funcB(one, ...rest) {
    console.log(rest);
  }

  funcB(...arr1);
  ```

#### 주의점!

- REST 매개변수 뒤에는 추가적으로 매개변수를 더 선언할 수 없다. → 오류 발생

#### 참고

- ...뒤에 rest라고 붙은건 변수 이름이기 때문에 마음대로 설정 가능하다.

  `...rest` → `...number`

## ch5. 원시타입 vs 객체타입

<img width="80%" src="https://github.com/Jiae25/onebite-react/assets/77441385/ab4aab2c-a5e6-4016-80c2-362729d42469"/>

원시타입과 객체타입으로 나누는 이유?

원시타입과 객체타입은 값이 저장되거나 복사되는 과정이 서로 다르기 때문!

### 원시타입

- 값 자체로써 변수에 저장되고 복사된다.

  ```
  let p1 = 1; // 1로 초기화
  let p2 = p1; // p1의 값을 복사

  p2 = 2; // 1 → 2 변경
  ```

  | name | memory |
  | :--: | :----: |
  |  p1  |   1    |
  |      |   1    |
  |  p2  |   2    |

- 메모리 공간에는 2라는 새로운 값을 저장하고 p2변수가 해당 공간을 가르킨다.

  → 실제 메모리의 값은 수정되지 않는다. (p2가 가르키던 1이 남아있다.)

  → 원시타입은 변수의 값이 수정되더라도 메모리에 한번 저장해 두었던 원본 데이터가 수정되지는 않기 때문에 **불변값** 이라고 부르기도 한다.

  _원시타입 = 불변값_

### 객체타입

- 참조값을 통해 변수에 저장되고 복사된다.

  ```
  let o1 = { name: 홍길동 };
  ```

  | name |      memory       |
  | :--: | :---------------: |
  |  o1  | 0x000C (참조값) ↓ |
  |      | { name: 홍길동 }; |

- 객체 값은 메모리 어딘가에 저장해두고,
  o1 변수에는 객체값이 저장된 메모리 공간을 가리키는 주소값인 참조값을 저장한다.

- 왜 이렇게 저장할까?

  → 객체 값들은 원시 타입의 값들과 달리 여러 개의 값을 저장하거나 동적으로 늘고 줄기 때문에 그렇다.

- o2를 o1를 복사하도록 초기화시켜주면 이때에는 o1, o2 두 변수가 같은 참조 값을 가리킨다.

  ```
  let o1 = { name: 홍길동 };
  let o2 = o1;
  ```

  |  name  |      memory       |
  | :----: | :---------------: |
  | o1, o2 | 0x000C (참조값) ↓ |
  |        | { name: 홍길동 }; |

- o2 객체의 name 프로퍼티의 값을 바꾼다면 객체타입은 원본 데이터를 수정한다.

  ```
  o2.name = "고길동";
  ```

  |  name  |      memory       |
  | :----: | :---------------: |
  | o1, o2 | 0x000C (참조값) ↓ |
  |        | { name: 고길동 }; |

  → o2의 값 뿐만 아니라 o1의 값도 바뀌게 되는 것이다.

  _객체타입 = 가변값_

### 원시타입 vs 객체타입

|             원시타입             | vs  |              객체타입              |
| :------------------------------: | --- | :--------------------------------: |
|    Number, String, Boolean 등    |     |     Object, Array, Function 등     |
| 값 자체로써 변수에 저장되고 복사 |     | 참조값을 통해 변수에 저장되고 복사 |
|     불변값 (메모리 값 수정X)     |     |      가변값 (메모리 값 수정O)      |

### 객체 타입 주의점

#### 1. 의도치 않게 값이 수정될 수 있다.

의도하지 않았는데 하나의 변화가 또 다른 변수의 변화를 가져옴 → _Side Effect_

객체 값을 복사할 때는 변수의 참조값 자체를 복사하도록 하지 말고 새로운 객체를 생성하고 내부에 `{ ...o1 )`과 같이 스프레드 연산자 등을 이용해서 내부 프로퍼티만 따로 복사해오는 방식으로 객체를 복사해야한다.

```
let o2 = { ...o1 };
```

| name |       memory        |
| :--: | :-----------------: |
|  o1  |   0x000C (참조값)   |
|      | { name : "홍길동"}  |
|  o2  |   0x000D (참조값)   |
|      | { name : "고길동" } |

→ o1과 o2는 서로 다른 참조값을 갖는 객체이다.

|             얕은 복사             |     |                   깊은복사                    |
| :-------------------------------: | :-: | :-------------------------------------------: |
|           let o2 = o1;            |     |              let o2 = { ...o1 };              |
|       객체의 참조값을 복사        |     | 새로운 객체를 생성하면서 프로퍼티만 따로 복사 |
| 원복 객체가 수정될 수 있어 위험함 |     |      원본 객체가 수정될 일이 없어 안전함      |

#### 2. 객체간의 비교는 기본적으로 참조값을 기준으로 이루어진다.

```
let o1 = { name: "홍길동" };
let o2 = o1;
let o3 = { ...o1 };

console.log(o1 === o2); // true
console.log(o1 === o3); // false
```

|  name  |       memory        |
| :----: | :-----------------: |
| o1, o2 |   0x000C (참조값)   |
|        | { name : "홍길동"}  |
|   o3   |  0x9950D (참조값)   |
|        | { name : "홍길동" } |

→ 참조값이 아닌 프로퍼티를 기준으로 객체를 비교하고 싶다면 `JSON.stringify` 같은 객체를 문자열로 형변환하는 내장함수를 사용

```
console.log(
  JSON.stringify(o1) === JSON.stringify(o3)
); // 결과 : true
```

|       얕은 비교        |     |                  깊은 비교                  |
| :--------------------: | :-: | :-----------------------------------------: |
|       o1 === o2        |     |  JSON.stringify(o1) === JSON.stringify(o2)  |
| 참조값을 기준으로 비교 |     |        객체를 문자열로 변환하여 비교        |
|                        |     | JSON.stringify 등의 내장 함수를 이용해야 함 |

#### 3. 배열과 함수도 사실 객체이다

추가적인 프로퍼티나 메서드를 가질 수 있다.
객체 + 추가된 기능(호출, 선언) = 함수(Function)
객체 + 추가된 기능(순차 저장, 순회) = 배열(Array)

## ch6. 반복문으로 배열과 객체 순회하기

순회란?

배열, 객체에 저장된 여러 개의 값에 순서대로 하나씩 접근하는 것을 말함

### 1. 배열순회

- 배열 인덱스

  ```
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  ```

- for of 반복문
  ```
  for (let item of arr) {
    console.log(item);
  }
  ```

### 2. 객체순회

- Object.keys 사용

  객체에서 key값들만 뽑아서 새로운 배열로 반환

  `let keys = Object.keys(person);`

- Object.values

  객체에서 value 값들만 뽑아서 새로운 배열로 반환

  `let values = Object.values(person);`

- for in

  person 객체의 property의 key를 순서대로 key라는 변수에 할당

  ```
  let person = {
    name: "이정환",
    age: 27,
    hobby: "테니스",
  };
  ```

- 반복문을 이용한 배열, 객체 순회

  ```
  for(let value of numbers){
    console.log(value);
  }

  for(let key in Object.keys(person)){
    console.log(key);
  }
  ```

#### 차이점

for ~ of 는 배열에만 쓸 수 있고 for ~ in은 객체에만 쓸 수 있다.

## ch7. 배열 메서드 1. 요소 조작

### 1. push

배열의 맨 뒤에 새로운 요소를 추가하는 메서드

요소들을 추가한 뒤 배열의 길이를 반환한다.

```
const newLength = arr1.push(4, 5, 6, 7);
```

### 2. pop

배열의 맨 뒤에 있는 요소를 제거하고, 반환

```
const poppedItem = arr2.pop();
```

### 3. shift

배열의 맨 앞에 있는 요소를 제거, 반환

```
const shiftedItem = arr3.shift();
```

### 4. unshift

배열의 맨 앞에 새로운 요소를 추가하는 메서드

변경된 배열의 길이를 동시에 반환

```
const newLength2 = arr4.unshift(0);
```

### 참고

shift와 unshift는 push나 pop보다는 느리게 동작한다.

배열은 순차적으로 값을 저장하는 자료형이기 때문에 push나 pop은 맨 뒤에 있는 요소를 추가, 제거하면 되지만

shift와 unshift는 맨 앞에 있는 요소들을 추가, 제거하면서 뒤에있는 요소들의 인덱스가 모두 변경되기 떄문에 비교적 느리게 동작한다.

되도록이면 push나 pop을 이용하는 것이 좋다.

### 5. slice

배열의 특정 범위를 잘라내서 새로운 배열로 반환
slice 메서드를 호출 후 시작 인덱스와 끝을 지정하는 인덱스를 쓰면 되는데, 여기서 마지막 인덱스 + 1을 해야한다.

만약 배열의 끝까지 자른다면 두번째 인수는 생략 가능하다.

배열의 뒤에서부터 잘라내고 싶다면 음수 값을 넣으면 된다.

잘라내더라도 원본 배열이 바뀌는 것은 아니다.

```
let sliced = arr5.slice(2, 5);
let sliced2 = arr5.slice(2);
let sliced3 = arr5.slice(-3);
```

### 6. concat

두 개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환

```
let concatedArr = arr6.concat(arr7);
```

## ch8. 배열 메서드 2. 순회와 탐색

### 1. forEach

모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드

```
arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2);
});
```

- 인수로 콜백함수를 넣는다.

- `forEach` 메서드가 배열의 요소들을 반복문처럼 순회하면서
  매 반복마다 콜백 함수를 호출하고
  매개 변수로 현재 요소의 값(item)과 현재 반복 카운트(idx) 그리고 전체 배열의 값(arr)을 전달해준다.

#### _forEach 메서드 활용_

배열의 모든 요소를 순회하면서 콜백 함수로 해당 요소를 이용해서 다양한 동작을 수행시키도록 함.

### 2. includes

배열에 특정 요소가 있는 지 확인하는 메서드

```
let isInclude = arr2.includes(3);
```

- 인수로 찾으려는 값을 넣는다.
- true or false 값이 나온다.

### 3. indexOf

특정 요소의 인덱스(위치)를 찾아서 변환하는 메서드

```
let index = arr3.indexOf(1);
```

- 만약 배열에 찾으려는 값이 여러 개 존재한다면, `indexOf()`는 배열의 맨 앞부터 탐색을 시작하기 때문에 가장 첫 번째로 찾아낸 요소의 인덱스를 반환한다.

- 존재하지 않는 값의 인덱스를 찾으려고 할 때, 존재하지 않는다는 의미로 `-1`을 반환한다.

### 4. findIndex

모든 요소를 순회하면서, 콜백함수를 만족하는
특정 요소의 인덱스(위치)를 변환하는 메서드

→ 콜백함수를 만족하는 == 콜백함수가 참(true)을 반환

```
const finedeIndex = arr4.findIndex((item) => {
  if (item % 2 !== 0) return true;
});
```

화살표 함수를 더욱 간결하게 표현 (동일하게 동작함)

```
const finedeIndex = arr4.findIndex((item) => item % 2 !== 0);
```

- 가장 먼저 찾아낸 요소의 인덱스 반환
- 조건을 만족하는 요소가 배열에 존재하지 않는다면 `-1`을 반환

#### 왜 `indexOf`와 `findIndex`가 나뉘어져 있을까?

`indexOf` 메서드는 배열에 원시 타입의 값이 들어 있을 때가 아니라 객체 타입의 값들이 저장된 배열에서는 정확한 요소의 위치를 찾아낼 수 없기 때문이다.

```
let objectArr = [{ name: "이정환" }, { name: "홍길동" }];
console.log(objectArr.indexOf({ name: "이정환" }));
```

- 값이 들어있지만 `-1`이 출력되며 찾지 못한다.
- `indexOf`는 기본적으로 *얕은 비교*로 동작하기 때문이다.
- `===`와 같은 동등 비교 연산자로 동작하는데 객체 값들은 참조값을 기준으로 비교가 되기 떄문에 프로퍼티를 기준으로는 비교할 수 없다.

```
objectArr.findIndex((item) => item.name === "이정환");
```

- 이때, `findIndex`를 사용하면 콜백 함수를 이용해서 특정 프로퍼티의 값을 기준으로 비교시킬 수 있기 때문에 정확한 위치를 찾을 수 있다.

### 5. find

모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

```
console.log(arr5.find((item) => item.name === "이정환"));
```

## ch9. 배열 메서드 3. 변형

### 1. filter

기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

→ 웹 서비스 개발 시 특정 조건에 의해서 검색시키는 기능이나 카테고리별 필터 기능을 만드는데 필수적으로 사용.

```
// const tennisPeople = arr1.filter((item) => item.hobby === "테니스"));
```

### 2. map

배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과 값들을 모아서 새로운 배열로 반환

```
const mapResult1 = arr2.map((item, idx, arr1) => {
  return item * 2;
});
```

- 원본 배열의 값들을 변형한 새로운 배열을 생성할 수 있다.

실용적인 사례

map 메서드를 이용해서 arr1 배열에 있는 객체 값들에서 name 프로퍼티에 있는 이름 값들만 따로 뽑아서 새로운 배열로 추출하는 기능

```
let names = arr1.map((item) => item.name);
```

### 3. sort

배열을 사전 순으로 정렬하는 메서드

```
arr3.sort();
```

- 배열의 값이 문자가 아닌 숫자 값으로 이루어진 배열이라면 sort가 정상적으로 동작하지 않음.
- sort는 *사전순*으로 정렬하기 때문에 숫자의 대소관계를 기준으로 정렬하는 것이 아니다

- 숫자의 대소관계를 기준으로 정렬한다면,

```
// 오름차순 정렬
arr3.sort((a, b) => {
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
```

- sort함수에서 양수를 반환하면 둘 중에 더 작은 값이 앞에 오도록 설정된다.
- 음수를 반환하면 큰 값이 앞에 오도록 설정
- 0을 반환하면 자리 유지

- 내림차순으로 정렬하려면 조건을 반대로 설정.

### 4. toSorted (가장 최근에 추가된 최신 함수)

정렬된 새로운 배열을 반환하는 메서드

sort와의 차이점!

- sort는 원본 배열 자체를 정렬

```
const sorted = arr5.toSorted();
```

### 5. join

배열의 모든 요소를 하나의 문자열로 함쳐서 반환하는 메서드

```
const joined = arr6.join("-");
```

- join() 기본적으로 , (콤마) 가 구분자(separator)이다.
- 구분자를 바꾸고 싶다면 인수로 다른 구분자를 넣어준다.

## ch10. Date 객체와 날짜

### 1. Date 객체를 생성하는 방법

```
let date1 = new Date();
```

- 생성자: new 키워드와 함께 새로운 객체를 생성하는 것
- 아무 인수를 넣지 않으면 현재시간 출력

```
let date2 = new Date(1997, 1, 7, 10, 10, 10);
```

- 특정날짜, 시간을 기준으로 새롭게 생성할 때
- 1997 / 1 / 7 / 10 / 10 / 10
- , . - / 로도 사용가능

### 2. 타임 스탬프

특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값

UTC 협정세계시 : 세계의 모든 나라가 표준으로 사용하는 시간이 시작되는 지점

```
let ts1 = date1.getTime();
```

- ts1 변수에는 UTC 타임으로부터 몇 ms가 지났는지 시간이 저장되어있다.

```
let date4 = new Date(ts1);
```

- 새로운 date 객체 생성하는데 사용할 수 있다.
- `date1 === date4`

### 3. 시간 요소들을 추출하는 방법

```
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();
```

- JavaScript의 월은 0부터 시작하기 때문에 1월은 0으로 나오고 2월은 1로 나온다.
- month에는 +1을 해줘서 실제 사용하는 1 ~ 12의 월로 변경해서 사용한다.

### 4. 시간 수정하기

```
date1.setFullYear(2023);
date1.setMonth(2); // 2를 전달하면 실제로는 3월이다.
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);
```

### 5. 시간을 여러 포맷으로 출력하기

```
console.log(date1.toDateString());
```

- 시분초를 제외하고 날짜민 출력

```
console.log(date1.toLocaleString());
```

- 현지화된 포맷으로 시간 출력

## ch11. 동기와 비동기

### 동기란?

여러개의 작업을 순서대로 한번에 하나씩 처리하는 방식

- Thread - TaskA → TaskB → TaskC
- 쓰레드(Thread): 작업을 직접 실행하고 처리해주는 역할을 한다.

### JavaScript

JavaScript는 *동기*적으로 코드를 실행한다.

- 작성한 프로그램의 실행 흐름은 위에서 아래로 실행된다.

  - 장점: 실행 흐름을 파악하기 쉽고 용이함

- TaskB 작업이 오래 걸린다면 쓰레드(Tread)가 해당 작업을 다 처리하기 전까지는 다음 작업인 TaskC를 진행할 수 없다.

  - 단점: 전체 프로그램의 성능이 악화될 수 있다.

### 개선방법?

멀티쓰레드: 여러개의 쓰레드를 동시에 사용하는 기법을 활용

but, 자바스크립트 엔진에는 쓰레드가 1개 밖에 없다.

따라서! 자바스크립트에서는 이런 문제를 비동기 방식을 통해 해결한다.

### 비동기란?

동기적이지 않다는 뜻. 작업을 순서대로 처리하지 않는 방식

- 여러 개의 작업이 주어졌을 때, 앞선 작업이 종료되지 않아도 기다릴 필요 없이 다른 작업을 동시에 진행시키는 것이 가능하다.

작업의 결과 값을 이용하고 싶다면?

- 각각의 작업이 종료되었을 때 해당 작업의 결과 값을 이용해서 또 다른 동작을 수행시켜 줘야 된다면 자바스크립트에서는 각각의 작업에 콜백 함수를 붙여서 처리해주는 것도 가능하다.

비동기적으로 작동하는 특수한 함수 활용

```
setTimeout(() => {
  console.log(2);
}, 3000);
```

- setTimeout(): 코드를 특정 시작이 지난 이후에 비동기적으로 실행시켜주는 기능
- 두 번째 인수로 전달한 숫자 값에 해당하는 ms만큼 대기했다가 그 시간이 지나면 첫번째 인수로 전달한 callback 함수를 실행시킴

### JavaScript의 비동기 처리

쓰레드가 하나뿐인 자바스크립트가 동시에 여러 개의 작업을 처리할 수 있는 이유!

- 비동기 작업들은 자바스크립트 엔진이 아닌 Web APIs에서 실행된다.
  - Web APIs: 웹 브라우저가 직접 관리하는 별도의 영역

처리순서

1. JavaScript Engine이 비동기 함수를 만나면 Web APIs에 타이머와 콜백함수를 함께 넘겨준다.
2. 자바스크립트 엔진은 타이머를 기다리지 않고 다음 작업을 즉시 실행한다.
3. Web APIs는 `setTimeout()` 타이머가 끝나면 전달받은 콜백함수를 자바스크립트 엔진에게 돌려주고
4. 자바스크립트 엔진은 돌려받은 콜백함수를 실행시킨다.

   ![image](https://github.com/Jiae25/onebite-react/assets/77441385/5014af2a-c73e-406e-9f17-e90fed3e5c1d)

## ch12. 비동기 작업 처리하기 1. 콜백함수

sum 변수에 들어있는 값을 add함수 바깥에서도 이용하는 방법

```
function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}

add(1, 2, (value) => {
  console.log(value);
});
```

- add함수를 호출할 때 인수로 비동기 처리의 결과값을 사용하고자 하는 callback 함수를 함께 전달하면 된다.

- add함수에서는 세번째 인수로 전달한 callback 함수를 매개변수로 받아서 setTimeout 함수 안에서 호출하고 인수로 sum을 넣는다.

정리

- 비동기 작업을 하는 함수의 결과 값을 함수 외부에서 이용하고 싶다면 콜백 함수를 사용해서 비동기 함수 안에서 콜백 함수를 호출하도록 설정

비동기 작업의 결과를 또다른 비동기 작업의 인수로 활용

```
orderFood((food) => {
  console.log(food);
  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
```

- 코드가 반복되다보면 인덴트(indent, 들여쓰기)가 점점 깊어지는 형태로 코드가 진화한다.
- 기능이 늘어날수록 가독성이 떨어진다.
- 콜백지옥 → Promise 객체를 이용하여 해결

## ch13. 비동기 작업 처리하기 2. Promise

### Promise란?

비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체

- Promise는 비동기 작업을 감싸는 객체이다.
  - Promise 객체 > 비동기 작업 (ex. setTimeout)
- Promise의 효능
  - 비동기 작업 실행
  - 비동기 작업 상태 관리
  - 비동기 작업 결과 저장
  - 비동기 작업 병렬 실행
  - 비동기 작업 다시 실행
  - 기타 등등

### Promise의 3가지 상태

비동기 작업 진행단계에 따라 3가지 상태로 나누어 관리

- 대기 (Pending) :
  아직 작업이 완료되지 않은 상태

- 성공 (Fulfilled) :
  비동기 작업이 성공적으로 마무리 된 상태

- 실패 (Rejected) :
  비동기 작업이 실패한 상태

![image](https://github.com/Jiae25/onebite-react/assets/77441385/58dc5ed2-a1c5-451e-8d50-52f4fe6c5868)

- 대기 → 성공 : 해결(resolve)
- 대기 → 실패 : 거부(reject)

### promise 객체 생성

```
const promise = new Promise((resolve, reject) => {
  // 비동기 작업 실행하는 함수
  // executor

  setTimeout(() => {
    console.log("안녕");
    reject("왜 실패했는지 이유...");
  }, 2000);
});

setTimeout(() => {
  console.log(promise);
}, 3000);
```

executor 함수에는 두 가지의 매개변수가 전달된다.

1. resolve: promise 작업(비동기 작업)을 성공 상태로 바꾸는 함수가 들어있다.
2. reject: promise가 관리하는 비동기 작업을 실패 상태로 바꾸는 함수가 들어있다.

- `console.log(promise);`로 promise 객체를 출력해보면 PromiseState 값이 pending(대기)를 확인할 수 있다.

- executor 함수에서 reject를 호출하면 프로미스의 비동기 작업 실패. resolve를 호출하면 프로미스의 비동기 작업 성공.

- PromiseResult 값은 execute 함수 내부에서 resolve 함수를 호출하면서 인수로 전달해줘야 값이 나온다. 그렇지 않으면 undefined가 나온다.

### promise 객체 이용

```
const promise = new Promise((resolve, reject) => {
  // 비동기 작업 실행하는 함수
  // executor

  setTimeout(() => {
    const num = 10;
    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다");
    }
  }, 2000);
});

setTimeout(() => {
  console.log(promise);
}, 3000);
```

출력 값

```
chapter13.js:16
Promise {<fulfilled>: 20}
[[Prototype]] : Promise
[[PromiseState]] : "fulfilled"
[[PromiseResult]] : 20
```

### promise 객체의 결과 값 이용

then 메서드를 호출하고 인수로 callback 함수를 넣어준다.
`promise.then(() => {})`

promise의 비동기 작업이 성공(execute 함수에서 resolve를 호출)하면
then 메서드에 전달한 콜백함수를 실행시킨다.

동시에 resolve의 인수로 전달한 결과값을 매개변수로 제공해준다.
`resolve(num + 10)`

```
promise.then((value) => {
  console.log(value);
});
```

reject가 호출된다면 then 메서드는 실행되지 않는다. 이때는 catch 메서드를 사용한다.

```
promise.catch((error) => {
  console.log(error);
});
```

### promise 기능

`then` 메서드는 프로미스를 다시 반환한다.

```
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

```

- `catch` 메서드를 호출하는 프로미스나 `then` 메서드를 호출하고 있는 프로미스나 똑같은 프로미스 객체다.
- `then`과 `catch`를 연달아 사용하는 것을 Promise Chaining 프로미스 체이닝이라고 한다.

### 함수를 사용하여 프로미스 활용

객체 새롭게 생성하면서 동적으로 매개변수를 받아서 숫자값을 바꿔가면서 사용

비동기 작업의 결과를 또다른 비동기 작업의 인수로 전달

```
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다");
      }
    }, 2000);
  });

  return promise;
}

const p = add10(0);
p.then((result) => {
  console.log(result);

  const newP = add10(result);
  newP.then((result) => {
    console.log(result);
  });
});
```

콜백지옥 방지!

- then 메서드에서 newP를 반환(return)해주면 반환된 프로미스 객체가 then 메서드 호출의 결과 값이 된다.

```
const p = add10(0);
p.then((result) => {
  console.log(result);

  const newP = add10(result);
  return newP; // 새로운 프로미스 객체 반환 = then 메서드의 결과값
}).then((result) => {
  console.log(result);
});
```

정리

- add10 함수를 호출해서 result를 연달아 전달하는 것이 가능
- 비동기 작업이 실패할 경우 catch 메서드를 붙여서 error 출력하도록 함
- 프로미스 객체 활용 방법
  - API 호출
  - 다른 서버와 통신

```
add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

## ch14. 비동기 작업 처리하기 3. async/await

### async

어떤 함수를 비동기 함수로 만들어주는 키워드

함수가 프로미스를 반환하도록 변환해주는 그런 키워드

```
async function getData() {
  return {
    name: "이정환",
    id: "winterlood",
  };
}

console.log(getData());
```

- 함수 선언문 앞에 async를 붙이면 비동기 함수로 바뀐다.
- 객체를 그대로 반환하는 함수가 아니라
- 객체를 결과값으로 갖는 새로운 프로미스를 반환하는 함수로 변환

결과값

```
Promise {<fulfilled>: {…}}
[[Prototype]] : Promise
[[PromiseState]] : "fulfilled"
[[PromiseResult]] :  Object
```

만약, async가 붙어있는 함수가 일반적인 객체값을 반환하는게 아니라 애초에 프로미스를 반환하는 함수라면

별다른 기능을 하지 않고 그 프로미스 객체 자체를 반환하도록 내버려둔다.

```
async function getDate() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "이정환",
        id: "winterlood",
      });
    }, 1500);
  });
}
```

### await

async 함수 내부에서만 사용이 가능한 키워드

비동기 함수가 다 처리되기를 기다리는 역할

```
function printData() {
  getData().then((result) => {
    console.log(result);
  });
}

printData();
```

- `getData()`가 프로미스를 반환하니까 `then`메서드를 붙여서 result를 출력했다.

await 사용

```
async function printData() {
  const data = await getData();
  console.log(data);
}

printData();
```

- `then` 메서드를 쓰지 않아도 `getData()`가 반환하는 프로미스가 종료되기를 기다린다.
- 프로미스의 비동기 작업이 종료되면 결과 값을 넣어준다.
- await은 async와 같이 사용한다. 그렇지 않으면 오류 발생
