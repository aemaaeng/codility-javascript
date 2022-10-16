function solution(A) {
  // 각 요소를 카운트할 객체를 만든다.
  let countObj = {};

  // 반복문을 돌며 요소의 개수를 카운트한다.
  for (let i = 0; i < A.length; i++) {
    if (countObj[A[i]] === undefined) {
      countObj[A[i]] = 0;
    }
    countObj[A[i]] += 1;
  }

  // Object.keys로 각 요소를 돌면서 그 갯수가 홀수이면 해당 key를 리턴한다.
  // let keys = Object.keys(countObj);
  // for (let i = 0; i < keys.length; i++) {
  //   if (countObj[keys[i]] % 2 === 1) {
  //     return Number(keys[i]);
  //   }
  // }

  // --> for in 반복문이 더 직관적임
  for (key in countObj) {
    if (countObj[key] % 2 === 1) return Number(key);
  }
}

// test case
console.log(solution([9, 3, 9, 3, 9, 7, 9]));
