a='aPpLe#123'
d={}
for i in a:
    if ord(i) in list(range(65,91)):
        d[i]=i.swapcase()
    elif ord(i) in list(range(97,122)):
        
        d[i]=i.swapcase()
print(d) 