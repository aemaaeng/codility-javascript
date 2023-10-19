// 참고: https://mirae-kim.tistory.com/135
function calc_gcd(a, b) {
  if (a % b === 0) return b;
  else return calc_gcd(b, a % b);
}

function checkPrime(M, gcd) {
  if (M === 1) return true;
  else if (gcd === 1) return false;
  else {
    gcd = calc_gcd(M, gcd);
    M = M / gcd;
    return checkPrime(M, gcd);
  }
}

function solution(A, B) {
  let cnt = 0;

  for (let i = 0; i < A.length; i++) {
    let N = Math.min(A[i], B[i]);
    let M = Math.max(A[i], B[i]);

    if (checkPrime(M, calc_gcd(M, N)) && checkPrime(N, calc_gcd(M, N)))
      cnt += 1;
  }

  return cnt;
}
