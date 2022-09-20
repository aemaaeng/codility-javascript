function solution(A, K) {
  // k번만큼 수행
  for (let i = 0; i < K; i++) {
    // pop한 요소를 맨 첫 요소로 unshift
    if (A.length !== 0) {
      A.unshift(A.pop());
    }
  }
  return A;
}
