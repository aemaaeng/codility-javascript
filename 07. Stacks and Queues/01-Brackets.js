function solution(S) {
  let stack = [];

  const brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < S.length; i++) {
    if (Object.keys(brackets).indexOf(S[i]) !== -1) {
      // 여는 괄호일 때는 stack에 push
      stack.push(S[i]);
    }
    // 닫는 괄호인데 스택이 비어있을 경우에는 0 리턴
    if (Object.values(brackets).indexOf(S[i]) !== -1) {
      if (stack.length === 0) {
        return 0;
      } else if (brackets[stack[stack.length - 1]] === S[i]) {
        stack.pop();
      }
    }
  }

  if (stack.length === 0) {
    return 1;
  }
  return 0;
}

// test cases
console.log(solution("{[()()]}")); // expected: 1
console.log(solution("([)()]")); // expected: 0
console.log(solution("(())())")); // expected: 0
