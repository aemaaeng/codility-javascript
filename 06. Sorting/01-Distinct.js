function solution(A) {
  if (A.length === 0) {
    return 0;
  }

  // 정렬 후 개수 세기
  let result = 1;
  let sorted = A.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] !== sorted[i + 1]) {
      result += 1;
    }
  }

  return result;
}
