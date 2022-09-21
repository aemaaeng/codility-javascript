function solution(A) {
  // counter 객체를 만든다. {1: 등장 횟수, 2: 등장 횟수 등등}
  let counter = A.reduce(function (obj, cur) {
    // if else문 대신 삼항연산자 사용 가능
    if (obj[cur] === undefined) {
      obj[cur] = 1;
    } else {
      obj[cur] = obj[cur] + 1;
    }
    return obj;
  }, {});

  // Object.values()에서 홀수인 것의 key 리턴
  for (key in counter) {
    if (counter[key] % 2 === 1) {
      return Number(key);
    }
  }
}
