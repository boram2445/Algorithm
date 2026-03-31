function main() {
  let input = [4, 6, 2, 9, 1];

  selectionSort(input);
  console.log(input); // [1, 2, 4, 6, 9] 가 되어야 합니다!

  console.log("정답 = [1, 2, 4, 6, 9] / 현재 풀이 값 = ");
  console.log(selectionSort([4, 6, 2, 9, 1]));

  console.log("정답 = [-1, 3, 9, 17] / 현재 풀이 값 = ");
  console.log(selectionSort([3, -1, 17, 9]));

  console.log("정답 = [-3, 32, 44, 56, 100] / 현재 풀이 값 = ");
  console.log(selectionSort([100, 56, -3, 32, 44]));
}

function selectionSort(array) {
  // 이 부분을 채워보세요!
  // O(N^2)

  let n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i; // 현재 위치를 최소값으로 가정
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }

  return array;
}

// Run the main function
main();
