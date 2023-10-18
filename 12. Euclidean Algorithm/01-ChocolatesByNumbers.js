// 맨 처음에 문제 그대로 시뮬레이션한 방식
// 시간복잡도에서 아웃
function solution1(N, M) {
  const edible = new Array(N).fill(true);

  let i = 0;
  let cnt = 0;
  while (edible[i]) {
    edible[i] = false;
    cnt += 1;
    i = (M + i) % N;
  }

  return cnt;
}

// O(log(N + M))으로 개선한 코드
function gcd(a, b) {
  if (a % b === 0) return b;
  else return gcd(b, a % b);
}

function solution2(N, M) {
  return N / gcd(N, M);
}

console.log(solution2(10, 4)); // expected: 5
console.log(solution2(1, 1)); // expected: 1
console.log(solution2(24, 18)); // expected: 4
