ch = input("Enter a character: ")

if ch.isupper():
    ch = ch.lower()
else:
    ch = ch.upper()

if ch.lower() == 'a':
    print(chr(ord(ch) + 3))  

elif ch.lower() == 'd':
    print('a' if ch.islower() else 'A')

else:
    print(ch)
