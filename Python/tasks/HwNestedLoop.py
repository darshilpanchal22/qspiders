e=[12,'programe',4+2j,False,'holiday']
d={}
for i in e:
  if type(i)==str:
    t=""
    for j in range(0,len(i),2):
      t+=i[j]
      d[i]=t
print(d)