function solution(A) {
  // A 정렬 후
  let arr = A.sort((a, b) => a - b);

  // 양수만 거르기
  arr = arr.filter((el) => el > 0);

  // 빈 배열이 되었다면 바로 1 리턴
  if (arr.length === 0) {
    return 1;
  }

  // 최솟값 저장해두기
  let min = Math.min(...arr);

  // 최솟값이 1보다 크면 바로 1 리턴
  if (min > 1) {
    return 1;
  }

  // 최솟값보다 1 큰 값이 나오면 최솟값 update
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] === min + 1) {
      min = arr[i];
    }
  }

  // 최솟값에 1 더한 값 리턴
  return min + 1;
}
