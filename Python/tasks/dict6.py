s='example on for loop'
words=s.split()
d={}
for i in words:
    d[i]=i[0]+i[-1]
result=' '.join(d.values())
print(result)