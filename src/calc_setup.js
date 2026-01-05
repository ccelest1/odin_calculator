import { Calculator } from "./calc_function"
const buttonInteractions = document.querySelectorAll('button')
const displayInput = document.querySelector(
    '.calculator__display--input'
)
const randomizeColor = document.querySelector(
    '.main_controls'
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
    - 1,2,3,4,5,6,7,8,9,0

- eventListener on main
    switch, case for controls, display, operations, and numbers
 */

function initialize_calc(){

}

buttonInteractions.addEventListener('click', e =>{
    let target = e.target
    console.log(target)
})
