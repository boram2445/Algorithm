input = "abadabac"

def find_not_repeating_first_character(string):
    # 이 부분을 채워보세요!
    count_array = find_alphabet_occurrence(string)

    for char in string:
        char_index = ord(char) - ord('a')
        if count_array[char_index] == 1:
            return char


    return "_"


def find_alphabet_occurrence(string):
    alphabet_occurrence_array = [0] * 26

    for char in string:
        if not char.isalpha():
            continue
        array_index = ord(char) - ord('a')
        alphabet_occurrence_array[array_index] += 1

    return alphabet_occurrence_array


result = find_not_repeating_first_character
print("정답 = d 현재 풀이 값 =", result("abadabac"))
print("정답 = c 현재 풀이 값 =", result("aabbcddd"))
print("정답 =_ 현재 풀이 값 =", result("aaaaaaaa"))