function solution(A, B) {
  const L = A.length;
  const max = Math.max(...A);
  const D = new Array(max + 1).fill(0);
  D[1] = 1;
  D[2] = 2;

  for (let i = 3; i < D.length; i++) {
    D[i] = (D[i - 2] + D[i - 1]) % Math.pow(2, 30); // 중간에 나눠주는게 포인트!
  }

  const result = new Array(L).fill(0);

  for (let i = 0; i < L; i++) {
    const el = A[i];
    const modulo = Math.pow(2, B[i]);
    result[i] = D[el] % modulo;
  }

  return result;
}

console.log(solution([4, 4, 5, 5, 1], [3, 2, 4, 3, 1])); // expected: [5, 1, 8, 0, 1]
