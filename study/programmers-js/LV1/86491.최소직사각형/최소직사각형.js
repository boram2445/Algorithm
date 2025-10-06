function solution(sizes) {
    for(let i=0; i<sizes.length; i++){
        sizes[i].sort((a,b)=> a-b);
    }
    let maxW = 0;
    let maxH = 0;
    for(let i=0; i<sizes.length; i++){
        if(maxW < sizes[i][0]) maxW = sizes[i][0];
        if(maxH < sizes[i][1]) maxH = sizes[i][1];
    }
    return maxW * maxH;
}