#시뮬레이션2 dy, dx 테크닉
# 구슬의 처음 위치와 초기 방향이 주어졌을 때, t초가 지난 이후에 해당 구슬의 위치를 구하는 프로그램을 작성해보세요.
# 알고보니 행열의 개념은 아래로 갈수록 값이 커지는거였다..

n, t = tuple(map(int, input().split()))
y, x, dir_str = input().split()
y, x = int(y)-1, int(x)-1

arr = [
    [0] * n
    for _ in range(n)
]

dys, dxs = [-1, 0, 0, 1], [0, 1, -1, 0]
mapper = {
    'U': 0,
    'R': 1,
    'L': 2,
    'D': 3,
}
dir_num = mapper[dir_str]

def in_range(y,x):
    return 0 <= y and y<n and 0 <= x and x<n

for i in range(t):
    ny, nx = y+dys[dir_num], x+dxs[dir_num]
    if in_range(ny,nx):
        y, x = ny, nx
    else:
        dir_num = 3 - dir_num
    # print(i,y,x)

print(y+1, x+1)