function solution(n, k, card) {
  let answer;
  let arr = [];
  card.sort((a, b) => b - a);
  let flag = 0;
  for (let x = 0; x < n; x++) {
    let sum = 0;
    if (flag) break;
    for (let y = x + 1; y < n; y++) {
      if (flag) break;
      for (let z = y + 1; z < n; z++) {
        sum = card[x] + card[y] + card[z];
        if (arr.slice(-1) === sum) continue;
        else arr.push(sum);
        if (arr.length === k) {
          flag = 1;
          break;
        }
      }
    }
  }
  answer = arr.pop();
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));

//선생님 풀이
function solution2(n, k, card) {
  let answer;
  let tmp = new Set();
  for (let x = 0; x < n; x++) {
    for (let y = x + 1; y < n; y++) {
      for (let z = y + 1; z < n; z++) {
        tmp.add(card[x] + card[y] + card[z]);
      }
    }
  }
  let arr = Array.from(tmp).sort((a, b) => b - a);
  answer = arr[k - 1];
  return answer;
}

console.log(solution2(10, 3, arr));
