#시뮬레이션2 - 연속되는 수
#N개의 숫자들이 주어졌을 때, 연속하여 동일한 숫자가 나오는 횟수 중 최대를 구하는 프로그램을 작성해보세요.

n = int(input())
arr = [ 
    int(input())
    for _ in range(n)
]

cnt, max_cnt = 0, 0
for i in range(n):
    if i == 0 or arr[i-1]!=arr[i]:
        cnt=1
    else:
        cnt+=1
    if max_cnt < cnt:
        max_cnt = cnt
print(max_cnt)