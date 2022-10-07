function solution(A) {
  // sort
  // find the maximum value
  // R = maximum, Q = maximum - 1, R = maximum - 2
  let R = A.length - 1;
  let Q = A.length - 2;
  let P = A.length - 3;
  let sorted = A.sort((a, b) => a - b);

  // (음수 x 음수)도 고려
  // 둘 중에 더 큰 거 내보내기
  return Math.max(
    sorted[P] * sorted[Q] * sorted[R],
    sorted[0] * sorted[1] * sorted[R]
  );
}
