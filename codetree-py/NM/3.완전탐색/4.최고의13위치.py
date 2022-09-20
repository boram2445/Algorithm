#완전탐색 - 격자 위에서의 가장 좋은 위치
n = int(input())
arr = [
    list(map(int, input().split()))
    for _ in range(n)
]

max_val = 0
for y in range(n):
    for x in range(n-2):
       max_val = max(max_val, arr[y][x]+arr[y][x+1]+arr[y][x+2])

print(max_val) 