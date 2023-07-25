function solution(s) {
  let answer = 'YES';
  const alphaRegex = /[a-z]/gi;
  let str = s.toLowerCase().match(alphaRegex);
  if (str.join('') !== str.reverse().join('')) return 'NO';
  return answer;
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));

//선생님 풀이
function solution2(s) {
  let answer = 'YES';
  s = s.toLowerCase().replace(/[^a-z]/g, '');
  if (s !== s.split('').reverse().join('')) return 'NO';
  return answer;
}

console.log(solution2(str));
