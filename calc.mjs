function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  if (num2 === undefined || num2 === null) {
    return "Please provide both numbers.";
  }

  if (num2 === 0) {
    return "It's not possible to divide by 0!";
  }

  return num1 / num2;
}

const sayHello = (name) => {
  return name;
};

const welcome = (name) => {
  return name;
};

export { add, subtract, multiply, division, sayHello, welcome };