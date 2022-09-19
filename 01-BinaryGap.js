function solution(N) {
  // N을 이진수로 변환하기
  let num = N.toString(2);
  let countZero = 0;
  let longestZero = 0;
  // toString(2)를 이용하면 문자열로 변환된다.

  // 반복문을 돌며 변환된 수에서 가장 긴 0의 길이 찾기
  for (i of num) {
    if (i === "1") {
      // countZero가 더 크다면 longest를 그 값으로 업데이트
      if (countZero > longestZero) {
        longestZero = countZero;
      }
      // 초기화
      countZero = 0;
    } else if (i === "0") {
      countZero += 1;
    }

    // 시간 복잡도 줄이기
    // 총 길이 - 현재 인덱스 = 남은 길이
    // 남은 길이보다 longestZero가 크다면 굳이 더 확인할 필요 X
    if (num.length - num.indexOf(i) < longestZero) {
      // 반복문 중지
      break;
    }
  }

  return longestZero;
}
