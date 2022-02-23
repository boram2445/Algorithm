function solution(s) {
    var answer = '';
    let len = s.length; 
    if(len%2===1){
        answer=s[parseInt(len/2)];
    } else{
        answer=s[len/2-1]+s[(len/2)]
    }
    return answer;
}

//다른사람 풀이
//홀수일 경우 먼저 -1을 해주고 /2를 하면 parseInt를 해줄 필요 없음
{
    return s.length%2
        ? s[(s.length-1)/2]
        : s[s.length/2-1]+s[s.length/2];
}
