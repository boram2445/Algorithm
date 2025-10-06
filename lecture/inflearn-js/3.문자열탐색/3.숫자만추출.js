function solution(str) {
  let answer = '';
  str = str.replace(/[^0-9]/g, '');
  return parseInt(str);
}

let str = 'g0en2T0s8eSoft';
console.log(solution(str));

//선생님 방법
function solution2(str) {
  let answer = 0;
  for (let x of str) {
    if (!isNaN(x)) answer = answer * 10 + Number(x);
  }
  return answer;
}

console.log(solution2(str));
