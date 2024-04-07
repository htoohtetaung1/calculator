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


