function solution(s) {
  let answer = '';
  let p = 1;
  for (let i = 1; i <= s.length; i++) {
    if (s[i - 1] === s[i]) p++; //같은 문자
    else {
      //새로운 문자
      if (p === 1) {
        answer += s[i - 1];
      } else {
        answer += s[i - 1] + p;
        p = 1;
      }
    }
  }
  return answer;
}

let str = 'KKHSSSSSSSE';
console.log(solution(str));

//선생님 풀이
function solution2(s) {
  let answer = '';
  let p = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) p++;
    else {
      answer += s[i];
      if (p > 1) {
        answer += String(p);
        p = 1;
      }
    }
  }
  return answer;
}

console.log(solution2(str));
