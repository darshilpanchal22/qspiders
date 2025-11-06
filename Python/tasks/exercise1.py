# Calculator function definition
def calculator():
    # Prompt for user input
    a = float(input("Enter the first number: "))
    b = float(input("Enter the second number: "))
    # Define calculate() function to perform different operations based on user input
    def calculate():
        operation = input('''
Please type in the math operation you would like to complete:
+ for addition
- for subtraction
* for multiplication
/ for division
''')
        if operation == '+':
            print('{} + {} = '.format(a, b))
            print(a + b)
        elif operation == '-':
            print('{} - {} = '.format(a, b))
            print(a - b)
        elif operation == '*':
            print('{} * {} = '.format(a, b))
            print(a * b)
        elif operation == '/':
            print('{} / {} = '.format(a, b))
            print(a / b)
        else:
            print('You have not typed a valid operator, please run the program again.')
    # Call calculate() function
    calculate()

# Call calculator() function
calculator()
