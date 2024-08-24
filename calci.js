document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    const display = document.getElementById('display');
    let currentValue = '';
    let previousValue = '';
    let operator = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = button.getAttribute('data-value');

            if (button.classList.contains('operator')) {
                operator = value;
                previousValue = currentValue;
                currentValue = '';
            } else if (button.classList.contains('clear')) {
                currentValue = '';
                previousValue = '';
                operator = '';
                display.textContent = '0';
            } else if (button.classList.contains('equals')) {
                if (operator) {
                    currentValue = evaluateExpression(previousValue, operator, currentValue);
                    display.textContent = currentValue;
                    operator = '';
                }
            } else {
                currentValue += value;
                display.textContent = currentValue;
            }
        });
    });

    function evaluateExpression(prev, operator, curr) {
        const a = parseFloat(prev);
        const b = parseFloat(curr);

        switch (operator) {
            case '+':
                return (a + b).toString();
            case '-':
                return (a - b).toString();
            case '*':
                return (a * b).toString();
            case '/':
                return (a / b).toString();
            default:
                return curr;
        }
    }
});
