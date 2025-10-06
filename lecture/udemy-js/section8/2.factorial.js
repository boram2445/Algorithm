/**
factorial
Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.
 */

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040

function factorial(num) {
  if (num < 0) return 0;
  if (num === 1 || num === 0) return 1;
  return num * factorial(--num);
}

/**
function factorial(num) {
  if (num < 0) return 0;
  if (num <= 1) return 1; 
  return num * factorial(--num);
}
 * 정답이지만 보완하자!
 * <0 일때 0을 반환하는 것을 놓쳤다.
 * 0! 은 무조건 1이라는 조건을 놓쳤었다. => 문제 정확히 파악할것!
 */
