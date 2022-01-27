function solution(arr1, arr2) {
    var answer = [];
    
    for(let y=0; y<arr1.length; y++){
        let temp = [];
        for(let x=0; x<arr1[y].length; x++){
            temp.push(arr1[y][x]+arr2[y][x]);
        }
        answer.push(temp);
    }
    return answer;
}