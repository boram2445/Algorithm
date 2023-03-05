function changeCount(num, n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(num % 2);
    num = Math.floor(num / 2);
  }
  return arr.reverse();
}

function solution(n, arr1, arr2) {
  let answer = [];
  //2진수로 변환
  for (let i = 0; i < n; i++) {
    arr1[i] = changeCount(arr1[i], n);
    arr2[i] = changeCount(arr2[i], n);
  }
  //결과
  for (let i = 0; i < n; i++) {
    let res = "";
    for (let j = 0; j < n; j++) {
      if (arr1[i][j] === 1 || arr2[i][j] === 1) {
        res += "#";
      } else {
        res += " ";
      }
    }
    answer.push(res);
  }
  return answer;
}
