function solution(s) {
  if (!(s.length === 4 || s.length === 6)) return false;
  return s
    .split("")
    .every((item, i) => item.charCodeAt(0) >= 48 && item.charCodeAt(0) <= 57);
}
