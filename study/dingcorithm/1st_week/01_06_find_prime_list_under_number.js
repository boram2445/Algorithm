// 소수는 자기 자신과 1외 에는 아무것도 나눌 수 없다.
// TODO: 다시한번 복습
function findPrimeListUnderNumber(number) {
  const primeList = [];
  for (let num = 2; num <= number; num++) {
    let isPrime = true;
    for (const i of primeList) {
      if (i * i > num && num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primeList.push(num);
    }
  }

  return primeList;
}

const input = 20;
const result = findPrimeListUnderNumber(input);
console.log(result);
