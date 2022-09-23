function solution(X, Y, D) {
  // write **efficient** solution
  // X + D * jump = Y
  // 올림 메소드: ceil
  let jump = Math.ceil((Y - X) / D);
  return jump;
}
