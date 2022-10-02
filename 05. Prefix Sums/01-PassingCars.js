function solution(A) {
  // slice from first zero
  let arr = A.slice(A.indexOf(0));

  // prefix sums
  let n = arr.length;
  let P = new Array(n + 1).fill(0);
  for (let i = 1; i < n + 1; i++) {
    P[i] = P[i - 1] + arr[i - 1];
  }

  let m = 1; // 0의 개수
  let cnt = 0; // (0, 1)의 개수

  for (let k = 2; k < n + 1; k++) {
    if (P[k] === P[k - 1] + 1) {
      cnt += 1 * m;
    } else if (P[k] === P[k - 1]) {
      m += 1;
    }
  }

  if (cnt > 1000000000) {
    return -1;
  }

  return cnt;
}
