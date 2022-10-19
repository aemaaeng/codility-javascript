function solution(A) {
  // max slice를 구하기
  // 양수이면 그대로 리턴하고 (profit)
  // 그 slice가 음수라면 이익이 없으므로 0 리턴하기
  let max_ending = 0;
  let max_slice = 0;

  for (i = 0; i < A.length - 1; i++) {
    max_ending = Math.max(0, max_ending + A[i + 1] - A[i]);
    max_slice = Math.max(max_slice, max_ending);
  }

  if (max_slice > 0) {
    return max_slice;
  } else {
    return 0;
  }
}

// test case
console.log(solution([23171, 21011, 21123, 21366, 21013, 21367])); // expected: 356
