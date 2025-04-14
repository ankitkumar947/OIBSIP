let currentInput = '';
let previousInput = '';
let operation = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

function setOperation(op) {
    if (currentInput === '') return; // Prevent setting operation if no number is entered
    if (previousInput !== '') {
        calculateResult();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return; // Check if input is valid

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    document.getElementById('display').value = result;
    currentInput = result;
    previousInput = '';
    operation = '';
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = '';
    document.getElementById('display').value = '';
}