function solution(arr) {
  let index = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      index = i;
      min = arr[i];
    }
  }
  arr.splice(index, 1);
  return arr.length === 0 ? [-1] : arr;
}
