function check(A, largestSum) {
  let sum = 0;
  let cnt = 0; // block의 수
  for (let i = 0; i < A.length; i++) {
    let el = A[i];
    if (sum + el > largestSum) {
      sum = 0;
      cnt += 1;
    }
    sum += el;
  }
  return cnt;
}

function solution(K, M, A) {
  // find maximum number in A
  let start = Math.max(...A);
  // find sum of A
  let end = A.reduce((acc, cur) => acc + cur, 0);
  // binary search
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (check(A, mid) < K) end = mid - 1;
    else start = mid + 1;
  }
  return start;
}

console.log(solution(3, 5, [2, 1, 5, 1, 2, 2, 2]));
