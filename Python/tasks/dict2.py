a=[12,3.4,'hello',2+3j,'python','bye',False]
d={}
for i in a:
    if type(i)==str:
        d[i]=i[0]+i[-1]
print(d)
    