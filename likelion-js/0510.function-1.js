//연습문제(배운것을 사용하여 아래 화살표 함수로 되어 있는 것을 일반 함수로 바꿔주세요.)
{
    let data = [{
        반 : 1, 
        번 : 1, 
        이름 : "호준", 
        중간고사점수 : 55
    }, {
        반 : 1, 
        번 : 2, 
        이름 : "길동", 
        중간고사점수 : 60
    }, {
        반 : 1, 
        번 : 3, 
        이름 : "영희", 
        중간고사점수 : 30
    }, {
        반 : 1, 
        번 : 4, 
        이름 : "철수", 
        중간고사점수 : 20
    }, {
        반 : 1, 
        번 : 5, 
        이름 : "규리", 
        중간고사점수 : 100
    }]

    // console.log(data.map(x => x.중간고사점수));
    function midterm(data){
        let res = [];
        for(let item of data){
            res.push(item.중간고사점수);
        }
        return res;
    }
    console.log(midterm(data));
    //console.log(data.map(x => [x.이름,x.중간고사점수]));
    function person(data){
        let res = [];
        let temp = [];
        for(let item of data){
            temp.push(item.이름);
            temp.push(item.중간고사점수);
            res.push(temp);
            temp = [];
        }
        return res; 
    }
    console.log(person(data));
}

{
    let data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    //let newData = data.map(a => a.map(n => n * 2));
    function double(data){
        let res = [];
        for(let i of data){
            let temp = [];
           for(let j of i){
               temp.push(j*2);
           }
           res.push(temp);
        }
        return res;
    }
    console.log(double(data));
}