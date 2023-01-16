//1.Frequency Counter - validAnagram
//Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false) // false
validAnagram("awesome", "awesom"); // false
validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true

function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) return false;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }
  for (let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!frequencyCounter2[key]) return false;
    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }
  return true;
}

//teacher code
//객체를 두개 사용하지 않고, 첫번째만 객체를 만들었다.
//그리고 두번째 str을 for loop로 돌때 첫번째 객체에 해당 key값이 있는지 판별해 주었다.
//만약 해당 key값이 있으면 value를 하나씩 빼주어서 한번 계산한 것을 차감되도록 하였다.
// function validAnagram(str1, str2) {
//   // add whatever parameters you deem necessary - good luck!
//   if (str1.length !== str2.length) return console.log(false);
//   let obj = {};

//   for (let char of str1) {
//     obj[char] = (frequencyCounter1[char] || 0) + 1;
//   }
//   for (let char of str2) {
// 		if (!obj[char]) return false;
//     if (obj[char] !== char){
// 			obj[char]-=1;
// 		};
//   }
//   return true;
// }
