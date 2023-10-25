// 참고: http://codility-lessons.blogspot.com/2015/03/lesson-11-nailingplanks-nailing-planks.html
// O((N + M) * log(M))

function solution(A, B, C) {
  // prefix sum 배열 선언
  // 시작점과 끝점, 정답 변수 초기화
  // 이분 탐색 실행하기 -> J를 이분 탐색으로 찾음
  // 중간점 구하기
  // 중간점까지 돌면서 prefix sum에서 C 요소 값에 +1
  // A[k], B[k] 사이의 값이 전부 0이면 못이 없다는 뜻이므로 failed = true;
  // failed가 true이면 못의 개수가 부족하다는 뜻이므로 start = mid + 1
  // 아니라면 충분하다는 뜻이므로 개수를 end = mid - 1로 점점 줄여보면서 최소 못의 개수를 찾는다.

  const N = A.length;
  const M = C.length;

  let start = 1;
  let end = M;
  let result = -1;

  while (start <= end) {
    const P = new Array(2 * M + 1).fill(0);
    let failed = false;
    let mid = Math.floor((start + end) / 2);

    for (let i = 0; i < mid; i++) {
      P[C[i]] += 1;
    }

    for (let i = 1; i < P.length; i++) {
      P[i] += P[i - 1];
    }

    // A[k], B[k] 사이 체크
    for (let i = 0; i < N; i++) {
      if (P[B[i]] - P[A[i] - 1] === 0) {
        failed = true;
        break;
      }
    }

    if (failed) start = mid + 1;
    else {
      end = mid - 1;
      result = mid;
    }
  }

  return result;
}
