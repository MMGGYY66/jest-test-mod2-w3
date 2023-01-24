class Calculator {
  constructor(numOne, numTwo) {
    this.numOne = numOne;
    this.numTwo = numTwo;
  }

  add() {
    return this.numOne + this.numTwo;
  }

  substract() {
    return this.numOne - this.numTwo;
  }

  multiply() {
    return this.numOne * this.numTwo;
  }

  divide() {
    return this.numOne / this.numTwo;
  }
}

export default Calculator;