function solution(s, t) {
  let answer = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (str[i] === t) {
        answer.push(0);
        break;
      } else if (i - j >= 0 && str[i - j] === t) {
        answer.push(Math.abs(j));
        break;
      } else if (i + j < s.length && str[i + j] === t) {
        answer.push(Math.abs(j));
        break;
      }
    }
  }
  return answer;
}

let str = 'teachermode';
console.log(solution(str, 'e'));

//선생님 풀이🙄
function solution2(s, t) {
  let answer = [];
  let p = 1000;
  //왼쪽 e와 떨어진 최소 거리
  for (let x of s) {
    if (x === t) p = 0;
    else p++;
    answer.push(p);
  }

  //오른쪽 e와 떨어진 최소 거리
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}

console.log(solution2(str, 'e'));
