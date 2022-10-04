function solution(S, P, Q) {
  // let dna = {'A': 1, 'C': 2, 'G': 3, 'T': 4};
  let result = [];

  // 가장 작은 수부터 있는지 없는지 확인하기
  // 있으면 result에 넣은 후 더 이상 진행하지 않고 다음 query로 넘어감
  for (let i = 0; i < P.length; i++) {
    let query = S.slice(P[i], Q[i] + 1);

    if (query.indexOf("A") !== -1) {
      result[i] = 1;
      continue;
    }

    if (query.indexOf("C") !== -1) {
      result[i] = 2;
      continue;
    }

    if (query.indexOf("G") !== -1) {
      result[i] = 3;
      continue;
    }
    result[i] = 4;
  }

  return result;
}
