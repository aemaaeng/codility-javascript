function solution(N, A) {
  // counter 배열 초기화
  let counter = new Array(N).fill(0);
  // counter의 현재 최댓값
  let max = 0;
  //  A[i]가 N + 1일 때 counter의 최댓값
  let lastMax = 0;

  // A 순회
  for (let i = 0; i < A.length; i++) {
    if (A[i] >= 1 && A[i] <= N) {
      // lastMax가 바뀐 후에 등장하는 값은 lastMax로 바꿔준 후에 1씩 증가시킴
      if (counter[A[i] - 1] < lastMax) {
        counter[A[i] - 1] = lastMax;
      }
      counter[A[i] - 1] += 1;

      // 최댓값 update
      if (max < counter[A[i] - 1]) {
        max = counter[A[i] - 1];
      }
    } else {
      // A[i] = N+1일 때 그 시점의 최댓값을 lastMax에 저장
      lastMax = max;
    }
  }

  // lastMax보다 작은 값들을 변경
  for (let i = 0; i < N; i++) {
    if (counter[i] < lastMax) {
      counter[i] = lastMax;
    }
  }

  return counter;
}
