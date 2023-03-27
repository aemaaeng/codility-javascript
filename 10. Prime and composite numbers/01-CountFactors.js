function solution(N) {
  // Implement your solution here
  const isInteger = Number.isInteger(N ** 0.5);
  let cnt = 0;
  for (let i = 0; i <= N ** 0.5; i++) {
    if (N % i === 0) cnt += 1;
  }
  return isInteger ? cnt * 2 - 1 : cnt * 2;
}

// O(sqrt(N))
// test case
console.log(solution(24)); // expected: 8
console.log(solution(36)); // expected: 9
