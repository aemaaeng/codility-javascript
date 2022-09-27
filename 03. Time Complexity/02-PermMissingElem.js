function solution(A) {
  // 1부터 A.length + 1까지의 합 구하기
  let sumAll = 0;
  for (let i = 1; i <= A.length + 1; i++) {
    sumAll += i;
  }
  // reduce로 A 요소들의 총 합 구하기
  let sumA = A.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  return sumAll - sumA;
}
