#자리수 단위로 탐색 - 원모양으로 되어있는 방
import sys
INT_MAX = sys.maxsize

#입력 값
n = int(input())
arr = [int(input()) for _ in range(n)]
ans = INT_MAX
for i in range(n):
    res = 0
    now = (i+1)%n
    for j in range(1,n):
        res+=arr[now]*j
        now=(now+1)%n
    ans = min(ans, res)

print(ans)