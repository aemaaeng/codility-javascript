// N으로 가려고 한다.
// -1에서 출발
// 개구리는 F(K)만큼 점프할 수 있다. F(K) = K번째 피보나치 수
// N이 있는 방향으로만 점프할 수 있다.

// N개의 수가 담긴 배열 A가 주어짐
// 0 -> 잎이 없다, 1 -> 잎이 있다
// position - 1부터 N까지 가는데 필요한 최소 점프 개수를 아는 것
// 다이나믹 프로그래밍
// 참고: https://github.com/yaseenshaik/codility-solutions-javascript/blob/master/FibFrog.md

function solution(A) {
  const fib = new Array(30);
  fib[0] = 0;
  fib[1] = 1;
  for (let i = 2; i < fib.length; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  const D = new Array(A.length + 1);

  // 잎이 없는 부분은 -1로 초기화
  for (let i = 0; i < D.length; i++) {
    if (i < A.length && A[i] === 0) {
      D[i] = -1;
      continue;
    }

    let min = Number.MAX_SAFE_INTEGER;

    for (let j = fib.length - 1; j >= 0; j--) {
      let k = i - fib[j];
      if (k < -1) continue;
      if (k === -1) {
        min = 1;
        break;
      }
      if (D[k] < 0) continue;
      let min2 = D[k] + 1;
      if (min2 < min) min = min2;
    }

    if (min !== Number.MAX_SAFE_INTEGER) D[i] = min;
    else D[i] = -1;
  }

  // console.log(D);

  return D[A.length];
}

console.log(solution([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0])); // expected: 3;
