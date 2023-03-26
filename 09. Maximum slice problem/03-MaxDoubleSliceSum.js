function solution(A) {
  let leftSum = new Array(A.length).fill(0);
  let rightSum = new Array(A.length).fill(0);

  for (
    let indexLeft = 1, indexRight = A.length - 2;
    indexRight >= 2;
    indexLeft++, indexRight--
  ) {
    leftSum[indexLeft] = Math.max(0, leftSum[indexLeft - 1] + A[indexLeft]);
    rightSum[indexRight] = Math.max(
      0,
      rightSum[indexRight + 1] + A[indexRight]
    );
  }
  let maxSum = leftSum[0] + rightSum[2];

  for (let i = 2; i < A.length - 1; i++) {
    maxSum = Math.max(maxSum, leftSum[i - 1] + rightSum[i + 1]);
  }

  return maxSum;
}

console.log(solution([3, 2, 6, -1, 4, 5, -1, 2])); // expected: 17
