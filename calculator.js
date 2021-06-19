function sum(a, b) {
  if (!a && !b) {
    return 0;
  }
  if (!a && b) {
    return b + 0;
  }
  if (a && !b) {
    return a + 0;
  }
  return a + b;
}

function subtract(a, b) {
  if (!a && !b) {
    return 0;
  }
  if (!a && b) {
    return b - 0;
  }
  if (a && !b) {
    return a - 0;
  }
  return a - b;
}

function divide(a, b) {
  if (a && b) {
    return a / b;
  }
  if (a || b == 0) {
    throw "can't divide by 0";
  }
}

function multiply(a, b) {
  if (!a && !b) {
    return 0;
  }
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
