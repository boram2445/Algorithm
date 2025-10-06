## 1. 문제

- 난이도 : ⭐
- 문제상태 : 스스로 구현완!

### **문제 설명**

정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

### 제한 조건

- arr은 길이 1 이상인 배열입니다.
- 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

### 입출력 예

| arr       | return  |
| --------- | ------- |
| [4,3,2,1] | [4,3,2] |
| [10]      | [-1]    |

## 2. 내 풀이

`정답맞춤@!`

```jsx
function solution(arr) {
  let index = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      index = i;
      min = arr[i];
    }
  }
  arr.splice(index, 1);
  return arr.length === 0 ? [-1] : arr;
}
```

## 3. 다른 사람 풀이

- `Math.min(…arr)` 이렇게 하면, 해당 배열에서 가장 작은 값을 찾을 수 있겠구만!!!
- 뭔가 가독성이 떨어지지만 코드 양이 매우 줄었다!

```jsx
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr.length === 0 ? [-1] : arr;
}
```
