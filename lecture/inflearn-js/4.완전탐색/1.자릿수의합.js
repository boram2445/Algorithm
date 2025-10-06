function solution(n, arr) {
  let answer;
  let max = -1;
  for (let num of arr) {
    let sum = 0,
      tmp = num;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (max <= sum) {
      max = sum;
      answer = answer > num ? answer : num;
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

function solution2(n, arr) {
  let answer;
  let max = -1;
  for (let num of arr) {
    let sum = String(num)
      .split('')
      .reduce((prev, curr) => (prev += Number(curr)), 0);
    if (max <= sum) {
      max = sum;
      answer = answer > num ? answer : num;
    }
  }
  return answer;
}

console.log(solution2(7, arr));
