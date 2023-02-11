function solution(n) {
  let answer = 0;
  let len = n.toString().length;
  for (let i = 0; i < len; i++) {
    answer += Math.floor(n / 10 ** i) % 10;
  }
  return answer;
}
