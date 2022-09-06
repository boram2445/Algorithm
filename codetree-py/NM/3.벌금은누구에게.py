#시뮬레이션2 - 배열기록
# 학생이 N명 있습니다. 각 학생은 1번부터 N번까지 번호가 붙여져 있으며, 만약 한 학생이 K번 이상 벌칙을 받게 되면 벌금을 내야 합니다. M번에 걸쳐 벌칙에 걸린 학생의 번호가 순서대로 주어질때, 최초로 벌금을 내게 되는 학생이 누구인지를 알아내는 프로그램을 작성해보세요.
n, m, k = tuple(map(int, input().split()))
arr = [0] * (n+2)

res = -1
for _ in range(m):
    num = int(input())
    arr[num]+=1
    if arr[num] == k:
        res= num
        break

if (res > 0):
    print(res)
else:
    print(-1) 