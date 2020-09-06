class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear()
  }
  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }
  delete() {

  }
  appendNumber(number) {
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }
  chooseOperation(operation) {

  }
  compute() {

  }
  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand
  }
}


const numbersButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-anterior]')
const currentOperandTextElement = document.querySelector('[data-atual]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numbersButtons.forEach(button => {
  button.addEventListener('click', function () {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})