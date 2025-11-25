#wap to replace blank space with hyphen in a string

#wap to remove duplicate from the string
# a=[12,67,34,12,78,90,34,9] 

# input='PyTHon2@&'78
# charactor=6
# digit=3
# special charactor=2

# get the following output
# a["Apple","Banana","Cherry", "Dates", "Orange","Ice apple"]
# output={'Apple':"A",'Banana':="B",'Cherry':="C",'Dates':="D",'Orange':="O",'Ice apple':="I"}

# get the  following output
# a=[]"Ananya","Rohit","Sneha","Aarav","Merra"]
# b=[85.72,90,67,88]
#  find average marks , then create a dictionary '{name: "Above Avg" or "Below avg"}

# wap to find the longest word from the given sentence
# w='Python is easy to learn and undestand'

# wap  to check whether the given number is perfect or not 

# .s="We are living in ahmedabad"
# output={'We':2, 'are':3 'living':6 , 'in':2, 'Amedabad':dabademhA}

# create a function to extract only vowels from the string

#  wap TO PRINT prime numbers upto n




#wap to remove duplicate from the string
a=[12, 67, 34, 12, 78, 90, 34, 9]
unique = []                                 
for item in a:
    if item not in unique:
        unique.append(item)
print(unique)


 
#  Python program to replace spaces with hyphens
text = "This is text"
result = text.replace(" ", "-")
print(result)

# wap to find the longest word from the given sentence
w = 'Python is easy to learn and understand'
words = w.split()
longest_word = max(words, key=len)
print("The longest word is:", longest_word)
         
# create a function to extract only vowels from the string
def extract_vowels(text):
    vowels = 'aeiouAEIOU'
    result = ''
    for char in text:
        if char in vowels:
            result += char
    return result


input_str = "python"
print("Vowels:", extract_vowels(input_str))
