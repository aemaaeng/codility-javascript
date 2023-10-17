function primality(num) {
  let i = 2;
  while (i * i <= num) {
    if (num % i === 0) return false;
    i += 1;
  }
  return true;
}

// 처음 솔루션: 시간복잡도에서 아웃
function solution1(N, P, Q) {
  const M = P.length;
  const semiPrimes = new Array(N + 1).fill(true);
  const result = new Array(M).fill(0);

  // 체로 걸러내듯이
  // 1. 소수를 지운다
  // 2. 약수에 소수가 아닌 수가 포함된 수를 지운다.
  semiPrimes[0] = false;
  semiPrimes[1] = false;

  let i = 2;

  while (i <= N) {
    if (primality(i)) semiPrimes[i] = false;
    // i의 약수를 구한다.
    // i의 약수에서 소수가 아닌 수가 있는지 판별한다.
    let j = 2;
    while (j * j <= i) {
      if (i % j === 0) {
        if (!primality(j)) semiPrimes[i] = false;
        if (i / j !== i && !primality(i / j)) semiPrimes[i] = false;
      }
      j += 1;
    }
    i += 1;
  }

  for (let i = 0; i < M; i++) {
    let cnt = 0;
    for (let start = P[i]; start <= Q[i]; start++) {
      if (semiPrimes[start]) cnt += 1;
    }
    result[i] = cnt;
  }

  return result;
}

// 시간복잡도를 해결한 코드 (에라토스테네스의 체 응용)
function solution2(N, P, Q) {
  const M = P.length;
  const sieve = new Array(N + 1).fill(0);
  const result = new Array(M).fill(0);

  let i = 2;
  while (i * i <= N) {
    if (sieve[i] === 0) {
      let j = i * i;
      while (j <= N) {
        if (sieve[j] === 0) sieve[j] = i; // 소수의 배수라면 그 소수를 값으로 할당
        j += i; // i만큼 증가 (배수)
      }
    }
    i += 1;
  }

  const semiPrimes = new Array(N + 1).fill(0);

  let cnt = 0;
  for (let i = 0; i <= N; i++) {
    if (sieve[i] !== 0) {
      // j를 해당 소수로 나누었을 때의 몫 또한 소수인지 체크
      if (sieve[i / sieve[i]] === 0) cnt += 1;
    }
    semiPrimes[i] = cnt;
  }

  // 누적합 응용
  for (let i = 0; i < M; i++) {
    const start = P[i];
    const end = Q[i];

    result[i] = semiPrimes[end] - semiPrimes[start - 1];
  }

  return result;
}
