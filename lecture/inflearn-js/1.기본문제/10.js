//10. 한개의 문자열을 받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 
//존재하는지 알아내는 프로그램을 작성하세요

//1. 내 풀이 
{
  function solution(s, t){
    let res = s.split('').filter((item)=>item === t).length;
    return res;
  }
  
  let str="COMPUTERPROGRAMMING";
  console.log(solution(str, 'R'));
}



//2. 선생님 풀이 - 4등분되면, 3번 자른것이다! 
{
  function solution(s,t){
    let res = s.split(t).length-1;
    return res;
  }
  let str="COMPUTERPROGRAMMING";
  console.log(solution(str, 'R'));
}