## 1. 문제

- 난이도 : ⭐
- 문제 상태 : 스스로 구현완!

### **문제 설명**

array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

### 제한사항

- arr은 자연수를 담은 배열입니다.
- 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
- divisor는 자연수입니다.
- array는 길이 1 이상인 배열입니다.

### 입출력 예

| arr           | divisor | return        |
| ------------- | ------- | ------------- |
| [5, 9, 7, 10] | 5       | [5, 10]       |
| [2, 36, 1, 3] | 1       | [1, 2, 3, 36] |
| [3,2,6]       | 10      | [-1]          |

## 2. 내 풀이

`정답`!

- 자료구조를 요새 공부하고 있어서 그런지, sort를 이용하는게 효율적인가 생각이 들었지만, 이게 최선의 코드였던것 같다

```jsx
function solution(arr, divisor) {
  const divArr = arr.filter((num) => num % divisor === 0);
  return divArr.length === 0 ? [-1] : divArr.sort((a, b) => a - b);
}
```
