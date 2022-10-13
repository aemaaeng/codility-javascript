function solution(H) {
  let stack = [];
  let blocks = 0;

  for (let i = 0; i < H.length; i++) {
    // 현재 블록이 스택의 top보다 작다 => 그렇지 않을 때까지 pop
    while (stack.length > 0 && H[i] < stack[stack.length - 1]) {
      stack.pop();
    }
    // 스택이 비어있거나 스택의 top보다 현재 블록의 높이가 높다 => push
    if (stack.length === 0 || H[i] > stack[stack.length - 1]) {
      blocks += 1;
      stack.push(H[i]);
    }
  }

  return blocks;
}

// test cases
console.log(solution([8, 8, 5, 7, 9, 8, 7, 4, 8])); // expected: 7
console.log(solution([2, 1, 4, 5, 1, 3, 3])); // expected: 5
