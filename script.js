
let display = document.getElementById('display_text')
console.log(display)

function toDisplay(input) {
    display.value += input
}

function calculate() {
    display.value = eval(display.value)
}

function clearDisplay() {
    display.value = ''
}