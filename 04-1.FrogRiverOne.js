function solution(X, A) {
  // 중복된 요소가 자동으로 제거되도록 Set 인스턴스 생성
  let leaves = new Set();

  // A 배열에서 반복문을 돌기
  for (let i = 0; i < A.length; i++) {
    let cur = A[i]; // 현재 나뭇잎의 position

    leaves.add(cur);
    // 길이가 같아지면 인덱스 리턴
    if (leaves.size === X) return i;
  }
  // 없으면 -1
  return -1;
}
