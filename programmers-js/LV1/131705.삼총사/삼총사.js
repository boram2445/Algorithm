function solution(number) {
  let count = 0;
  for (let z = 0; z < number.length - 2; z++) {
    let sum = 0;
    for (let y = z + 1; y < number.length - 1; y++) {
      for (let x = y + 1; x < number.length; x++) {
        if (number[z] + number[y] + number[x] === 0) {
          count += 1;
        }
      }
    }
  }
  return count;
}
