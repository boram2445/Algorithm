function solution(a, b) {
  let sum = 0;
  const min = Math.min(a, b);
  const max = min === a ? b : a;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}
