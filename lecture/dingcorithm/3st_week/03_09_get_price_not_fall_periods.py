prices = [1, 2, 3, 2, 3]


def get_price_not_fall_periods(prices):
    # 이 부분을 채워주세요!
    n = len(prices)
    result = [0] * n
    for i in range(n):
        now = prices[i]
        count = 0
        for j in range(i+1, n):
            if  now <= prices[j]:
                count+=1
            else:
                count+=1
                break
        result[i] = count

    return result


print(get_price_not_fall_periods(prices))

print("정답 = [4, 3, 1, 1, 0] / 현재 풀이 값 = ", get_price_not_fall_periods(prices))
print("정답 = [6, 2, 1, 3, 2, 1, 0] / 현재 풀이 값 = ", get_price_not_fall_periods([3, 9, 9, 3, 5, 7, 2]))
print("정답 = [6, 1, 4, 3, 1, 1, 0] / 현재 풀이 값 = ", get_price_not_fall_periods([1, 5, 3, 6, 7, 6, 5]))