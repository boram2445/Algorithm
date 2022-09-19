#완전탐색- 두자리를 정하여 완전탐색
#i와 j를 이용해 2개 요소를 선택한다. j의 범위는 i+1 부터 시작해야 한다는 것을 주의!
arr = list(input())
leng = len(arr)

cnt = 0
for i in range(leng):
    for j in range(i, leng):
        if arr[i] == '(' and arr[j] == ')':
            cnt+=1

print(cnt)