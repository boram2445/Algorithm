function solution(n) {
  let str = "";
  let count = 0;
  while (count < n) {
    str += count % 2 === 0 ? "수" : "박";
    count++;
  }
  return str;
}
