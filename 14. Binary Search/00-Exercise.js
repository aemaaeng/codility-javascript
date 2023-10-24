// find optimal size of the boards that allows all the holes to be covered by boards.

// check if size x is sufficient.
function check(A, k) {
  let N = A.length;
  let boards = 0;
  let last = -1;
  for (let i = 0; i < N; i++) {
    if (A[i] === 1 && last < i) {
      boards += 1;
      last = i + k - 1;
    }
  }
  return boards;
}

function solution(A, k) {
  // binary search로 사이즈를 찾아가며 충족하는지 확인한다.
  // 0과 1로 이루어진 배열. 1이 구멍
  let N = A.length;
  let start = 1; // size의 시작점은 1. 0 사이즈로는 아무것도 채울 수가 없다.
  let end = N;
  let result = -1;
  while (start <= end) {
    let mid = (start + end) / 2;
    if (check(A, mid) <= k) {
      end = mid - 1;
      result = mid;
    } else {
      start = mid + 1;
    }
  }

  return result;
}
