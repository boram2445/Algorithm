#시뮬레이션2 - dy,dx테크닉
# - 조건만 추가하면 된다!
#     - in_range(y, x) 범위 넘지 않기
#     - arr[y][x] ≠ 0 (이미 배열에서 채워진 값이 아니게 하기)
n,m = tuple(map(int, input().split()))
arr = [
    [0] * m
    for _ in range(n)
]
y, x = 0, 0
dir_num = 0
arr[0][0] = 1
dys, dxs = [0, 1, 0, -1], [1, 0, -1, 0]

def in_range(y,x):
    return 0 <= y and y < n and 0 <= x and x < m

for i in range(2, n*m+1):
    ny, nx = y+dys[dir_num], x+dxs[dir_num]
    if not in_range(ny, nx) or arr[ny][nx]!=0:
        dir_num = (dir_num + 1) % 4
    y, x = y+dys[dir_num], x+dxs[dir_num]
    arr[y][x] = i

for y in range(n):
    for x in range(m):
        print(arr[y][x], end=' ')
    print()