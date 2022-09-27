function solution(A) {
  // 오름차순 정렬은 함수를 전달해야 함.
  A.sort((a, b) => a - b);

  // 정렬된 리스트에서 첫 번째 요소가 1이 아니면 바로 0 리턴
  if (A[0] !== 1) {
    return 0;
  }

  for (let i = 0; i < A.length - 1; i++) {
    if (A[i + 1] - A[i] !== 1) {
      return 0;
    }
  }

  return 1;
}
