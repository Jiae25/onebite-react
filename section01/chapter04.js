// 1. 변수
let age;

age = 30;

// 2. 상수
const birth = "1997.01.07";

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
let $2name;

// 3-3. 예약어를 사용할 수 없다. (JS에서 이미 특수한 의미로 사용하기로 약속한 단어들)
// let let

// 4. 변수 명명 가이드
let a = 1;
let b = 1;
let c = a - b;
// 정보가 없는 변수명은 협업과정에는 문제가 될 수 있다.

let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
// 의미있는 변수명으로 명명
