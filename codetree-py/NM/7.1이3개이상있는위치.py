n = int(input())

dys = [1, 0, -1, 0]
dxs = [0, 1, 0, -1]

arr = [
    list(map(int, input().split()))
    for _ in range(n)
]

def in_range(y,x):
    return y>=0 and y<n and x>=0 and x<n

res = 0
def adjacent_cnt(y,x):
    cnt = 0
    for dy, dx in zip(dys, dxs):
        ny, nx = y+dy, x+dx
        if in_range(ny,nx) and arr[ny][nx]==1:
            cnt+=1
    return cnt

# 아래 왜 안되는 건지 모르겠다. 
#    for dir_num in range(4):
#       ny, nx = y+dys[dir_num], x+dxx[dir_num] 
#       if in_range(ny,nx) and arr[ny][nx]==1:
#           cnt+=1
#   return cnt

res=0
for y in range(n):
    for x in range(n):
       if adjacent_cnt(y,x) >=3:
           res+=1

print(res)