function solution(n, m) {
  let res1;
  let res2;
  //최대공약수
  for (let i = Math.min(n, m); i >= 1; i--) {
    if (n % i === 0 && m % i === 0) {
      res1 = i;
      break;
    }
  }
  //최소공배수
  res2 = res1 * (n / res1) * (m / res1);
  return [res1, res2];
}
