## 1. 문제

- 상태 : 답을 봄
- 난이도 : ⭐⭐

### **문제 설명**

문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

### 제한 조건

- strings는 길이 1 이상, 50이하인 배열입니다.
- strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
- strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
- 모든 strings의 원소의 길이는 n보다 큽니다.
- 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

### 입출력 예

| strings                 | n   | return                  |
| ----------------------- | --- | ----------------------- |
| ["sun", "bed", "car"]   | 1   | ["car", "bed", "sun"]   |
| ["abce", "abcd", "cdx"] | 2   | ["abcd", "abce", "cdx"] |

## 2. 내 풀이

- 접근은 좋았으나, 아직 sort 메서드 사용법이 능숙하지 않았다.

```jsx
function solution(strings, n) {
  strings.sort((a, b) => {
    if (a.charCodeAt(n) < b.charCodeAt(n) || a < b) return -1;
    if (a === b) return 0;
    else return 1;
  });
  console.log(strings);
  return strings;
}
```

## 3. 다른 사람 풀이

- 조건이 2가지 이다. n번째 자리수 오름차순 / 전체 오름차순
  - a[n] < b[n] 이라면 그대로 이니까 리턴 -1
  - a[n] > b[n] 이라면 앞뒤 바꾸어야 하니까 return 1
  ***
  - 위 조건이 모두 만족하지 않는 경우 a > b인지 여부를 한번 더 따져준다

```jsx
function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] < b[n]) return -1;
    else if (a[n] > b[n]) return 1;
    else return a > b ? 1 : -1;
  });
  return strings;
}
```
