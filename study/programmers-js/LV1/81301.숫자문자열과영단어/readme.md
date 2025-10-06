## 1. 문제

### **문제 설명**

![https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/d31cb063-4025-4412-8cbc-6ac6909cf93e/img1.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/d31cb063-4025-4412-8cbc-6ac6909cf93e/img1.png)

네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

- 1478 → "one4seveneight"
- 234567 → "23four5six7"
- 10203 → "1zerotwozero3"

이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 `s`가 매개변수로 주어집니다. `s`가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.

| 숫자 | 영단어 |
| --- | --- |
| 0 | zero |
| 1 | one |
| 2 | two |
| 3 | three |
| 4 | four |
| 5 | five |
| 6 | six |
| 7 | seven |
| 8 | eight |
| 9 | nine |

---

### 제한사항

- 1 ≤ `s`의 길이 ≤ 50
- `s`가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
- return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 `s`로 주어집니다.

## 2. 내 풀이

- 그동안 문자열 치환은 정규 표현식으로 풀었던 것들이 많아서, 이 문제도 replace 방식을 생각해 냈다.
- 하지만, replace에서 변수를 사용하는 방법을 알지 못해서 구글링해보았다.

```jsx
function solution(s) {
    const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six','seven', 'eight', 'nine'];
    
    for(let i=0; i<nums.length;i++){
        let numRegExpAll = new RegExp(nums[i],'g');
        s = s.replace(numRegExpAll, i);
    }
    return parseInt(s);
}
```

## 3. 다른 사람 풀이

- 찾는 문자열을 기준으로 원본문자열을 split을 통해 배열로 분리해준다.
- 다시 join해주면서, 해당 숫자로 치환한다.

```jsx
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);

```

## 4. 배운점

### replace 사용시 변수 사용하는 방법 ⇒ RegExp 객체를 활용한다.

[참고 블로그](https://cookinghoil.tistory.com/95)

javascript에서 replace를 이용하여 해당하는 모든 문자열을 치환,제거하고자 할 때 정규식을 사용하여 활용하는 경우가 있다.

*replace는 원본을 수정하지 않기 때문에, 변수에 할당해 주어야 한다!!

```jsx
str = str.replace(/@/g,"");
```

위 코드는 str 문자열에서 모든 @를 제거한다.

위 @ 대신 다른 문자를 유동적으로 받고자 변수를 넣으면 제대로 동작이 안한다.

```jsx
var letter = "@"
str = str.replace(/letter/g,"");
```

위 코드는 @대신 letter을 찾아 제거한다.

이를 해결하기 위해서 `**RegExp 객체**`를 활용한다.

```jsx
let regexOne = new RegExp(pattern); // 일치하는 패턴 중 최초 등장하는 패턴 한 번만 찾음
let regexAll = new RegExp(pattern, "g"); // 모든 패턴을 찾음
let regexAllCase = new RegExp(pattern, "gi"); // 대소문자 구분 없이 모든 패턴을 찾음
```

따라서 아래와 같이 설정하면 변수를 받아서 replace를 적용 가능하다.

```jsx
var letter = "@"
var regexAllCase = new RegExp(letter, "gi")
str = str.replace(regexAllCase,"");
```

### parseInt() vs Number()

[참고 블로그](https://velog.io/@blackwidow/parseInt%EC%99%80-Number%EC%9D%98-%EC%B0%A8%EC%9D%B4)

⇒ parseInt()는 문자열로 된 부분에서 숫자(정수)만 뽑아서 변환.

⇒ Number()는 문자열 전체가 숫자일때, 소숫점까지 숫자타입으로 가져올 수 있다. (parseFloat과 동일)

*만약 숫자가 아닌 다른 문자가 들어가 있다면, parseInt는 숫자만 뽑아주지만(아닐때도 있음), Nubmer는  NaN을 반환한다. 

### split()

문자열을 원하는 문자로 끊어서 배열로 변환해준다. 

- 원하는 개수만큼 반환도 가능하다.

```jsx
const longText = 'Get to the, point';
console.log(longText.**split**(' ')); //space별로 문자를 끊어 배열로 반환
console.log(longText.split(', ', 2)); //끊어진것 중에 2개만 반환
```

### join()

배열을  문자열로 합해준다.

- 자동으로 콤마를 이용해서 합쳐주며,
- 붙이고 싶은 문자열을 지정해 줄 수 있다.

```jsx
let text = **arr.join();**
console.log(text); //'0,a,a,a,a,a' - 자동으로 콤마를 이용해서 붙인다.

text = arr.join("");
console.log(text); //'0aaaaa' - 붙이고 싶은 문자열을 지정해 줄 수 있다.
```