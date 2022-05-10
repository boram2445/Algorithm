//5. 최솟값 구하기 
let arr=[5, 7, 1, 3, 2, 9, 11];
{
  function solution(arr){         
    return Math.min(...arr);
  }
  console.log(solution(arr));
}

{
  let min = Number.MAX_SAFE_INTEGER;
  function solution(arr){
    for(let i=0; i<arr.length;i++){
      if(min > arr[i]){
        min = arr[i];
      }
    }
    return min;
  }
  console.log(solution(arr));
}

