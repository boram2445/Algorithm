//8. 일곱 난쟁이 
//일곱 난쟁이의 키의 합이 100
//아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시오. 
function solution(arr){
  let sum = arr.reduce((a,b)=>a+b,0);
  console.log(sum);
  let flag = 0; 
  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
      if(sum-(arr[i]+arr[j])===100){
        arr.splice(i,1);
        arr.splice(j,1);
        flag = 1;
        break; 
      }
    }
    if(flag) break;
  }
  return arr;
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));