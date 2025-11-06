l=['p1.py','file2.txt','file1.py','google.com','data.txt']
d={}
for i in l:
    b=i.split('.')
    key=b[-1]
    if key not in d:
        d[key]=[b[0]]
    else:
        d[key]+=[b[0]]
        
print(d)