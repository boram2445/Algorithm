#시뮬레이션2 - dy,dx 테크닉
#위에것 처럼 arr 로 풀어야 하는건줄 알았는데 훼이크였다… 그냥 y,x 원래 좌표로 돌아오는건지 계산해주면 되는 문제였다

n = int(input())
mapper = {
    'E':0,
    'S':1,
    'W':2,
    'N':3,
}
dys, dxs = [0,1,0,-1], [1,0,-1,0]
y,x = 0, 0
res = 0
t = 1
for _ in range(n):
    if res:
        break
    dir_str, length = input().split()
    length = int(length)
    dir_num = mapper[dir_str]
    for _ in range(length):
        t+=1
        y, x = y+dys[dir_num], x+dxs[dir_num]
        if (y==0) and (x==0):
            res = t -1
            break

if res:
    print(res)
else:
    print(-1)