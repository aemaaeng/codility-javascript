// the result of each person reversing coins.
function solution(N) {
  let result = 0;
  const coin = new Array(N + 1).fill(0);

  for (let i = 1; i < N + 1; i++) {
    let k = i;
    while (k <= N) {
      coin[k] = (coin[k] + 1) % 2;
      k += i;
    }
    result += coin[i];
  }

  return result;
}

console.log(solution(10)); // expected: 3
