// Create a div element with the class "calculator"
const calculator = document.createElement("div");
calculator.className = "calculator";

// Create a div inside calculator with the class "output"
const output = document.createElement("div");
output.className = "output";

// Create two divs inside output with the class "previous-operand" and "current-operand"
const previousOperand = document.createElement("div");
previousOperand.className = "previous-operand";
previousOperand.setAttribute("data-previous", "");

const currentOperand = document.createElement("div");
currentOperand.className = "current-operand";
currentOperand.setAttribute("data-current", "");

// Append the "previous-operand" and "current-operand" divs to the "output" div
output.appendChild(previousOperand);
output.appendChild(currentOperand);

// Append the "output" div to the "calculator" div
calculator.appendChild(output);


// Create and append buttons to the "calculator" div with their respective data- attributes
const buttonLabels = [
    { label: "AC", dataAttr: "data-all-clear" },
    { label: "Del", dataAttr: "data-delete" },
    { label: "÷", dataAttr: "data-operation" },
    { label: "1", dataAttr: "data-number" },
    { label: "2", dataAttr: "data-number" },
    { label: "3", dataAttr: "data-number" },
    { label: "*", dataAttr: "data-operation" },
    { label: "4", dataAttr: "data-number" },
    { label: "5", dataAttr: "data-number" },
    { label: "6", dataAttr: "data-number" },
    { label: "+", dataAttr: "data-operation" },
    { label: "7", dataAttr: "data-number" },
    { label: "8", dataAttr: "data-number" },
    { label: "9", dataAttr: "data-number" },
    { label: "-", dataAttr: "data-operation" },
    { label: ".", dataAttr: "data-number" },
    { label: "0", dataAttr: "data-number" },
    { label: "=", dataAttr: "data-equals" }
];

for (const buttonData of buttonLabels) {
    const button = document.createElement("button");
    button.textContent = buttonData.label;
    button.setAttribute(buttonData.dataAttr, "");

    if (buttonData.label === "AC" || buttonData.label === "=") {
        button.classList.add("span2");
    }

    calculator.appendChild(button);
}

const mainContent = document.querySelector("main");
if (mainContent) {
    // Append the "calculator" div to the main element in HTML
    mainContent.appendChild(calculator);
}



const previous = document.querySelector('.previous-operand');
const current = document.querySelector('.current-operand');
const outputDiv = document.querySelector('.output');
const buttons = document.querySelectorAll('button');

let currentInput = ''; 
let previousValue = ''; 
let currentOperation = null;


function updateDisplay() {
  current.textContent = currentInput;
  previous.textContent = previousValue;
  if (currentOperation) {
    previous.textContent = `${previousValue} ${currentOperation}`;
  }
}

// Add event listener to all buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent;
    
    if (button.hasAttribute('data-number')) {
      // Handle number buttons
      currentInput += buttonValue;
    } else if (button.hasAttribute('data-operation')) {
      // Handle operation buttons
      if (currentInput !== '') {
        if (previousValue !== '' && currentOperation) {
          calculate();
        } else {
          previousValue = currentInput;
        }
        currentOperation = buttonValue;
        currentInput = '';
      }
    } else if (button.hasAttribute('data-all-clear')) {
      // Handle the "AC" button
      currentInput = '';
      previousValue = '';
      currentOperation = null;
    } else if (button.hasAttribute('data-delete')) {
      // Handle the "Del" button
      currentInput = currentInput.slice(0, -1);
    } else if (button.hasAttribute('data-equals')) {
      // Handle the "=" button
      if (previousValue !== '' && currentOperation) {
        calculate();
        currentOperation = null;
      }
    }
    
    updateDisplay();
  });
});

// Helper function to perform calculations
function calculate() {
  let result;
  const operand1 = parseFloat(previousValue);
  const operand2 = parseFloat(currentInput);
  
  switch (currentOperation) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    case '÷':
      if (operand2 !== 0) {
        result = operand1 / operand2;
      } else {
        result = 'Error';
      }
      break;
    default:
      result = 'Error';
  }
  
  currentInput = result.toString();
  previousValue = '';
}

updateDisplay();
