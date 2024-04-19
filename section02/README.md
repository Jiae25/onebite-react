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

첫 번째 피연산자의 값만으로도 연산의 결과를 확정할 수 있다면 그때는 두 번째 피연산자에는 접근조차 하지 않는 실행방식

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
console.log(one, two, three);
```

`let [one, two, three] = arr;` 를 보면 one, two, three 변수에 값을 저장한다.

arr 배열의 원소 일부분만 저장해도 된다.

또는 원소의 개수를 넘어가는 변수를 넣었을땐 오류가 발생하진 않고 초기화 되지 않은 변수처럼 undefined 값이 나온다.

```
let [one, two, three, four] = arr; // 출력 : 1 2 3 undefined
```

아래와 같이 기본값을 설정하는 것도 가능하다.

```
let [one, two, three, four = 4] = arr;
```

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
```

배열의 구조분해 할당과 동일하게 이루어진다.

```
let { name, age, hobby, extra = "hello" } = person;
```

### 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법

객체를 넘겼을 때만 이 방식으로 중괄호와 함께 구조분해 할당을 받을 수 있다.

## ch4. Spread 연산자 & Rest 매개변수

### 1. Spread 연산자

- Spread: 흩뿌리다. 펼치다.
- 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할

```
let arr1 = [1, 2, 3];
let arr2 = [4, arr1[0], arr1[1], 5, 6];
```

arr2에 arr1 원소의 값을 넣을 때 arr1의 인덱스를 활용해서 arr2에 값을 넣는 방법은 arr1 배열의 원소가 추가되거나 삭제될 수 있어서 위험한 방법이다.

→ Spread 연산자 ... 를 사용!

... 의 의미: arr1 배열의 모든 요소들을 개별로 풀어헤쳐라

```
let arr2 = [4, ...arr1, 5, 6];
```

배열 뿐 아니라 객체, 함수에서도 사용 가능하다.

### 2. Rest 매개변수

- Rest: 나머지, 나머지 매개변수
- 여러 개의 매개변수를 받아야할 때 배열 형태로 한번에 받아올수 있게 해주는 문법

```
function funcA(p1, p2, p3) { // 2. 전달받은 인수를 매개변수 p1, p2, p3로 저장
  console.log(p1, p2, p3);
}

funcA(...arr1); // 1. 배열 arr1의 모든 요소를 funcA의 인수로 전달
```

Rest 매개변수 사용했을 때 다음과 같다.

```
function funcB(...rest) {
  console.log(rest);
}

funcB(...arr1);
```

만약 첫 번째 매개변수 이름을 바꾸고 싶다면 아래와 같이 쓴다.

첫 번째로 전달되는 인수가 one에 저장되고 그 이후 전달되는 인수들은 남은 배열에 저장된다.

```
function funcB(one, ...rest) {
  console.log(rest);
}

funcB(...arr1);
```

#### 주의점!

REST 매개변수 뒤에는 추가적으로 매개변수를 더 선언할 수 없다. → 오류 발생

#### 참고

...뒤에 rest라고 붙은건 변수 이름이기 때문에 마음대로 설정 가능하다.

`...rest` → `...number`
