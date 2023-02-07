//i번째 자리수의 숫자 반환 함수
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / 10 ** i) % 10;
}

console.log(getDigit(2319, 2));

//최대 자릿수 반환 함수
function digitCount(num) {
  return num.toString().length;
}

console.log(digitCount(2319));

//배열의 숫자 중 자릿수가 가장 큰 수의 자릿수 반환 함수
function mostDigits(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, digitCount(arr[i]));
  }
  return max;
}

console.log(mostDigits([23, 123, 568, 844423, 1]));

//기수 정렬
function radixSort(arr) {
  let maxDigitCount = mostDigits(arr);
  for (let k = 0; k < maxDigitCount; k++) {
    //버킷 만들기
    let buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      buckets[digit].push(arr[i]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
