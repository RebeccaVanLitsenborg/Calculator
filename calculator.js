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