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
