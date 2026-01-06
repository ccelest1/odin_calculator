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
    displayInput.style.display = 'flex'
    displayInput.style.alignItems = 'center'
    displayInput.style.justifyContent = 'flex-end'
    displayInput.style.paddingRight = '5px'
    displayInput.innerText = calc.currentNumber

    let numCount = 0
    while (numCount < 10) {
        for (let i = 0; i <= 3; i++) {
            let numberRow = document.createElement('div')
            numberRow.classList.add('number__row')
            numbersDiv.append(numberRow)
            for (let j = i; j <= 3; j++) {
                let numberNode = document.createElement('button')
                numberNode.innerText = `${numCount}`
                numberNode.classList.add('button__number')
                numberRow.append(numberNode)
                numCount += 1
            }
        }
    }


    let opsCount = 0
    let operations = ["*", "-", "+", "/"]
    while (opsCount < 4) {
        for (let i = 0; i < 2; i++) {
            let opsRow = document.createElement('div')
            opsRow.classList.add('ops__row')
            opsDiv.append(opsRow)
            for (let j = 0; j <= 1; j++) {
                let opsNode = document.createElement('button')
                opsNode.innerText = `${operations[opsCount]}`
                opsNode.classList.add('button__ops')
                opsRow.append(opsNode)
                opsCount += 1
            }
        }
    }

}
initialize_calc()

function userInteractions() {

}


let isTyping = false;
function calcDisplay(e) {
    displayInput.focus()
    isTyping = true

}
document.addEventListener('keydown', e => {
    const ops = ["*", "**", "-", "+", "/"]

    if (isTyping) {
        if (e.key >= '0' && e.key <= '9') {
            calc.handleNumber(e.key)
            console.log(calc)
        }
        if (e.key === ".") {
            calc.handleDecimal(e.key)
        }
        if (ops.includes(e.key)) {
            console.log(calc)
            calc.handleOperand(e.key)
        }
        displayInput.textContent = calc.currentNumber
    }
})

document.addEventListener('click', e => {
    let target = e.target
    let node = Array.from(target.classList)[1]
    if (!displayInput.contains(target)) {
        isTyping = false
    }
    switch (node) {
        case ('button--clear'):
            displayInput.textContent = '0'
            calc.clear()
            break
    }
})

// 1. handle numbers, operands, enter, clear, decimal
// 2. randomizing color of calculator div
main_controls.addEventListener('click', e => {
    let target = e.target
    let indvButton = Array.from(target.classList)[1]
    switch (indvButton) {
        case ('button--random-color-change'):
            console.log('here')
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
displayInput.addEventListener('click', (e) => calcDisplay(e))
