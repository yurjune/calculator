let numOne = '';
let numTwo = '';
let operator = '';
let result = ''
const $operator = document.querySelector("#operator");
const $result = document.querySelector('#result');

const onClickNumber = (event) => {
  if (!operator) {
    numOne += event.target.textContent;
    $result.value += event.target.textContent;
    return;
  }	
  numTwo += event.target.textContent;
  $result.value += event.target.textContent;
};

document.querySelector("#num-0").addEventListener("click", onClickNumber);
document.querySelector("#num-1").addEventListener("click", onClickNumber);
document.querySelector("#num-2").addEventListener("click", onClickNumber);
document.querySelector("#num-3").addEventListener("click", onClickNumber);
document.querySelector("#num-4").addEventListener("click", onClickNumber);
document.querySelector("#num-5").addEventListener("click", onClickNumber);
document.querySelector("#num-6").addEventListener("click", onClickNumber);
document.querySelector("#num-7").addEventListener("click", onClickNumber);
document.querySelector("#num-8").addEventListener("click", onClickNumber);
document.querySelector("#num-9").addEventListener("click", onClickNumber);

const onClickOperator = (op) => (event) => {
  if (numTwo) {
    calculate();
    numOne = result;
    result = ''
    operator = op;
    $operator.value = op;
    numTwo = '';
    return;
  } 
  if (numOne) {
    operator = op;
    $operator.value = op;
    return;
  } 
  if (op === "-") { // 음수 시작
    numOne = 0;
    operator = op;
    $operator.value = op;
  } else {
    alert("숫자를 먼저 입력하세요");
  }
}

document.querySelector('#plus').addEventListener('click', onClickOperator("+"));
document.querySelector('#minus').addEventListener('click', onClickOperator("-"));
document.querySelector('#divide').addEventListener('click', onClickOperator("/"));
document.querySelector('#multiply').addEventListener('click', onClickOperator("*"));

const calculate= () => {
  if (operator === "+") {
    result = Number(numOne) + Number(numTwo);
  } else if (operator === "-") {
    result = numOne - numTwo;
  } else if (operator === "/") {
    result = numOne / numTwo;
  } else if (operator === "*") {
    result = numOne * numTwo;
  }
  $result.value = result;
  $operator.value = '';
} 