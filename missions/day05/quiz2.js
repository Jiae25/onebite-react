// Quiz 2. 평균 성적 출력하기
// 목표: 학생들의 평균 성적을 출력합니다.
// 다음 요구사항을 만족하는 함수 printAvgScore의 코드를 완성하세요
// 매개변수 students로 객체 형태의 학생 데이터를 제공받습니다.
// 반복문을 활용하여 모든 학생의 개별 성적 평균을 출력합니다.
// "{이름}: {평균}" 형태로 출력합니다.

function printAvgScore(students) {
  // for...in : 객체의 속성 반복
  for (let name in students) {
    let sum = 0;
    const { scores } = students[name]; // 학생의 정보에 접근하여 점수 배열을 가져옴
    // for...of : iterable한 객체 순회(배열, 문자열, 맵, 셋...)
    for (let score of scores) {
      sum += score;
    }
    const avg = sum / scores.length;
    console.log(`${name}: ${avg}`);
  }
}

printAvgScore({
  이정환: { hobby: "테니스", scores: [10, 20, 30, 40, 50] },
  김효빈: { hobby: "테니스", scores: [90, 80, 30, 70, 50] },
  홍길동: { hobby: "의적", scores: [100, 100, 20, 20, 50] },
});

// 출력 결과 :
// 이정환: 30
// 김효빈: 64
// 홍길동: 58
