function add(a,b) {
    return a + b
}
function subtract(a,b) {
    return a - b
}
function multiply(a,b) {
    return a * b
}
function divide(a,b) {
    return a / b
}

let num1 = '';
let num2 = '';
let operator = '';
let displayValue = '';
let textBox = document.querySelector(".textDisplay")
textBox.textContent = '0'
function showInTextBox(button) {
    if (textBox.textContent.includes('.')) {
        if (button.textContent == '.') {
            return
        }
    }
    if (textBox.textContent == '0') {
        if(button.textContent == '.') {
            
        }else {
            textBox.textContent = ''
        }
    }
    textBox.textContent += button.textContent
    displayValue = parseFloat(textBox.textContent);
    
}

//number button display function
let numButtons = document.querySelectorAll(".num") 
numButtons.forEach(numButton => {
    numButton.addEventListener('click',e => {
        showInTextBox(numButton)
    })
})


//back button function
let backBtn = document.querySelector('.back')
backBtn.addEventListener('click',e => {
    let currentText = textBox.textContent
    let newText = currentText.slice(0,-1)
    if(!newText[0]) {
        newText = '0';
    }
    console.log(newText)
    textBox.textContent = newText
    displayValue = parseFloat(textBox.textContent);
}
)

// clear button function
let clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click',e => {
    textBox.textContent = '0'
    num1 = ''
    num2 = ''
    operator = ''
    displayValue = parseFloat(textBox.textContent);
})

//operator buttons function
let operators = document.querySelectorAll('.operator')
operators.forEach(operatorBtn=> {
    operatorBtn.addEventListener('click',e => {
        
    })
})

//equal button function
let equalBtn = document.querySelector('.equal')
equalBtn.addEventListener('click',e => {
    if (num1 == '') {
        return;
    }
    


    
    console.log(num1)
})

function operate(num1,operator,num2) {
    
    if (num1 == '' || operator == '' || num2 == '') {
        return
    }
    console.log(`${num1} ${operator} ${num2}`)
    switch (operator) {
        case '+': return add(num1,num2);
        case '-': return subtract(num1,num2)
        case '*': return multiply(num1,num2)
        case '/': return divide(num1,num2)
    }
    
}

