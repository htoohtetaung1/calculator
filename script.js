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

let num1 = 0;
let num2 = 0;
let operator;
let textBox = document.querySelector(".textDisplay")
function showInTextBox(button) {
    if (textBox.textContent.includes('.')) {
        if (button.textContent == '.') {
            return
        }
    }
    textBox.textContent += button.textContent

}

let numButtons = document.querySelectorAll(".num") 

numButtons.forEach(numButton => {
    numButton.addEventListener('click',e => {
        showInTextBox(numButton)
    })
})

let backBtn = document.querySelector('.back')
backBtn.addEventListener('click',e => {
    let currentText = textBox.textContent
    let textArray = currentText.split('')
    textArray.pop()
    let newText = textArray.join('')
    textBox.textContent = newText
}
)

let clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click',e => {
    textBox.textContent = ''
})


