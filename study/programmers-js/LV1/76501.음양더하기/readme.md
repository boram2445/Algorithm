## 1. 문제

- 상태 : 스스로 품
- 난이도 : ⭐

### **문제 설명**

어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

---

### 제한사항

- absolutes의 길이는 1 이상 1,000 이하입니다.
  - absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
- signs의 길이는 absolutes의 길이와 같습니다.
  - `signs[i]` 가 참이면 `absolutes[i]` 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.

---

### 입출력 예

| absolutes | signs              | result |
| --------- | ------------------ | ------ |
| [4,7,12]  | [true,false,true]  | 9      |
| [1,2,3]   | [false,false,true] | 0      |

## 2. 내 풀이

- reduce를 사용해볼까 했지만, 어떻게 조건문을 처리해야 하는지 몰라서 for문을 그냥 썼다.

```jsx
function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    answer = signs[i] ? answer + absolutes[i] : answer - absolutes[i];
  }
  return answer;
}
```

## 3. 다른 사람 풀이

- 1을 곱하면 양수, -1을 곱하면 음수가 나온다는 생각! 참신하다 🙂
- reduce에 인자로 index를 사용할 수 있다는 사실을 까먹었다!

```jsx
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}
```
