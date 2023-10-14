function solution(A) {
  const N = A.length;
  // find peak
  const peakPositions = [];
  for (let i = 1; i < N - 1; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) peakPositions.push(i);
  }

  let maxFlagCount = 0;
  const M = Math.floor(N ** 0.5) + 1;

  // i = 깃발 사이의 간격이자 꽂을 깃발의 개수 (문제에서의 K에 해당)
  for (let i = 1; i <= M; i++) {
    let cnt = 0;
    let lastPosition = -i; // 마지막에 깃발이 꽂힌 지점

    for (const peak of peakPositions) {
      if (peak >= lastPosition + i) {
        cnt += 1;
        lastPosition = peak;
      }

      if (cnt === i) break;
    }

    maxFlagCount = Math.max(maxFlagCount, cnt);
  }

  return maxFlagCount;
}
