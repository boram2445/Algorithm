function solution(n) {
    let temp = n
        .toString()
        .split('');
    let answer=[];
    for(let i=temp.length-1; i>=0; i--){
        answer.push(Number(temp[i]));
    }
    return answer;
}