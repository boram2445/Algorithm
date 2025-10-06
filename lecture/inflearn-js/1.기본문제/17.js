//17. 중복 단어 제거 
{
  function solution(s){  
    let answer = [];
    for(let i of str){
      if(!answer.includes(i)){
        answer.push(i);
      }
    }
    return answer;
  }
  let str=["good", "time", "good", "time", "student"];
  console.log(solution(str));
}

//2.선생님 풀이 - 처음으로 찾은 요소이면 push해라
{
  function solution(s){  
    let answer = [];
    answer = s.filter((v,i)=>s.indexOf(v)===i);
    return answer;
  }
  let str=["good", "time", "good", "time", "student"];
  console.log(solution(str));
}