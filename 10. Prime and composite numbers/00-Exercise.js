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

// O(logN) solution
// 각 동전은 자신의 나머지의 개수만큼 뒤집어진다는 점을 이용
// 나머지의 개수가 홀수인 수는 tail을 보인다.
// 어떤 수의 제곱이 되는 수는 무조건 나머지의 개수가 홀수이다.
// 1부터 N까지의 수 중에서 어떤 수의 제곱이 되는 자연수의 개수를 구한다.
function countOddDivisors(n) {
  let result = 0;
  let i = 1;

  while (i * i <= n) {
    result += 1;
    i += 1;
  }

  return result;
}

console.log(countOddDivisors(10)); // expected: 3
