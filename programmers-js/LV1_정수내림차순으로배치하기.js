function solution(n) {
    let answer = '';
    let str = n.toString();
    let temp = [];
    //문자열을 배열에 담고 정렬하기 
    for(let i=0; i<str.length; i++){
        temp.push(str[i]);
    }
    temp.sort((a,b)=>b-a);
    //문자열을 다시 정수로 바꿔주기 
    for(let i=0; i<str.length; i++){
        answer+=temp[i];
    }
    answer = Number(answer); 
    return answer;
}