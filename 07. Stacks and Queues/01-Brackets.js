function solution(S) {
  let stack = [];

  if (S.length === 0) {
    return 1;
  }

  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(" || S[i] === "{" || S[i] === "[") {
      stack.push(S[i]);
    }

    if (S[i] === ")") {
      if (stack.length === 0) {
        return 0;
      } else if (stack[stack.length - 1] === "(") {
        stack.pop();
      }
    }

    if (S[i] === "]") {
      if (stack.length === 0) {
        return 0;
      } else if (stack[stack.length - 1] === "[") {
        stack.pop();
      }
    }

    if (S[i] === "}") {
      if (stack.length === 0) {
        return 0;
      } else if (stack[stack.length - 1] === "{") {
        stack.pop();
      }
    }
  }

  if (stack.length === 0) {
    return 1;
  } else {
    return 0;
  }
}

// test cases
console.log(solution("{[()()]}")); // expected: 1
console.log(solution("([)()]")); // expected: 0
console.log(solution("(())())")); // expected: 0
