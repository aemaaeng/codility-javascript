function solution(A) {
  let abs_arr = [];

  // pt1, pt2 나누기
  let pt1 = A.slice(0, A.length - 1);
  let pt2 = [A[A.length - 1]];

  // reduce는 반복문 바깥에서 한 번만 수행하기
  let sum1 = pt1.reduce((acc, cur) => acc + cur, 0);
  let sum2 = pt2.reduce((acc, cur) => acc + cur, 0);

  while (pt1.length >= 1) {
    let abs = Math.abs(sum1 - sum2);
    abs_arr.push(abs);

    // pt1에 있던 요소를 하나씩 pt2로 옮기기
    let popped = pt1.pop();
    pt2.push(popped);

    // 옮겨진 요소 각 합에서 빼고 더하기
    sum1 = sum1 - popped;
    sum2 = sum2 + popped;
  }

  return Math.min(...abs_arr);
}
