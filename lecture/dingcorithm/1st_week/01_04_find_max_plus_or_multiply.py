def find_max_plus_or_multiply(array):
    # 이 부분을 채워보세요!
    result = array[0]
    for index in range(len(array)-1):
        result = max(result * array[index+1], result + array[index+1])
    return result


result = find_max_plus_or_multiply
print("정답 = 728 현재 풀이 값 =", result([0,3,5,6,1,2,4]))
print("정답 = 8820 현재 풀이 값 =", result([3,2,1,5,9,7,4]))
print("정답 = 270 현재 풀이 값 =", result([1,1,1,3,3,2,5]))