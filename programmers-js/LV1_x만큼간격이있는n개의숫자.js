function solution(x, n) {
    var answer = [];
    //n회 반복, t에 x만큼의 값을 더해주면서 push
    let t=x;
    for(let i=0; i<n; i++){
        answer.push(t);
        t+=x;
    }
    return answer;
}