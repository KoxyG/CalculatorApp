class Calculator {
     

  add(num1, num2) {
    if (num1 == 0) {
      return num2;
    }
    if (num2 == 0) {
      return num1;
    }
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return 'INVALID CREDENTIALS';
    }
     return num1 + num2;
  }
  subtract(num1, num2) {
     if (num1 == 0) {
       return num2;
     }
     if (num2 == 0) {
       return num1;
     }
     if (typeof num1 !== 'number' || typeof num2 !== 'number') {
       return 'INVALID CREDENTIALS';
     }
     return num1 - num2;
  }
  multiply(num1, num2) {
     if (num1 == 0 || num2 == 0) {
       return 0;
     }
     if (typeof num1 !== 'number' || typeof num2 !== 'number') {
       return 'INVALID CREDENTIALS';
     }
     return num1 * num2;
  }
  divide(num1, num2) {
     if (num1 == 0 || num2 == 0) {
          return 0;
        }
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
          return 'INVALID CREDENTIALS';
        }
        return num1 / num2;
  }
}

export default Calculator;
