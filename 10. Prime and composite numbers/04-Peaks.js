// reference: https://datacodingschool.tistory.com/97
function solution(A) {
  const N = A.length;

  const peakPositions = [];
  for (let i = 1; i < N - 1; i++) {
    if (A[i - 1] < A[i] && A[i] > A[i + 1]) peakPositions.push(i);
  }

  const L = peakPositions.length;
  // 블록의 최대 개수를 찾아야 하기 때문에 효율적인 탐색을 위해 peakPositions의 길이부터 1까지 거꾸로 탐색한다.
  for (let i = L; i > 0; i--) {
    // 각 블록의 요소 개수가 같아야 하기 때문에 약수일 때에만 실행
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

// 저번 flags 문제와 약간 비슷하게 느껴진 문제였다.
// 각 block에 포함되는 peak가 있는지 확인하기 위해 불리언을 담은 배열을 쓰는 점을 생각하지 못했다.
// 또 for 반복문을 거꾸로 쓸 수 있다는 것도 자꾸 까먹는다. 이 풀이를 잘 숙지해둬야겠다.
