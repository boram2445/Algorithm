# 완전탐색 - 자리수로 완전탐색

import sys
# 입력 받기
n = int(input())
arr = [
    list(map(int, input().split()))
    for _ in range(n)
]

INT_MAX = sys.maxsize
ans = INT_MAX
# 건너띌 부분 선택
# for i in range(1, n-1):
#     p = 0
#     nextP = 0
#     res = 0
#     for _ in range(n-2):
#         y = arr[p][0]
#         x = arr[p][1]
#         if p+1 == i:
#             nextP = p+2
#         else:
#             nextP = p+1
#         ny = arr[nextP][0]
#         nx = arr[nextP][1]
#         res += abs(ny-y) + abs(nx-x)
#         p = nextP
#     ans = min(ans, res)

for i in range(1, n-1):
    prevP = 0
    res = 0
    for j in range(1, n-1):
        if j == i:
            continue
        res += abs(arr[prevP][0]-arr[j][0]) + abs(arr[prevP][1]-arr[j][1])
        prevP = j

    ans = min(ans, res)
print(ans)
