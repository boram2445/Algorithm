/**
1. Frequency Counter - sameFrequency
 Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
Your solution MUST have the following complexities:

Time: O(N)

Sample Input:
*/
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false

function sameFrequency(first, second) {
  //1. 수를 string으로 만든다
  //2. string 길이가 다르면 return
  //3. 각각의 수를 객체로 만든다 key(숫자):value(빈도수)
  //4. 객체를 돌면서 일치한지 판별한다. 일치하지 않는게 하나라도 있으면 return false;
  //5. 다 통과하면 return true
  let str1 = first.toString();
  let str2 = second.toString();
  if (str1.length !== str2.length) return false;

  let obj1 = {};
  let obj2 = {};
  for (let char of str1) {
    obj1[char] = (obj1[char] || 0) + 1;
  }
  for (let char of str2) {
    obj2[char] = (obj2[char] || 0) + 1;
  }
  for (let char of str1) {
    if (!obj2[char]) return false;
    if (obj2[char] !== obj2[char]) return false;
  }
  return true;
}
