function solution(A, B) {
  // A = size of the fish
  // B = direction of the fish
  let stack = [];
  let N = A.length;

  stack.push(0);
  let i = 1;

  while (i < N) {
    if (B[i] === 0 && B[stack[stack.length - 1]] === 1) {
      if (A[i] > A[stack[stack.length - 1]]) {
        stack.pop();
      } else {
        i++;
      }
    } else {
      stack.push(i);
      i++;
    }
  }

  return stack.length;
}

// test case
console.log(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0])); // expected: 2
