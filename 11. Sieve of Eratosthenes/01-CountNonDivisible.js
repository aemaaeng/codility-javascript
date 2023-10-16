// 이중 반복문으로 해결한 처음 해결책
function solution1(A) {
  const result = [];

  for (const el of A) {
    let cnt = 0;
    for (const comp of A) {
      if (el % comp === 0) continue;
      else cnt += 1;
    }
    result.push(cnt);
  }

  return result;
}

// 시간복잡도를 개선한 해결책
// 참고: https://sustainable-dev.tistory.com/31
// 메인 아이디어: 전체 요소의 개수에서 약수의 개수를 뺀다.
function solution2(A) {
  const N = A.length;
  const counter = new Array(N * 2 + 1).fill(0); // 배열에 각 수가 몇 개 들어있는지 확인

  for (const el of A) {
    counter[el] += 1;
  }

  const divCnt = [];

  for (let i = 0; i < N; i++) {
    let divisors = 0;
    for (let j = 1; j * j <= A[i]; j++) {
      if (A[i] % j === 0) {
        divisors += counter[j];
        if (A[i] / j !== j) divisors += counter[A[i] / j];
      }
    }

    divCnt[i] = N - divisors;
  }

  return divCnt;
}

console.log(solution2([3, 1, 2, 3, 6])); // expected: [2, 4, 3, 2, 0]
