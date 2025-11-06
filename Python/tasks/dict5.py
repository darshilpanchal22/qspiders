p=['amazon.com','jiocinema.com','file1.py','basic.html']
d={}
for i in p:
    z=i.split('.')
    key=z[1]
    if key not in d:
        d[key]=1
    else:
        d[key]+=1
        
print(d)
    
