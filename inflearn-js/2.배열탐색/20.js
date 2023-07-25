//20. 가위 바위 보
//두 사람의 각 회의  1:가위, 2:바위, 3:보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램을 작성하세요. 
function solution(a, b){         
  let answer="";
  for(let i=0; i<a.length; i++){
      if(a[i]===b[i]) answer+="D ";
      else if(a[i]===1 && b[i]===3) answer+="A ";
      else if(a[i]===2 && b[i]===1) answer+="A ";
      else if(a[i]===3 && b[i]===2) answer+="A ";
      else answer+="B ";
  }
  
  return answer;
}
let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];
console.log(solution(a, b));