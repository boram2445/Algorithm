function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else if (i === arr1.length) result.concat(arr2.slice(j));
    if (j === arr2.length) result.concat(arr1.slice(i));
    {
      result.push(arr2[j]);
      j++;
    }
  }
  if (i === arr1.length) return result.concat(arr2.slice(j));
  if (j === arr2.length) return result.concat(arr1.slice(i));
}

console.log(merge([3, 5], [2, 8]));

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)));
}

console.log(mergeSort([6, 9, 8, 2, 10]));
