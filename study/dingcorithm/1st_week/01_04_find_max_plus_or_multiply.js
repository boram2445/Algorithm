function findMaxPlusOrMultiply(array) {
  let result = array[0];
  for (let i = 0; i < array.length - 1; i++) {
    let prod = result * array[i + 1];
    let sum = result + array[i + 1];
    if (sum > prod) {
      result += array[i + 1];
    } else {
      result *= array[i + 1];
    }
  }
  return result;
}

console.log(
  "정답 = 728 현재 풀이 값 = " + findMaxPlusOrMultiply([0, 3, 5, 6, 1, 2, 4]),
);
console.log(
  "정답 = 8820 현재 풀이 값 = " + findMaxPlusOrMultiply([3, 2, 1, 5, 9, 7, 4]),
);
console.log(
  "정답 = 270 현재 풀이 값 = " + findMaxPlusOrMultiply([1, 1, 1, 3, 3, 2, 5]),
);
