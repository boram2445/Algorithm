function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  return num.toString().length;
}

function mostDigits(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, digitCount(arr[i]));
  }
  return max;
}

function radixSort(arr) {
  let maxDigitCount = mostDigits(arr);
  //버킷 만들기
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    //반복하며 버킷에 담기
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
