function sumRecursion(num) {
  if (num === 1) return 1;
  return num + sumRecursion(num - 1);
}

console.log(sumRecursion(4));
