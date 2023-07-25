function solution(s) {
  let answer = 'YES';
  let str = s.toUpperCase();
  let i = 0;
  while (true) {
    if (i >= str.length - 1 - i) break;
    if (str[i] !== str[s.length - 1 - i]) {
      answer = 'No';
      break;
    }
    i++;
  }
  return answer;
}

let str = 'goooG';
console.log(solution(str));

//두번째 풀이
function solution2(s) {
  let answer = 'YES';
  let str = s.toUpperCase();
  if (str !== str.split('').reverse().join('')) return 'NO';
  return answer;
}

console.log(solution2(str));
