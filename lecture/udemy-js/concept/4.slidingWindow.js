//4. 슬라이딩 윈도우
//주어진 배열에서 연속하는 숫자들의 합의 최댓값을 구하여라
//일단 해당 갯수만큼 합을 구한다.
//옆으로 이동하면서 맨 앞의 수를 빼고 다음 수를 더한다.

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); //17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); //6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); //13
console.log(maxSubarraySum([], 4)); //null

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  //주어진 개수만큼 합을 구한다.
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  //i를 num부터 시작하면 [i-num]으로 0부터 시작에 대한 계산이 쉬워진다.
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}
