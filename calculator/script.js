// script.js

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function deleteLastCharacter() {
    const display = document.getElementById('display');
    let currentText = display.innerText;
    if (currentText.length > 1) {
        display.innerText = currentText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText) || '0';
    } catch (e) {
        display.innerText = 'Error';
    }
}
