function solution(X, A) {
  let leaves = new Set();

  // A를 기준으로 반복문을 돌며 계속 Set에 요소 추가
  // set의 사이즈가 X와 같아지면
  for (let i = 0; i < A.length; i++) {
    leaves.add(A[i]);
    if (leaves.size === X) {
      return i;
    }
  }
  return -1;
}

// test cases
console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4])); // expected: 6
console.log(solution(1, [1])); // expected: 0
console.log(solution(6, [3, 4, 2, 1, 1, 5, 3])); // expected: -1
