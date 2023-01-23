/**
4. Multiple Pointers - isSubsequence
Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Time Complexity - O(N + M)
Space Complexity - O(1)
 */

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)

function isSubsequence(arr1, arr2) {
  if (arr1.length > arr2.length) return false;
  let i = 0;
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) i++;
    if (i === arr1.length) return true;
  }
  return false;
}

/**
 * 완벽한 정답!
 * 그러나 다중 포인터라는 방법이 적혀있지 않았다면 생각해내지 못했을것 같다.
 */
