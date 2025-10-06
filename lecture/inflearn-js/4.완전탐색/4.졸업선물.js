function solution(m, product) {
  let answer = 0;
  product.sort((a, b) => (a[0] + a[1] > b[0] + b[1] ? 1 : -1));
  let sum = 0;
  for (let i = 0; i < product.length; i++) {
    let cost = product[i][0] + product[i][1];
    if (sum + cost > m) {
      if (sum + product[i][0] / 2 + product[i][1] > m) {
        continue;
      } else {
        answer++;
        break;
      }
    }
    sum += cost;
    answer++;
  }

  return answer;
}
let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));

//선생님 풀이
function solution2(m, product) {
  let answer = 0;
  let n = product.length;
  product.sort((a, b) => (a[0] + a[1] > b[0] + b[1] ? 1 : -1)); //비싼 것대로 sort
  for (let i = 0; i < product.length; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]); //할인받는 상품 선택
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      if (j !== i && money < product[j][0] + product[j][1]) break;
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1];
        cnt++;
      }
    }
  }

  return answer;
}

console.log(solution2(28, arr));
