## 1. 문제

- 상태 : 스스로 품
- 난이도 : ⭐

### **문제 설명**

새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.단, 금액이 부족하지 않으면 0을 return 하세요.

### 제한사항

- 놀이기구의 이용료 price : 1 ≤ price ≤ 2,500, price는 자연수
- 처음 가지고 있던 금액 money : 1 ≤ money ≤ 1,000,000,000, money는 자연수
- 놀이기구의 이용 횟수 count : 1 ≤ count ≤ 2,500, count는 자연수

---

### 입출력 예

| price | money | count | result |
| ----- | ----- | ----- | ------ |
| 3     | 20    | 4     | 10     |

## 2. 내 풀이

- 문제는 어려워 보이는데 굉장히 간단한 문제였다.
- reduce를 이용해서 합을 구하고 싶었는데 배열이 아니었다. Array. 어쩌구 해서 원하는 횟수만큼 반복시킬 수 있었던것 같은데 기억이 또 안났다. 😟

```jsx
function solution(price, money, count) {
  let result = 0;
  for (let i = 1; i <= count; i++) {
    result += i * price;
  }
  const sub = money - result;
  return sub < 0 ? -sub : 0;
}
```
