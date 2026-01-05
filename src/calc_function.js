import { calcFactorial, calcOperations } from "./operations";

export class Calculator {
    constructor(current = '0', previous = null, operand = null, history = []) {
        this.currentNumber = current
        this.previousNumber = previous;
        this.operand = operand;
        this.history = history;
        this.justCalculated = false;
        this.clearedCount = 0;
    }

    handleDecimal() {
        this.clearedCount = 0
        if (
            this.currentNumber.includes(".")
        ) {
            return null
        }
        this.currentNumber += "."
    }

    handleNumber(num) {
        this.clearedCount = 0
        if (
            this.currentNumber === "0"
        ) {
            if (this.justCalculated && !this.operand) {
                this.currentNumber = num
                this.justCalculated = false
            }
            if (this.operand === "-") {
                this.currentNumber = -num
            }

        } else {
            this.currentNumber += num
        }
    }

    handleOperand(op) {
        if (
            op === "!"
        ) {
            if (
                this.previousNumber
            ) {
                this.history.push(this.previousNumber)
                this.currentNumber = this.previousNumber
            }
            this.operand = op
            this.handleEquals()
        } else {
            if (
                this.operand
            ) {
                if (this.operand === "-" && !this.previousNumber && this.currentNumber) {
                    this.currentNumber = -this.currentNumber
                }
                if (this.previousNumber && this.currentNumber) {
                    this.history.push(this.previousNumber)
                    this.handleEquals()
                }
                this.operand = op
                this.currentNumber = "0"
            } else {
                this.previousNumber = this.currentNumber
                this.currentNumber = "0"
                this.operand = op
            }
        }
    }

    handleEquals() {
        let calcOpsArray = [
            "+", "-", "/", "*", "**"
        ]
        if (!this.operand) {
            return
        }
        let calculation = "0";
        if (calcOpsArray.includes(this.operand)) {
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
        } else {
            this.history.push(
                `${this.currentNumber}${this.operand}`
            )
            calculation = calcFactorial(
                this.currentNumber
            )
            this.history.push(
                `= ${calculation}`
            )
        }
        this.previousNumber = calculation.toString()
        this.currentNumber = this.previousNumber
        this.justCalculated = true
        this.operand = null
    }
    clear() {
        if (!this.clearedCount && this.currentNumber !== "0") {
            this.currentNumber = "0"
            this.clearedCount += 1
        }
        if (this.currentNumber === "0") {
            this.clearedCount += 1
        }
        if (this.clearedCount && this.currentNumber === "0") {
            this.currentNumber = "0"
            this.previousNumber = null
            this.history = []
            this.operand = null
            this.clearedCount = 0
        }
    }
}
