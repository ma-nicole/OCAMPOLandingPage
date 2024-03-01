document.addEventListener('DOMContentLoaded', function() {
    const screen = document.querySelector('.screen');
    let currentValue = '';
    let previousValue = '';
    let operation = null;

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            let btnValue = this.textContent;

            if (btnValue >= '0' && btnValue <= '9') {
                currentValue += btnValue;
                updateScreen();
            } else if (btnValue === 'C') {
                clearscreen();
            } else if (btnValue === '←') {
                backspace();
            } else if (btnValue === '=') {
                equals();
            } else if (btnValue === '.') {
                decimal();
            } else {
                oprtr(btnValue);
            }
        });
    });

    function calculate(num1 , num2, operator) {
        num1 = parseFloat(num1 );
        num2 = parseFloat(num2);
        if (operator === '÷') return num1  / num2;
        if (operator === '+') return num1 + num2;
        if (operator === '×') return num1  * num2;
        if (operator === '-') return num1  - num2;
    }

    function updateScreen() {
        screen.textContent = currentValue;
    }

    function clearscreen() {
        currentValue = '';
        previousValue = '';
        operation = null;
        updateScreen();
    }

    function backspace() {
        currentValue = currentValue.slice(0, -1);
        updateScreen();
    }

    function oprtr(operator) {
        if (operation !== null) {
            equals();
        }
        previousValue = currentValue;
        operation = operator;
        currentValue = '';
        
    }

    function equals() {
        if (operation && previousValue && currentValue) {
            currentValue = calculate(previousValue, currentValue, operation);
            operation = null;
            previousValue = '';
            updateScreen();
        }
    }

    function decimal() {
        if (!currentValue.includes('.')) {
            currentValue += '.';
            updateScreen();
        }
    }


});

