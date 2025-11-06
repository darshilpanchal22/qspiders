a=['apple','banana','orange','kiwii']

d={}
for i in a:
    if len(i)%2==0:
        d[i]=i[::-1]
    else:
            d[i]=len(i)
            
print(d)


# d={}
# for i in a:
#     if len[i]==5:
#         d[i]=len[i]
#     else:
#     d[i]=i[::-1]        
    
