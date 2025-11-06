# 1
# int={'V': 10, 'VI': 10, 'VII': 40, 'VIII': 20, 'IX': 70, 'X': 80, 'XI': 40, 'XII': 20}
# d={}
# for i in int.values():
#     if i in d:
#         d[i] += 1
#     else:
#         d[i] = 1
# print(d)

# 2
# D = ['red','black','yellow']
# out=[]
# for i in D:
#     out.append('c')
#     out.append(i)
# print(out)

# 3
# s="this is this a good test"
# w=s.split()
# d={}
# for i in w:
#     if i in d:
#         d[i] += 1
#     else:
#         d[i] = 1
# print(d)

# 4
# e={'Name':'Jhon','age':21,'city':'New York','Salary':8000}
# d1={}
# for i in ('age','city'):
#     d1[i]=e[i]
# print(d1)

# 5
a = "hello hii kaise ho hello hii sare"
d = {}
for i in a.split():
    if i == "hello" or i == "hii":
        if i not in d:
            d[i] = 1
        else:
            d[i] += 1
# print result
print(d)
# w=a.split()
# d={}
# for i in  ('hello','hii'):
#     if i in d:
#         d[i]+=1
#     else:
#         d[i]=1
# print(d)