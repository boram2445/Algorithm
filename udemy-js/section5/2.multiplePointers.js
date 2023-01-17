//2.Multiple Pointers - countUniqueValues
//Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
//You must do this with constant or O(1) space and O(n) time.

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

function countUniqueValues(arr) {
  //i j
  //for j가 length 만큼 돈다.
  //j와 i의 값이 다르면 i가 한칸 이동하고, j값을 저장한다.
  //결과는 i+1
  let i = 0;
  if (!arr.length) return 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
