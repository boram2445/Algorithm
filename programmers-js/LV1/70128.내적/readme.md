## 1. 문제

- 상태 : 스스로 품
- 난이도 : ⭐

### **문제 설명**

길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 [내적](https://en.wikipedia.org/wiki/Dot_product)을 return 하도록 solution 함수를 완성해주세요.

이때, a와 b의 내적은 `a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]` 입니다. (n은 a, b의 길이)

## 2. 내 풀이

- 또 reduce로 시도할까 하다가 익숙한 for문으로 돌아와버렸다.

```jsx
function solution(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}
```

## 3. 다른 사람 풀이

- 쓰지 않는 인자는 `_` 이렇게 처리하면 되는구나

```jsx
function solution(a, b) {
  let answer = a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
  return answer;
}
```
