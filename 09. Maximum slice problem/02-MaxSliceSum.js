function solution(A) {
  let [localSum, maxSum] = [A[0], A[0]];
  // console.log(`localSum: ${localSum}, maxSum: ${maxSum}`);
  for (let i = 1; i < A.length; i++) {
    localSum = Math.max(A[i], localSum + A[i]);
    maxSum = Math.max(maxSum, localSum);
    // console.log(`index: ${i}, localSum: ${localSum}, maxSum: ${maxSum}`);
  }
  return maxSum;
}

console.log(solution([3, 2, -6, 4, 0])); // expected: 5
