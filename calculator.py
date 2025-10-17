def calculate(num1, num2, operation):
    """Performs the arithmetic operation."""
    if operation == '+':
        return num1 + num2
    elif operation == '-':
        return num1 - num2
    elif operation == '*':
        return num1 * num2
    elif operation == '/':
        if num2 == 0:
            return "Error: Division by zero"
        return num1 / num2
    else:
        return "Error: Invalid operator"

def run_calculator():
    """Main function to run the console calculator."""
    print("--- Python Console Calculator ---")
    print("Supported operations: +, -, *, /")
    
    try:
        # Get the first number
        num1 = float(input("Enter first number: "))
        
        # Get the operator
        operator = input("Enter operator (+, -, *, /): ")
        
        # Get the second number
        num2 = float(input("Enter second number: "))
        
    except ValueError:
        print("Invalid input. Please enter valid numbers.")
        return

    # Calculate and display the result
    result = calculate(num1, num2, operator)
    
    print(f"\nResult: {num1} {operator} {num2} = {result}")

if __name__ == "__main__":
    run_calculator()
