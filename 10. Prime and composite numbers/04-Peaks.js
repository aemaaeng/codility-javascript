// reference: https://datacodingschool.tistory.com/97
function solution(A) {
  const N = A.length;

  const peakPositions = [];
  for (let i = 1; i < N - 1; i++) {
    if (A[i - 1] < A[i] && A[i] > A[i + 1]) peakPositions.push(i);
  }

  const L = peakPositions.length;
  for (let i = L; i > 0; i--) {
    if (N % i === 0) {
      const blockSize = N / i;
      const block = new Array(i).fill(false);
      let cnt = 0;
      for (let j = 0; j < L; j++) {
        let idx = Math.floor(peakPositions[j] / blockSize);
        if (block[idx] === false) {
          block[idx] = true;
          cnt += 1;
        }
      }

      if (cnt === i) return cnt;
    }
  }

  return 0;
}

console.log(solution([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2])); // expected: 3;
