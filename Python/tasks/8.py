e=[12, 'programe', 4+2j, False, 'holiday']
d={}
for i in e:
    if type(i)==str:
        value=''
        for j in range(0,len(i),2):
            value=value+i[j]
            d[i]=value
print(d)