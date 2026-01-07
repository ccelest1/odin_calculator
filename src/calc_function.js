import { calcFactorial, calcOperations } from "./operations.js";

export class Calculator {
    constructor(current = '0', previous = null, operand = null, history = []) {
        this.currentNumber = current
        this.previousNumber = previous;
        this.operand = operand;
        this.shouldResetScreen = false;
        this.history = history;
    }

    handleDecimal() {
        if (
            this.currentNumber.includes(".")
        ) {
            return null
        }
        this.currentNumber += "."
    }

    handleNumber(num) {
        if (this.shouldResetScreen) {
            this.currentNumber = num
            this.shouldResetScreen = false
        }
        else if (
            this.currentNumber === "0"
        ) {
            this.currentNumber = num
        } else {
            this.currentNumber += num
        }
    }

    handleOperand(op) {
        // factorial
        // calc ops
        if (
            op === "!"
        ) {
            this.operand = op
            this.handleEquals()
            return
        }
        if (this.previousNumber && this.currentNumber && this.previousNumber !== this.currentNumber) {
            this.history.push(this.previousNumber)
            this.handleEquals()
        } else {
            this.previousNumber = this.currentNumber
            this.currentNumber = "0"
        }
        this.operand = op
    }

    handleEquals() {
        if (!this.operand) {
            return
        }
        this.currentNumber = Number(this.currentNumber)
        this.previousNumber = Number(this.previousNumber)
        let calculation;
        if (this.operand === "!") {
            this.history.push(
                `${this.currentNumber} ${this.operand}`
            )
            calculation = calcFactorial(
                this.currentNumber
            )
            this.history.push(
                `= ${calculation}`
            )
        } else {
            this.history.push(
                `${this.previousNumber} ${this.operand} ${this.currentNumber}`
            )
            calculation = calcOperations(
                this.previousNumber,
                this.currentNumber,
                this.operand
            )
            this.history.push(
                `= ${calculation}`
            )
        }
        this.previousNumber = calculation.toString()
        this.currentNumber = calculation.toString()
        this.shouldResetScreen = true
        this.operand = null
    }
    clear() {
        this.shouldResetScreen = false
        this.currentNumber = "0"
        this.previousNumber = null
    }
}
