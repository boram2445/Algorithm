## 1. 문제

- 상태 : 스스로 구현!
- 난이도 : ⭐

### **문제 설명**

두 정수 `left`와 `right`가 매개변수로 주어집니다. `left`부터 `right`까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

---

### 제한사항

- 1 ≤ `left` ≤ `right` ≤ 1,000

---

### 입출력 예

| left | right | result |
| ---- | ----- | ------ |
| 13   | 17    | 43     |
| 24   | 27    | 52     |

## 2. 내풀이

- 약수는 어떻게 구하지? 고민했는데 그냥 종이에 간단히 써보니 쉽게 생각이 들었다.

```jsx
function getAliquot(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) count++;
  }
  return count;
}

function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    answer = getAliquot(i) % 2 === 0 ? answer + i : answer - i;
  }
  return answer;
}
```

## 3. 다른 사람 풀이

- 제곱근이 정수이면, 약수의 개수가 홀수라는 수학ㄱ 개념을 이용할 수 있다고 한다..

```jsx
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
```
