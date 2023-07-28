function isPrime(num) {
  if (num <= 1) return;
  for (let i = 2; i < num - 1; i++) {
    if (num % i === 0) return;
  }
  return num;
}
function solution(arr) {
  let answer = [];
  for (let num of arr) {
    let revNum = num.toString().split('').reverse().join('');
    revNum = parseInt(revNum);

    let res = isPrime(revNum);
    res && answer.push(revNum);
  }
  return answer;
}
let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

//선생님 풀이
function isPrime(num) {
  if (num <= 1) return;
  for (let i = 2; i < num - 1; i++) {
    if (num % i === 0) return;
  }
  return num;
}
function solution(arr) {
  let answer = [];
  for (let num of arr) {
    let res = 0;
    while (num) {
      let t = num % 10;
      res = res * 10 + t;
      num = parseInt(num / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

console.log(solution(arr));
