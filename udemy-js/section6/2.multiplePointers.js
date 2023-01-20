/**
 * 2. Frequency Counter / Multiple Pointers - areThereDuplicates
 Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

 Restrictions:
Time - O(n)
Space - O(n)

Bonus:
Time - O(n log n)
Space - O(1)
 */
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true

//빈도수 세기
function areThereDuplicates(...list) {
  let obj = {};
  for (let char of list) {
    if (obj[char]) return true;
    obj[char] = 1;
  }
  return false;
}
