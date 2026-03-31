function main() {
  let input = [4, 6, 2, 9, 1];

  insertionSort(input);
  console.log(input); // [1, 2, 4, 6, 9] 가 되어야 합니다!

  console.log("정답 = [4, 5, 7, 7, 8] / 현재 풀이 값 = ");
  console.log(insertionSort([5, 8, 4, 7, 7]));

  console.log("정답 = [-1, 3, 9, 17] / 현재 풀이 값 = ");
  console.log(insertionSort([3, -1, 17, 9]));

  console.log("정답 = [-3, 32, 44, 56, 100] / 현재 풀이 값 = ");
  console.log(insertionSort([100, 56, -3, 32, 44]));
}

function insertionSort(array) {
  // 이 부분을 채워보세요!

  return array;
}

// Run the main function
main();
