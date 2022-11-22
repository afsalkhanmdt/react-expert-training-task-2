const outputString = document.getElementById("output-string");
const inputString = document.getElementById("input-string");

const operators = [];
const operants = [];

// outputString.innerText = "0";
// inputString.innerText = "0";

const buttons = document.getElementsByTagName("button");

const buttonClicked = (event) => {
  const button = event.target;
  if (button.className === "green") {
    console.log("Equal");
  } else if (button.className === "red") {
    console.log("Operator");
    operators.push(button.innerText);
  } else {
    operants.push(button.innerText);
    console.log("Operant");
  }

  console.log(operators, operants);
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", buttonClicked);
}
