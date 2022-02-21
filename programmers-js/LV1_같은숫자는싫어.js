function solution(arr)
{
    var answer = [];
    
    let temp;
    for(let i=0;i<arr.length; i++){
        if(arr[i]!==temp){
            answer.push(arr[i]);
            temp=arr[i];
        }
    }
    // 다른 사람 풀이1 - filter 활용
    // return arr.filter((e,i) => e !== arr[i+1]);
    return answer;
}