function solution(m, arr) {
  let answer = 0;
  let n = arr.length;
  let sum;
  for (let i = 0; i < n; i++) {
    sum = arr[i];
    for (let j = 0; j < n; j++) {
      sum += arr[j];
      if (sum === m) {
        answer++;
        break;
      } else if (sum > m) {
        break;
      }
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));

function solution(m, arr) {
  let answer = 0;
  let n = arr.length;
  let sum = 0;
  let lt = (rt = 0);
  while (rt < n) {
    sum += arr[rt++];
    if (sum === m) {
      answer++;
      sum -= arr[lt++];
    } else if (sum > m) {
      sum -= arr[lt++];
    }
  }

  return answer;
}

console.log(solution(6, a));
