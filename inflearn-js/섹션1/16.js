//16. 중복문자 제거
{
  function solution(s){  
    let res = [];
    for(let i of s){
      if(!res.includes(i)){
        res.push(i);
      }
    }
    return res.join('');
  }
  console.log(solution("ksekkset"));
}


//k가 몇개 있는지 찾기 ✨
{
  function solution(s){  
     let answer = 0;
     let pos = s.indexOf('k');
     while(pos!==-1){
       answer++;
       pos = s.indexOf('k',pos+1);
     }
    return answer;
  }
  console.log(solution("ksekkset"));
}