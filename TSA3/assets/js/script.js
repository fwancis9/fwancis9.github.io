document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');

    let shouldResetDisplay = false;

    function clearDisplay() {
        display.textContent = '0';
        shouldResetDisplay = false;
    }

    function applyDelete() {
        if (display.textContent.length > 1) {
            display.textContent = display.textContent.slice(0, -1);
        } else {
            display.textContent = '0';
        }
    }

    function appendNumber(number) {
        if (shouldResetDisplay || display.textContent === '0') {
            display.textContent = number;
            shouldResetDisplay = false;
        } else {
            display.textContent += number;
        }
    }

    function appendDecimal() {
        const lastChar = display.textContent[display.textContent.length - 1];
        
        if (['+', '-', '*', '/'].includes(lastChar)) {
            display.textContent += '0.';
        } else if (lastChar !== '.') {
            display.textContent += '.';
        }
        
        shouldResetDisplay = false;
    }

    function setOperator(operator) {
        const lastChar = display.textContent[display.textContent.length - 1];
        if (['+', '-', '*', '/'].includes(lastChar)) {
            display.textContent = display.textContent.slice(0, -1) + operator;
            return;
        }

        display.textContent += operator;
        shouldResetDisplay = false;
    }

    function clearActiveButton() {
        buttons.forEach(button => {
            if (button.classList.contains('active')) {
                button.classList.remove('active');
            }
        });
    }

    function calculate() {
        const lastChar = display.textContent[display.textContent.length - 1];
        if (shouldResetDisplay || ['.', '+', '-', '*', '/'].includes(lastChar)) return;
        
        const displayText = display.textContent;
        let result = 0;
        let numbers = displayText.split(/[+\-*/]/);
        let operators = displayText.split('').filter(char => ['+', '-', '*', '/'].includes(char));
        
        numbers = numbers.map(num => parseFloat(num));
        result = numbers[0];
        
        for (let i = 0; i < operators.length; i++) {
            switch (operators[i]) {
                case '+':
                    result += numbers[i + 1];
                    break;
                case '-':
                    result -= numbers[i + 1];
                    break;
                case '*':
                    result *= numbers[i + 1];
                    break;
                case '/':
                    result /= numbers[i + 1];
                    break;
            }
        }
        
        display.textContent = result.toString();
        shouldResetDisplay = true;
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const action = button.getAttribute('data-action');
            const value = button.textContent;

            switch (action) {
                case 'clear':
                    clearDisplay();
                    break;
                case 'delete':
                    applyDelete();
                    break;
                case 'number':
                    appendNumber(value);
                    break;
                case 'decimal':
                    appendDecimal();
                    break;
                case 'operator':
                    setOperator(button.getAttribute('data-operator'));
                    break;
                case 'calculate':
                    calculate();
                    break;
                default:
                    break;
            }

            clearActiveButton();
            button.classList.add('active');
        });
    });

    document.body.addEventListener('click', (event) => {
        if (!event.target.classList.contains('btn')) {
            clearActiveButton();
        }
    });
});