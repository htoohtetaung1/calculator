let operator = ''
let preValue = ''
let currValue = ''

let clear = document.querySelector(".clear")
let back = document.querySelector(".back")

let numbers = document.querySelectorAll(".num")
let operators = document.querySelectorAll(".operator")

let decimal = document.querySelector(".point")
let equal = document.querySelector(".equal")
let prevDisplay = document.querySelector(".prevDisplay")
let currDisplay = document.querySelector(".currDisplay")

numbers.forEach(number => {
    number.addEventListener("click",(e) => {
        handleNumber((e.target.textContent))
        currDisplay.textContent = currValue
    })
})

operators.forEach((op) => {
    op.addEventListener("click",(e) => {
        handleOperator((e.target.textContent))
        prevDisplay.textContent = preValue + " " + operator
        currDisplay.textContent = currValue
    })
})

clear.addEventListener("click",(e) => {
    preValue = ''
    currValue = ''
    operator = ''
    prevDisplay.textContent = currValue
    currDisplay.textContent = currValue
})

equal.addEventListener("click",(e)=> {
    if (preValue != '' && currValue != '') {
        calculate();
        prevDisplay.textContent = '';
        currDisplay.textContent = preValue;
        if (preValue == Infinity) {
            currDisplay.textContent = "Cheeky Bastard"
        }
    }
})

decimal.addEventListener('click',(e) => {
    addDecimal();
})

back.addEventListener('click',(e) => {
    currValue = currValue.slice(0,-1)
    currDisplay.textContent = currValue
})

function handleNumber(num) {
    if(currValue.length <= 10) {
        currValue += num
    }
}

function handleOperator(op) {
    operator = op;
    preValue = currValue;
    currValue = ''
}

function calculate() {
    preValue = Number(preValue)
    currValue = Number(currValue)
    console.log(`${preValue} ${operator} ${currValue}`)
    switch (operator) {
        case '+':
            preValue += currValue;
            break;
        case '-':
            preValue -= currValue;
            break;
        case '*':
            preValue *= currValue;
            break;
        case '/':
            preValue /= currValue;
            break;
    } 
    preValue = roundNumber(preValue)
    console.log(preValue)
    preValue = preValue.toString();
    currValue = preValue;
}

function roundNumber(num) {
    return Math.round(num * 1000) / 1000;
}

function addDecimal() {
    if (!currValue.includes(".")) {
        currValue += '.'
    }
}


