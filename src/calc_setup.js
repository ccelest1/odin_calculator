import { Calculator } from "./calc_function.js"
const buttonInteractions = document.querySelector('.main__controls')
const displayInput = document.querySelector(
    '.calculator__display'
)
const calculatorDiv = document.querySelector(
    '.calculator'
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
    displayInput.style.textAlign = 'end'
    displayInput.style.paddingRight = '5px'
    displayInput.innerText = calc.currentNumber
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
    const ops = ["*", "**", "-", "+", "/", "!"]
    if (isTyping) {
        if (Number(e.key)) {
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

// 1. handle numbers, operands, enter, clear, decimal
// 2. randomizing color of calculator div
buttonInteractions.addEventListener('click', e => {
    let target = e.target

})

// handle typing into a div
// 1. focus -> 2. using textContent in order to fill div
// 3. only allow numbers to be entered
// 5. handling decimals
// 4. 'enter' submission
displayInput.addEventListener('click', (e) => calcDisplay(e))
