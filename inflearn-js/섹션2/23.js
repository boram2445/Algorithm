//23. N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합니다.

function solution(arr){  
  let answer; 
  let len = arr.length;

  //1.가로
  let max = -9999;
  for(let i=0; i<len; i++){
    let sum1 = 0;
    let sum2 = 0;
    for(let j=0; j<len; j++){
      sum1+=arr[i][j];
      sum2+=arr[j][i]; //세로 값의 합!!
    }
    if(sum1 > max) max = sum1; 
    if(sum2 > max) max = sum2;
  }
  
  //3.대각선
  let sum3 = 0;  //let sum3=sum4=0;
  let sum4 = 0;
  for(let i=0; i<len; i++){
    sum3+=arr[i][i];
    sum4+=arr[i][len-1-i];
  }
  answer = Math.max(max, sum3, sum4);
  return answer;
}

let arr=[[10, 13, 10, 12, 15], 
       [12, 39, 30, 23, 11],
       [11, 25, 50, 53, 15],
       [19, 27, 29, 37, 27],
       [19, 13, 30, 13, 19]];
console.log(solution(arr));