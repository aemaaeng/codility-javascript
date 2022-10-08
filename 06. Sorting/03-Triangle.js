function solution(A) {
  // 정렬
  let arr = A.sort((a, b) => a - b);

  // i = 2부터 시작. j랑 k는 각각 i에서 1, 2씩 뺀 값
  for (let i = 2; i < arr.length; i++) {
    let j = i - 1;
    let k = i - 2;

    if (A[i] < A[j] + A[k]) {
      return 1;
    }
  }

  return 0;
}

// test cases
console.log(solution([10, 2, 5, 1, 8, 20]));
console.log(solution([10, 50, 5, 1]));
