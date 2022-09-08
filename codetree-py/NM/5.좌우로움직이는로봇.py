#시뮬레이션2 - 배열기록
# 1차원 직선 위에서 1초에 한 칸씩 좌우로만 왔다 갔다 하는 로봇 A와 B가 있습니다. A가 움직이는 횟수 n와 B가 움직이는 횟수 m이 주어지고 각각 로봇들이 어느 방향으로 얼만큼 움직였는지가 주어졌을 때, 로봇 A와 B가 바로 직전에는 다른 위치에 있다가 그 다음 번에 같은 위치에 오게 되는 경우가 총 몇 번인지를 구하는 프로그램을 작성해봅니다. 단, 로봇 A, B는 처음에 같은 지점에서 움직이며 이는 횟수에 포함시키지 않습니다. 또한, 각 로봇이 움직임을 종료한 이후에는 같은 위치에 계속 머물러 있으며 이때 역시 다른 로봇이 움직임에 따라 두 로봇이 같은 위치에 오게될 수 있습니다. 다만, 모든 로봇이 움직인 이후의 상황은 생각하지 않습니다.
MAX_T = 1000000

n, m = tuple(map(int, input().split()))
#범위 주의
arrA = [0] * (MAX_T + 1)
arrB = [0] * (MAX_T + 1)

#A움직이기 
time_a = 1 
for _ in range(n):
    t, d = tuple(input().split())
    if d == 'R':
        for _ in range(int(t)):
            arrA[time_a] = arrA[time_a-1] + 1
            time_a+=1
    elif d == 'L':
        for _ in range(int(t)):
            arrA[time_a] = arrA[time_a-1]-1
            time_a+=1

    #아래처럼 하면 elif 문 생략 가능
    #for _ in range(int(t)):
        # arrA[time_a] = arrA[time_a-1] + (1 if d == 'R' else -1)
        # time_a+=1

#B움직이기
time_b = 1
for _ in range(m):
    t, d = tuple(input().split())
    if d == 'R':
        for _ in range(int(t)):
            arrB[time_b] = arrB[time_b-1] + 1 
            time_b+=1
    elif d == 'L':
        for _ in range(int(t)):
            arrB[time_b] = arrB[time_b-1]-1
            time_b+=1


#A와 B가 만나는데, 이전값은 만나지 않을 경우 고르기 

#예외처리 해주는 부분 완전 잘했음!!
max_time = max(time_a, time_b)
if max_time > time_a:
    for i in range(time_a,max_time):
        arrA[i] = arrA[time_a-1]

elif max_time > time_b:
    for i in range(time_b, max_time):
        arrB[i] = arrB[time_b-1]
 
cnt = 0
for i in range(1,max_time):
    if(arrA[i] == arrB[i]):
        if(arrA[i-1]!=arrB[i-1]):
            cnt+=1
        

print(cnt)