#시뮬레이션 - dx, dy 테크닉
#좌표평면 위 (0, 0)에서 북쪽을 향한 상태에서 움직이는 것을 시작하려 합니다. N개의 명령에 따라 총 N번 움직이며, 명령 L이 주어지면 왼쪽으로 90도 방향 전환을, 명령 R이 주어지면 오른쪽으로 90도 방향전환을 하고, 명령 F가 주어지면 바라보고 있는 방향으로 한칸 이동하려고 합니다. 이동 이후 최종 위치를 출력하는 프로그램을 작성해보세요.
arr = list(input())

dy = [1, 0, -1, 0]
dx = [0, 1, 0, -1]
dir_num = 0
y, x= 0,0
for elem in arr:
    if elem == 'R':
        dir_num = (dir_num+1) % 4
    elif elem =='L':
        dir_num = (dir_num-1+4)%4
    elif elem == 'F':
        y, x = y+dy[dir_num], x+dx[dir_num]

#y,x로 풀기 편하면 그렇게 하고, 마지막에 x,y 를 구하라고 하면 해당 변수 그대로 출력하면 된다. 
print(x,y)