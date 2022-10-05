function solution(A) {
  let min = 10000;
  let two = [];
  let three = [];
  let result = 0;

  // 수학적 지식이 필요한 문제
  // 평균의 성질 이용, 인자의 수가 2-3개인 것만 고려
  // 2개짜리 slice 탐색
  for (let i = 0; i < A.length - 1; i++) {
    two[i] = (A[i] + A[i + 1]) / 2;
    if (two[i] < min) {
      min = two[i];
      result = i;
    }
  }

  // 3개짜리 slice 탐색
  for (let i = 0; i < A.length - 2; i++) {
    three[i] = (A[i] + A[i + 1] + A[i + 2]) / 3;
    if (three[i] < min) {
      min = three[i];
      result = i;
    }
  }

  return result;
}
