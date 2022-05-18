/*각 격자에는 그 지역의 높이가 쓰여있습니다. 각 격자
판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다. 봉우리 지역이 몇 개 
있는 지 알아내는 프로그램을 작성하세요.*/

function solution(arr){  
  
  //2중 팀색 -> z값으로 ny nx 구하기 
  let dy = [-1,0,1,0];
  let dx = [0,1,0,-1];
  for(let y=0; y<arr.length; y++){
    for(let x=0; x<arr.length; x++){
      let flag = 0;
      for(let z=0; z<4; z++){
        let ny = dy[z]+y;
        let nx = dx[z]+x;
        if(ny<0 ||nx<0 || ny>=length || nx>=length){
          flag =1; 
          break;
        }

      }
      if(flag) break;
    }
  }


  

    
  return answer;
}

let arr=[[5, 3, 7, 2, 3], 
       [3, 7, 1, 6, 1],
       [7, 2, 5, 3, 4],
       [4, 3, 6, 4, 1],
       [8, 7, 3, 5, 2]];
console.log(solution(arr));