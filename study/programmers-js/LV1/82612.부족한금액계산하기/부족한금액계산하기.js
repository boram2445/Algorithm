function solution(price, money, count) {
  let result = 0;
  for (let i = 1; i <= count; i++) {
    result += i * price;
  }
  const sub = money - result;
  return sub < 0 ? -sub : 0;
}
