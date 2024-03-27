// 반복문
for (let idx = 1; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue; // 반복문 내에 다른 코드들은 실행하지 않고 바로 다음 반복회차로 넘어감.
  }
  console.log(idx);

  if (idx >= 5) {
    break; // 반복문 강제 종료
  }
}
