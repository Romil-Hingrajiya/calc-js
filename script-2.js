// alternate eval() for switch case and loop
function calculateValue(expression) {
  const operators = ["+", "-", "*", "/"];
  const tokens = expression.split(" ");

  // Helper function to perform an operation between two numbers
  const operate = (num1, operator, num2) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        if (num2 === 0) {
          throw new Error("Division by zero");
        }
        return num1 / num2;
      default:
        throw new Error("Invalid operator");
    }
  };

  let result = parseFloat(tokens[0]);

  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const operand = parseFloat(tokens[i + 1]);

    if (!operators.includes(operator) || isNaN(operand)) {
      throw new Error("Invalid expression");
    }

    result = operate(result, operator, operand);
  }

  return result;
}
