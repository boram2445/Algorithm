/**
reverse
Write a recursive function called reverse which accepts a string and returns a new string in reverse.
 */

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'

function reverse(str) {
  if (str.length === 0) return "";
  return str[str.length - 1] + reverse(str.slice(0, -1));
}

/**
function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}
 * 완벽한 정답!
 */
