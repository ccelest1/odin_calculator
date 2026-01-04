# Finishing Odin Project - Calculator

## 1 - Operations
- Calculator contains functions for basic math operators found on avg calculator:
    - `add(), subtract(), multiply(), divide()` [ ]
- Calculator Operation
    * Consists of a number, operator, other number `3+5`
    * Three variables created for each operation (display update)
        - firstNumber, operand, secondNumber
- New function `operate`: takes in operator, 2 numbers and calls above functions on numbers [ ]

## 2 - HTML
- Buttons for each digit and operator (include `=`)
    * Also include a calculator display -> fill with numbers so it looks correct [ ]
    * Add clear button [ ]
- Functions populate the display when clicking digit buttons
    * Store display content in variable [ ]

## 3 - Calculator Working
- Store first and second numbers input by user -> `operate()` when user presses (`=`)
    * Populate display [ ]
    * Operate is called -> Update display [ ]
        * Store vars, call operate function

### Ideal Behavior
- Calculator should not evaluate more than a single pair of numbers at a time [ ]
    1. Enter a number -> operator -> second number -> second operator (display reads result of initial numbers pair)
    2. Operand/equal sign -> New number -> update new result (display reads initial result then product of next operand and third number)
        * Opposite operation of prev operation then number followed by operand goes to 0 (reset)

- Round long decimals [ ]
- Account for indv pressing `=` prior to entering all numbers/operator [ ]
- Pressing clear wipes all existing data [ ]
- Display error message is user tries to divide by 0 [ ] (Online calc displayed `Nan`)
- Calculator only runs an operation when supplied by only 2 numbers and operand
    * if there are two consecutive operands, only use last operator for next operation
- Result displayed -> pressing new digit should clear result and start new calculation [ ]

## Extra Credit
- Allow users to type in float point numbers -> add a `.` button for decimal inputs and disable when there is already a decimal in the display [ ]
- Add 'backspace' button for undoing last input [ ]
- Add keyboard support [ ]
