//2. 삼각형 판별하기

function solution(a, b, c){
  let max;
  if(a<b) max=b;
  else max=a;
  if(max<c) max=c;
  if(a+b+c-max <= max) return 'No';
  return 'Yes';
}

console.log(solution(6,7,11));