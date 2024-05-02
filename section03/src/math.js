// math 모듈
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// CJS
// module.exports = {
//   add,
//   sub,
// }

// ES 모듈시스템 사용
// export { add, sub };

export default function multiply(a, b) {
  return a * b;
}
