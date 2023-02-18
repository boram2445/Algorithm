function solution(n) {
  let res = "";
  while (n > 0) {
    res += n % 3;
    n = Math.floor(n / 3);
  }

  //10진법으로
  let answer = 0;
  for (let i = 0; i < res.length; i++) {
    answer += 3 ** i * res[res.length - 1 - i];
  }
  return answer;
}
