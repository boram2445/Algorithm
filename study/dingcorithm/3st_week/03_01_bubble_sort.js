function main() {
  let input = [4, 6, 2, 9, 1];

  bubbleSort(input);
  console.log(input); // [1, 2, 4, 6, 9] 가 되어야 합니다!

  console.log("정답 = [1, 2, 4, 6, 9] / 현재 풀이 값 = ");
  console.log(bubbleSort([4, 6, 2, 9, 1]));

  console.log("정답 = [-1, 3, 9, 17] / 현재 풀이 값 = ");
  console.log(bubbleSort([3, -1, 17, 9]));

  console.log("정답 = [-3, 32, 44, 56, 100] / 현재 풀이 값 = ");
  console.log(bubbleSort([100, 56, -3, 32, 44]));
}

function bubbleSort(array) {
  // 이 부분을 채워보세요!

  for (let i = array.length; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}

// Run the main function
main();
