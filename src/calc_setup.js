import { Calculator } from "./calc_function.js"
const main_controls = document.querySelector('.main__controls')
const displayInput = document.querySelector(
    '.calculator__display'
)
const calculatorDiv = document.querySelector(
    '.calculator'
)
const numbersDiv = document.querySelector(
    '.calculator__numbers'
)

const opsDiv = document.querySelector(
    '.calculator__operations'
)

const calc = new Calculator()

/*
 - (1) calculate__display
    * set up display box containing an input back
        - scroll window that is also an input
        - able to enter or press = for submission
        -
- (2) calculator__operations
    * 8 buttons
   - , **, *, /, +, !
   - clear button
   - enter button
- (3) calculator__numbers
    * 10 buttons
    - 1,2,3,4,5,6,7,8,9,0, .

- eventListener on main
    switch, case for controls, display, operations, and numbers
 */

//

function initialize_calc() {
    // Create number buttons (0-9)
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    const rows = [
        [7, 8, 9],
        [4, 5, 6],
        [1, 2, 3],
        [0, '.']
    ]

    rows.forEach(row => {
        let numberRow = document.createElement('div')
        numberRow.classList.add('number__row')
        row.forEach(num => {
            let numberNode = document.createElement('button')
            numberNode.innerText = num
            numberNode.classList.add('button__number')
            numberRow.appendChild(numberNode)
        })
        numbersDiv.appendChild(numberRow)
    })
}


let opsCount = 0
let operations = [
    ["*", "-"], ["+", "/"]
]
operations.forEach(row => {
    let opsRow = document.createElement('div')
    opsRow.classList.add('ops__row')
    row.forEach(op => {
        let opsNode = document.createElement('button')
        opsNode.innerText = op
        opsNode.classList.add('button__ops')
        opsRow.appendChild(opsNode)
    })
    opsDiv.appendChild(opsRow)
})
let equal_button = document.createElement('button')
equal_button.innerText = "="
equal_button.classList.add('button__equal__ops')
opsDiv.appendChild(equal_button)

initialize_calc()

let isTyping = true;
const ops = ["*", "**", "-", "+", "/"]

document.addEventListener('keydown', e => {
    isTyping = true
    if (isTyping) {
        console.log(e.key)
        if (e.key >= '0' && e.key <= '9') {
            calc.handleNumber(e.key)
        }
        if (e.key === ".") {
            calc.handleDecimal(e.key)
        }
        if (ops.includes(e.key)) {
            console.log(e.key)
            calc.handleOperand(e.key)
        }
        if (e.key === "=") {
            calc.handleEquals()
        }
        displayInput.textContent = calc.currentNumber
        if (e.key === 'Backspace') {
            calc.handleDelete()
            displayInput.textContent = calc.currentNumber
        }

    }
})

calculatorDiv.addEventListener('click', e => {
    let target = e.target
    let node = Array.from(target.classList)[1]
    isTyping = true
    switch (node) {
        case ('button--clear'):
            displayInput.textContent = '0'
            isTyping = false
            calc.clear()
            break
        default:
            handleButtons(e)
    }
})

function randomizeCalcColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString()
    calculatorDiv.style.backgroundColor = '#' + randomColor
}

// 1. get value of button clicked on
// 2. append to the display via .handleNumber()
function handleButtons(e) {
    let target = e.target
    let content = target.textContent
    if (
        content >= 0 && content <= 9
    ) {
        calc.handleNumber(content)
    }
    if (
        ops.includes(content)
    ) {
        calc.handleOperand(content)
    }
    if (
        content === "="
    ) {
        calc.handleEquals()
    }
    if (
        content === "."
    ) {
        calc.handleDecimal()
    }
    displayInput.textContent = calc.currentNumber
}

// 1. handle numbers, operands, enter, clear, decimal
// 2. randomizing color of calculator div
main_controls.addEventListener('click', e => {
    let target = e.target
    let indvButton = Array.from(target.classList)[1]
    switch (indvButton) {
        case ('button--random-color-change'):
            randomizeCalcColor()
            break
        default:
            return
    }
})

// handle typing into a div
// 1. focus -> 2. using textContent in order to fill div
// 3. only allow numbers to be entered
// 5. handling decimals
// 4. 'enter' submission
displayInput.addEventListener('click', () => {
    displayInput.focus()
})
