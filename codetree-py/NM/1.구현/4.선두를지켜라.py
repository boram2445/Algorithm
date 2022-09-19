#시뮬레이션2 - 배열 기록
# A와 B가 동일한 시작점에서 같은 방향으로 출발합니다. 도중에 방향을 바꾸는 경우는 없고, A, B는 각각 N번, M번에 걸쳐 주어지는 특정 속도로 특정 시간만큼 이동한다고 합니다. 선두가 몇번이 바뀌는지 찾아 출력하는 프로그램을 작성해보세요.

MAX_TIME = 1000000
n, m = tuple(map(int,input().split()))

arrA = [0] * (MAX_TIME + 1)
arrB = [0] * (MAX_TIME + 1)

time_a = 1
for _ in range(n):
    v, t = tuple(map(int,input().split()))
    for _ in range(t):
        arrA[time_a] = v + arrA[time_a-1]
        time_a +=1

time_b=1
for _ in range(m):
    v, t = tuple(map(int, input().split()))
    for _ in range(t):
        arrB[time_b] = v + arrB[time_b-1]
        time_b+=1

leader, cnt = 0, 0
for i in range(1, time_a):
    if arrA[i] > arrB[i]:
        if leader == 2:
            cnt+=1
        leader =1
    elif arrA[i] < arrB[i]:
        if leader == 1:
            cnt+=1
        leader = 2


print(cnt)