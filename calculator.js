class Calculator {
    constructor(num1, num2) {
        this.num1 = parseInt(num1);
        this.num2 = parseInt(num2);
    }
    addition() {
        return this.num1 + this.num2
    }

    subtraction() {
        return this.num1 - this.num2
    }

    multiplication() {
        return this.num1 * this.num2
    }

    division() {
        return this.num1 / this.num2
    }
}

let num1 = prompt("Enter first number = ")
let num2 = prompt("Enter second number = ")
let message = "Enter the operation to be performed: \n+ for addition \n- for subtraction \n* for multiplication \n\/ for division \nq to quit \n"
let answer = 0;
let operator = prompt(message)
while (operator !== 'q') {
    let calc = new Calculator(num1, num2)

    switch (operator) {
        case '+':
            answer = calc.addition()
            break
        case '-':
            answer = calc.subtraction()
            break
        case '*':
            answer = calc.multiplication()
            break
        case '/':
            answer = calc.division()
            break

    }

    alert(`${num1} ${operator} ${num2} = ${answer}`)
    console.log(`${num1} ${operator} ${num2} = ${answer}`)

    let another = prompt("Do you wish to perform another transaction? (y or yes) or any other character to quit: ")
    if (another.toLowerCase() === "yes" || another.toLowerCase() === "y") {
        num1 = prompt("Enter first number = ")
        num2 = prompt("Enter second number = ")
        operator = prompt(message)
    }
    else {
        operator = 'q'
    }

}
const thankYou = 'Thank you for using this calculator'
alert(thankYou)
console.log(thankYou);

