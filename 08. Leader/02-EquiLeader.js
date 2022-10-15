function solution(A) {
  let cnt = 0;

  let rightObj = {};
  let rightLength = A.length;

  // 각 요소의 갯수를 셈
  for (let i = 0; i < A.length; i++) {
    rightObj[A[i]] = (rightObj[A[i]] || 0) + 1;
  }

  let leftObj = {};
  let leftLength = 0;
  let leftLeader = 0;
  let leftCnt = 0; // leftLeader의 등장 횟수

  for (let i = 0; i < A.length; i++) {
    // 하나씩 옮김
    rightObj[A[i]] -= 1;
    rightLength -= 1;

    leftObj[A[i]] = (leftObj[A[i]] || 0) + 1;
    leftLength += 1;

    // leftLeader, leftCnt 업데이트
    if (leftObj[A[i]] > leftCnt) {
      leftLeader = A[i];
      leftCnt = leftObj[A[i]];
    }

    // leftLeader는 구해졌으므로 rightObj의 leader와 같은지만 보면 됨
    // ** rightObj의 leader 구하기 **
    // rightObj[leftLeader] > (rightLength / 2) &&
    // leftCnt > (leftLength / 2)
    // answer에 +1

    if (
      rightObj[leftLeader] > parseInt(rightLength / 2) &&
      leftCnt > parseInt(leftLength / 2)
    ) {
      cnt += 1;
    }
  }

  return cnt;
}

// test case
console.log(solution([4, 3, 4, 4, 4, 2])); // expected: 2
