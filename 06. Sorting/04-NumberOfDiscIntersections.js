function solution(A) {
  let cnt = 0;
  let j = 0;

  // 오른쪽 끝 점 (idx + center)
  let right = [];
  // 왼쪽 끝 점 (idx - center)
  let left = [];

  for (let i = 0; i < A.length; i++) {
    right[i] = i + A[i];
    left[i] = i - A[i];
  }
  right.sort((a, b) => a - b);
  left.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) {
    while (j < A.length && right[i] >= left[j]) {
      cnt += j - i;
      j++;
    }
  }

  if (cnt > 10000000) return -1;

  return cnt;
}

// test
console.log(solution([1, 5, 2, 1, 4, 0])); // expected : 11
