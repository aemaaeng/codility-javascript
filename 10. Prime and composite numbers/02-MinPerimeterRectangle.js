function solution(N) {
  // Implement your solution here
  const factors = [];

  for (let i = 0; i <= N ** 0.5; i++) {
    if (N % i === 0) factors.push(i);
  }

  return (factors[factors.length - 1] + N / factors[factors.length - 1]) * 2;
}

// O(sqrt(N))
// test case
console.log(solution(30)); // expected: 22
console.log(solution(4564320)); // expected: 8552
