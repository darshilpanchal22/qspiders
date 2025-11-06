    #write a program to get the following output
s='abcabccabbb'
#out={'a':3,'b':5,'c':3}
d={}
for i in s:
    if i not in d:
        d[i]=1
    else:
        d[i]+=1
print(d)
