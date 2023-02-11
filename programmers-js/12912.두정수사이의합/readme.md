## 1. 문제

### **문제 설명**

두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

### 제한 조건

- a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
- a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
- a와 b의 대소관계는 정해져있지 않습니다.

### 입출력 예

| a   | b   | return |
| --- | --- | ------ |
| 3   | 5   | 12     |
| 3   | 3   | 3      |
| 5   | 3   | 12     |

## 2. 내 풀이

`맞춤`

- 제한 조건에서 a와 b의 대소관계가 정해져 있지 않다고 했는데, 또 그걸 못보고 코드를 실행해서 오류가 난 다음에야 알았다 ^^,,

```js
function solution(a, b) {
  let sum = 0;
  const min = Math.min(a, b);
  const max = min === a ? b : a;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}
```

## 2. 다른 풀이

```js
function solution(a, b) {
  let sum = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sum += i;
  }
  return sum;
}
```
