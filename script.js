//add value to display
function addToDisplay(amountValue) {
  document.getElementById("display").value += amountValue;
  // console.log(addToDisplay.value);
  document.getElementById("display").classList.add("text-orange-500");
}

//clear display
function clearDisplay() {
  document.getElementById("display").value = "";
}

//remove last character
function removeLastCharacter() {
  const currentDisplay = document.getElementById("display").value;
  document.getElementById("display").value = currentDisplay.slice(0, -1);
}

// Function to calculate = the result and display it
function calculateValue() {
  const storeDisplayVlaue = document.getElementById("display").value;
  try {
    const returnValue = eval(storeDisplayVlaue); // eval() returns completation of value (as a string) and store it as output(result)
    document.getElementById("display").value = returnValue;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

// ^2 sqrt of given amount
function calculateSquareRoot() {
  const displayValue = parseFloat(document.getElementById("display").value);
  if (!isNaN(displayValue)) {
    const result = Math.floor(Math.sqrt(displayValue));
    document.getElementById("display").value = result;
  }
}
// power of ^3 or cube a value
function calculateCube() {
  const displayValue = parseFloat(document.getElementById("display").value);
  if (!isNaN(displayValue)) {
    const result = Math.pow(displayValue, 3);
    document.getElementById("display").value = result;
  }
}
//modulus or reminder of two number
function calculateModulus() {
  const displayValue = document.getElementById("display").value;
  const parts = displayValue.split("%");

  if (parts.length === 2) {
    const num1 = parseFloat(parts[0]);
    const num2 = parseFloat(parts[1]);

    if (!isNaN(num1) && !isNaN(num2)) {
      const result = num1 % num2;
      document.getElementById("display").value = result;
    }
  }
}
