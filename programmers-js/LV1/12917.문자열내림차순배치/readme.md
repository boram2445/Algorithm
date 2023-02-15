## 1. 문제

- 상태 : 스스로 품
- 난이도 : ⭐

### **문제 설명**

문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

### 제한 사항

- str은 길이 1 이상인 문자열입니다.

### 입출력 예

| s         | return    |
| --------- | --------- |
| "Zbcdefg" | "gfedcbZ" |

## 2. 내 풀이

- 아직 sort 가 헷갈렸다.
  - 배열에서 가능한것.
- reverse로 뒤집지 말고, sort로 모두 처리해주는게 더 효율적이지 않을까 하는 생각이 들었는데, 숫자가 아닌 문자에서 어떻게 뒤집는지 기억이 나지 않았다.

```jsx
function solution(s) {
  var answer = s.split("").sort().reverse().join("");
  return answer;
}
```

## 3. 오늘 배운 것

- `**arr.sort([compareFunction])**` 함수
  - compareFunction이 생략되면, 배열의 element들은 문자열로 취급되어, 유니코드 값 순서대로 정렬된다.
  - comparFunction은 a,b두개의 element를 파라미터로 입력받는다.
    - **반환 값 < 0 : a가 b보다 앞에 있어야 한다.**
    - **반환 값 = 0 : a와 b의 순서를 바꾸지 않는다.**
    - **반환 값 > 0 : b가 a보다 앞에 있어야 한다.**

```jsx
const numbers=[0,5,4,1,2];
numbers.sort((a,b)=> { //오름차순
	if(a>b) {
    	return 1; //a가 뒤로
    } else if(a<b) {
    	return -1; //a가 앞으로
    } else {
    	return 0;
    }
//결과 0,1,2,4,5
```

```jsx
//위의 함수를 단순화 한 것이다.
arr.sort((a, b) => a - b);
```
