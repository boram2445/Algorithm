//11. 대문자 찾기
//한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램을 작성하세요

//1. charCodeAt() 대문자 65~90 소문자 97~122 숫자 48~57
{
  function solution(s){         
    let answer = s.split('').filter((i)=>i.charCodeAt()>65 && i.charCodeAt() < 90).length;
    return answer;
  }
  
  let str="KoreaTimeGood";
  console.log(solution(str));
}

//2. toLowerCase() ✨
{
  function solution(s){
    let answer = s.split('').filter((i)=>i===i.toUpperCase()).length;
    return answer;
  }
  let str="KoreaTimeGood";
  console.log(solution(str));
}

