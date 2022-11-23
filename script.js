const outputString = document.getElementById("output-string");
const inputString = document.getElementById("input-string");

let operators = [];
let operants = [];

const isLastOperator = () => operants.length === operators.length;

const getInputString = () => {
  let output = operants.map((v, i) => v + (operators[i] || "")).join("");
  return output;
};

// outputString.innerText = "0";
// inputString.innerText = "0";

const buttons = document.getElementsByTagName("button");

const buttonClicked = (event) => {
  const button = event.target;
  const value = button.innerText;
  if (button.className === "green") {
    if (!isLastOperator()) {
      calculateResult();
      outputString.innerText = operants[0];
      operants = [];
      return;
    }
  } else if (button.className === "red") {
    if (!isLastOperator()) {
      operators.push(value);
    }
  } else {
    if (isLastOperator()) {
      operants.push(value);
    } else {
      //Todo :- Add condition to avoid multiple Points

      operants[operants.length - 1] += value;
    }
  }
  console.log(operators, operants);
  inputString.innerText = getInputString();
};

const getValue = (op, first, second) => {
  let a = Number(first);
  let b = Number(second);
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }
};

const operate = (n) => {
  //Store value after calculation
  operants[n] = getValue(operators[n], operants[n], operants[n + 1]);
  //Remove other element
  operants = operants.filter((_v, i) => i !== n + 1);
  //Remove operator
  operators = operators.filter((_v, i) => i !== n);

  console.log(operators, operants);
};

const calculateResult = () => {
  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === "*" || operators[i] === "/") {
      operate(i);
    }
  }
  for (let i = 0; i < operators.length; i++) {
    operate(i);
  }
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", buttonClicked);
}
