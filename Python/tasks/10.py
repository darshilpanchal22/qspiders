def longest_word(a):
    s=a.split()
    max=len(s[0])
    word=''
    for i in s:
        if len(i)>max:
            max=len(i)
            word=i
    return word
print(longest_word('python is easy tolearn'))