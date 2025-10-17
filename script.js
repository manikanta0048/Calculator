document.addEventListener('DOMContentLoaded', () => {
    // Get the display element
    const display = document.getElementById('display');
    // Get all calculator buttons
    const buttons = document.querySelectorAll('.btn');

    let currentInput = '0';
    let storedValue = null;
    let operator = null;
    let waitForNewInput = false;

    // Function to update the display
    const updateDisplay = () => {
        // Limit display to a reasonable length
        display.textContent = currentInput.substring(0, 15);
    };

    // Function to handle the calculation
    const calculate = (val1, val2, op) => {
        val1 = parseFloat(val1);
        val2 = parseFloat(val2);

        if (op === '+') return val1 + val2;
        if (op === '-') return val1 - val2;
        if (op === '*') return val1 * val2;
        if (op === '/') return val2 === 0 ? 'Error' : val1 / val2;
        if (op === '%') return val1 / 100 * val2; // Not standard, but simple way to handle percentage with a number
        return val2;
    };

    // Main event listener loop for all buttons
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.dataset.value;

            // Handle Number and Decimal Input
            if (e.target.classList.contains('number')) {
                if (waitForNewInput) {
                    currentInput = (value === '.') ? '0.' : value;
                    waitForNewInput = false;
                } else {
                    if (value === '.') {
                        if (!currentInput.includes('.')) {
                            currentInput += '.';
                        }
                    } else {
                        // Prevent leading zero unless input is a decimal
                        currentInput = (currentInput === '0' && value !== '.') ? value : currentInput + value;
                    }
                }
            } 
            
            // Handle Operator Input
            else if (e.target.classList.contains('operator') || value === '=') {
                
                // Clear (C) button
                if (value === 'C') {
                    currentInput = '0';
                    storedValue = null;
                    operator = null;
                    waitForNewInput = false;
                    updateDisplay();
                    return;
                }
                
                // Negate (±) button
                if (value === '±') {
                    currentInput = (parseFloat(currentInput) * -1).toString();
                } 
                
                // Equals (=) or sequential operator
                else {
                    const inputValue = parseFloat(currentInput);

                    if (storedValue === null) {
                        storedValue = inputValue;
                    } else if (!waitForNewInput) {
                        // Perform calculation with the previous operator
                        const result = calculate(storedValue, inputValue, operator);
                        currentInput = result.toString();
                        storedValue = result;
                    }

                    // Set up for the next operation
                    waitForNewInput = true;
                    if (value !== '=') {
                        operator = value; // Store the new operator
                    }
                }
            }

            updateDisplay();
        });
    });

    // Initial display update
    updateDisplay();
});
