var keyMappings = {
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '0': '0',
    '.': 'dot-js',   
    'Enter': 'equals',
    '+': 'plus',    
    '-': 'minus',    
    '*': 'ast-js',     
    '/': 'divide',
    'Backspace' : 'clear-js'    
};

function keypre(event) {
    var key = event.key;
    var elementId = keyMappings[key];

    if (elementId) {
        var keyElement = document.getElementById(elementId);
        if (keyElement) {
            keyElement.classList.toggle('active');
        }
    }
}
document.addEventListener('keydown', keypre);

// Calculator logic
var operand1 = '';
var operator = '';
var operand2 = '';

function Buttonclick(value) {
    if (value >= '0' && value <= '9') {
        handleNumber(value);
    } else if (value === '.') {
        handleDecimal();
    } else if (value === 'clear') {
        clearCalculator();
    } else if (value === '=') {
        calculateResult();
    } else {
        handleOperator(value);
    }

    updateDisplay();
}

function handleNumber(value) {
    if (operator === '') {
        operand1 += value;
    } else {
        operand2 += value;
    }
}

function handleDecimal() {
    if (operator === '') {
        if (!operand1.includes('.')) {
            operand1 += '.';
        }
    } else {
        if (!operand2 || (operand2 && !operand2.includes('.'))) {
            operand2 += '.';
        }
    }
}


function handleOperator(value) {
    if (operand1 !== '') {
        operator = value;
    }
}

var backspacePressTimer; 

function startBackspacePress() {
    backspacePressTimer = setTimeout(function () {
        clearCalculator();
        updateDisplay();
    }, 700); 
}

function stopBackspacePress() {
    clearTimeout(backspacePressTimer);
}

function backspace() {
    if (operator === '' && operand1.length > 0) {
        operand1 = operand1.slice(0, -1);
    } else if (operand1.length > 0 && operator !== '' && operand2.length === 0) {
        operator = '';
    }else{
        operand2 = operand2.slice(0, -1);
    }

    updateDisplay();
}


function clearCalculator() {
    operand1 = '';
    operator = '';
    operand2 = '';
}

function calculateResult() {
    if (operand1 !== '' && operator !== '' && operand2 !== '') {
        var result = eval(operand1 + operator + operand2);
        clearCalculator();
        operand1 = result.toString();
    }
}

function updateDisplay() {
    document.getElementById('text_input').value = operand1 + operator + operand2;
}
