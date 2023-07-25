//6. 홀수
//7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 
//중 최소값을 찾는 프로그램을 작성하세요
function solution(arr){
  let res = arr.filter((i)=>i%2==1);
  return [res.reduce((a,b)=>a+b,0), Math.min(...res)];
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));