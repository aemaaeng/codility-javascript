function solution(A) {
  // sort
  let sorted = A.sort((a, b) => a - b);
  
  // index: R = end, Q = end - 1, R = end - 2
  let R = A.length - 1;
  let Q = A.length - 2;
  let P = A.length - 3;

  // (음수 x 음수)도 고려
  // 둘 중에 더 큰 거 내보내기
  return Math.max(
    sorted[P] * sorted[Q] * sorted[R],
    sorted[0] * sorted[1] * sorted[R]
  );
}
