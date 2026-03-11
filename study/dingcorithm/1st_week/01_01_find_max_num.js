function findMaxNum(array) {
  let max_num = 0;
  for (let i = 0; i < array.length; i++) {
    if (max_num < array[i]) {
      max_num = array[i];
    }
  }
  return max_num;
}

console.log("정답 = 6 / 현재 풀이 값 = " + findMaxNum([3, 5, 6, 1, 2, 4]));
console.log("정답 = 6 / 현재 풀이 값 = " + findMaxNum([6, 6, 6]));
console.log("정답 = 1888 / 현재 풀이 값 = " + findMaxNum([6, 9, 2, 7, 1888]));
