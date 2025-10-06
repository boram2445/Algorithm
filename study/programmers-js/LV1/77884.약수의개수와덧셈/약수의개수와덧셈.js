function getAliquot(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) count++;
  }
  return count;
}

function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    answer = getAliquot(i) % 2 === 0 ? answer + i : answer - i;
  }
  return answer;
}
