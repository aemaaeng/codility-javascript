function solution(S) {
  let sum = 0;

  // 여는 괄호이면 +1 닫는 괄호 나오면 -1
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(") {
      sum += 1;
    } else if (S[i] === ")") {
      sum -= 1;
    }
    // 음수가 되면 바로 break
    if (sum < 0) {
      break;
    }
  }

  // sum이 0이면 1 리턴, 아니면 0 리턴
  if (sum === 0) {
    return 1;
  } else {
    return 0;
  }
}

// test cases
console.log(solution("(()(())())")); // expected: 1
console.log(solution("())")); // expected: 0
