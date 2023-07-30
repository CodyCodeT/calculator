var a = "";
var b = "";
var ans;
var operatorSelection;
var calculated = false;

const display = document.querySelector(".calculator__display");
const equals = document.querySelector("button.key--equal");
const clear = document.querySelector(".clear");
const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", inputDecimal);
clear.addEventListener("click", clearDisplay);
equals.addEventListener("click", equate);

const numberButtons = document.querySelectorAll(".number");
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", input);
}
const operatorButtons = document.querySelectorAll(".key--operator");
for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", operatorInput);
}

function add(a, b) {
  return (ans = Number(a) + Number(b));
}
function subtract(a, b) {
  return (ans = Number(a) - Number(b));
}
function multiply(a, b) {
  return (ans = Number(a) * Number(b));
}
function divide(a, b) {
  if (b == 0) {
    alert("You can't divide by zero!");
    clearDisplay();
    display.textContent = "0";
  } else {
    return (ans = Number(a) / Number(b));
  }
}

function operator() {
  if (operatorSelection === "+") {
    add(a, b);
  }
  if (operatorSelection === "-") {
    return (a = subtract(a, b));
  }
  if (operatorSelection === "×") {
    return (a = multiply(a, b));
  }
  if (operatorSelection === "÷") {
    return (a = divide(a, b));
  } else {
    return;
  }
}

function inputDecimal() {
  if (a.includes(".") && operatorSelection === undefined) {
    return;
  } else if (operatorSelection === undefined) {
    a = a + ".";
    display.textContent = `${a}`;
  } else if (b.includes(".")) {
    return;
  } else {
    b = b + ".";
    display.textContent = `${a}${operatorSelection}${b}`;
  }
}

function input(event) {
  const selection = event.target;
  if (calculated === true && operatorSelection === undefined) {
    a = "";
    calculated = false;
    a = a + selection.textContent;
    display.textContent = `${a}`;
  } else if (operatorSelection === undefined) {
    a = a + selection.textContent;
    display.textContent = `${a}`;
  } else {
    calculated = false;
    b = b + selection.textContent;
    display.textContent = `${a}${operatorSelection}${b}`;
  }
}
function operatorInput(event) {
  const selection = event.target;
  operatorSelection = selection.textContent;
  display.textContent = `${a}${operatorSelection}`;
}

function clearDisplay() {
  a = "";
  b = "";
  operatorSelection = undefined;
  display.textContent = "0";
  calculated = false;
  decimal.addEventListener("click", input);
}

function equate() {
  if (b != "" && operator != undefined) {
    operator();
    a = ans;
    display.textContent = `${a}`;
    calculated = true;
    b = "";
    operatorSelection = undefined;
  } else {
    return;
  }
}
