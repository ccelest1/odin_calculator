function calcOperations(num1, num2, method) {
    let numbers = [Number(num1), Number(num2)]
    switch (method) {
        case ("+"):
            return numbers.reduce((sum, elem) => {
                return sum + elem
            }, 0)
        case ("-"):
            return numbers.reduce((sum, elem) => {
                return sum - elem
            })
        case ("/"):
            if (num2 === 0) {
                return null
            }
            return numbers.reduce((sum, elem) => {
                return sum / elem
            })
        case ("*"):
            return numbers.reduce((sum, elem) => {
                return sum * elem
            }, 1)
        case ("**"):
            return numbers.reduce((sum, elem) => {
                return sum ** elem
            })
    }
}

function calcFactorial(num) {
    function returnCalc(current, past) {
        if (past === 0) {
            return current
        }

        return returnCalc(current * past, past - 1)
    }
    return returnCalc(num, num-1)
}

const add_test = JSON.stringify(calcOperations(
    1, 2, "+"
)) == 3
const subtract_test = JSON.stringify(calcOperations(
    10, 1, "-"
)) == 9
const division_test = JSON.stringify(calcOperations(
    4, 2, "/"
)) == 2
const multiply_test = JSON.stringify(calcOperations(
    3, 2, "*"
)) == 6
const power_test = JSON.stringify(calcOperations(
    4, 2, "**"
)) == 16
const factorial_test = JSON.stringify(calcFactorial(
    6
)) == 720

const tests = [
    add_test,
    subtract_test,
    division_test,
    multiply_test,
    power_test,
    factorial_test
]
for (let test of tests) {
    console.assert(test)
}

export {
    calcOperations,
    calcFactorial
};
