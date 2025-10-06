/**
productOfArray
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
 */

console.log(productOfArray([1, 2, 3])); //6
console.log(productOfArray([1, 2, 3, 10])); // 60

function productOfArray(array) {
  if (array.length === 0) return 1;
  return array.pop() * productOfArray(array);
}

/**
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}
  *완벽한 정답!
  * slice를 사용하는 방법을 쌤은 좋아하는 것 같다.
 * pop하면 원본배열이 수정되는지, 그래서 위처럼 짜도 되는지 헷갈렸다.
 */
