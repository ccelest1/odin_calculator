import { calcFactorial, calcOperations } from "./operations";

export class Calculator {
    constructor(current = '0', previous = null, operand = null, history = []) {
        this.currentNumber = current
        this.previousNumber = previous;
        this.operand = operand;
        this.history = history;
        this.justCalculated = false;
        this.cleared_count = 0;
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
        if (
            this.currentNumber === "0" || (this.justCalculated && !this.operand)
        ) {
            this.currentNumber = num
            this.justCalculated = false
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
        if(!this.operand){
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
                `${this.currentNumber} ${this.operand}`
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
        if(!this.cleared_count){
            this.currentNumber = "0"
            this.cleared_count +=1
        }
        if(this.cleared_count && !this.currentNumber){
            this.currentNumber = "0"
            this.previousNumber = null
            this.history = []
            this.operand = null
            this.cleared_count = 0
        }
    }
}
