//1. [10, 20, 30, 40] 값의 평균을 구하는 함수를 만들어주세요.
{
  function average(arr){
    return arr.reduce((a,b)=>a+b,0)/arr.length;
  }
  
  console.log(average([10, 20, 30, 40]));
}


//2. (나아가기) 숫자단위 콤마를 찍는 함수를 만들어주세요.
//1000000000 -> 1,000,000,000
{
  function money(num){
    let str = num.toString();
    let res = [];
    let start_len = str.length % 3;
    if(start_len!== 0){
      res.push(str.substr(0, start_len));
    }
    let i = 0;
    while(i*3<str.length-start_len ){
      res.push(str.substr(i*3+start_len ,3 ));
      i++;
    }
    return res.join(',');
  }
  console.log(money(1000000000));
}

//2-1 팀원 방법 1 - result에 더해주자 
{
  function 숫자콤마찍기(num){
    let str = num+''; //string으로 변환하는 방법 이게 더 쉬운듯!
    let len = str.length;
    let point = len%3;
    let result = str.substring(0,point); //if문 안쓰고 그냥 이렇게 하는게 더 나을듯! 
    for(let i = point; i<len; i+=3){
        if(result != ""){
            result += ",";
        }
        result += str.substring(i,i+3)
    }
    return result
}
}

//2-2 팀원 방법2 - reverse 해서 ,를 넣어주자 
{
  function number_comma(num) {
    let reverse_num = ('' + num).split('').reverse(); //순서반전?!
  
    for (let i = 3; i < reverse_num.length; i += 3) {
      reverse_num[i] += ',';
    }
  
    let result = reverse_num.reverse().join('');
    console.log(result);
  }
  number_comma(1000000000000);
}

//2-2 팀원 방법2 - reverse 해서 ,를 넣어주자 
{
    function numRest(num) {
      num = num+'';
      if(num.length > 3){
          const numArr = num.split('');
          for (let i = 3; i < numArr.length; i+=4) {
              numArr.splice(-i,0,',');
              num = numArr.join('');
          }
      }
      return num
  }
}