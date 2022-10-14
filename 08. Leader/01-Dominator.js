function solution(A) {
  // dominator 찾기
  let original = A.slice(); // 원본 배열 복사해두기
  let n = A.length;
  let leader = -1;
  A.sort((a, b) => a - b);
  let mid = Math.floor(n / 2);
  let candidate = A[mid];
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    if (A[i] === candidate) {
      cnt += 1;
    }
  }
  if (cnt > mid) {
    leader = candidate;
  }

  // leader 값에 따라 분기
  if (leader === -1) {
    return leader;
  } else {
    return original.indexOf(leader);
  }
}

console.log(solution([3, 4, 3, 2, 3, -1, 3, 3])); // expected: 0, 2, 4, 6 or 7
