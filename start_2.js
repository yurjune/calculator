let numOne = '';
let numTwo = '';
let operator = '';
let result = '';
let calculated_value = '';
const $operator = document.querySelector("#operator");
const $result = document.querySelector('#result');

const onClickNumber = (event) => {
  if (result) {
    onClickClear();
    numOne += event.target.textContent;
    $result.value += event.target.textContent;
    return;
  }
  if (!operator) {
    numOne += event.target.textContent;
    $result.value += event.target.textContent;
    return;
  }
  if (!numTwo) {
    $result.value = '';
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

const onClickOperator = (op) => () => {
  if (numTwo) {
    let temp = calculate();
    numOne = temp;
    numTwo = '';
    operator = op;
    $operator.value = operator;
    $result.value = temp;
    return;
  }
  if (numOne) {
    operator = op;
    $operator.value = operator;
    return;
  }
  // 연산자부터 입력할 경우
  numOne = 0;
  operator = op;
  $operator.value = operator;
  $result.value += numOne;
}

document.querySelector("#plus").addEventListener("click", onClickOperator("+"));
document.querySelector("#minus").addEventListener("click", onClickOperator("-"));
document.querySelector("#divide").addEventListener("click", onClickOperator("/"));
document.querySelector("#multiply").addEventListener("click", onClickOperator("*"));

const calculate = () => {
  if (operator == "+") {
    calculated_value = Number(numOne) + Number(numTwo);
  }
  if (operator == "-") {
    calculated_value = numOne - numTwo;
  }
  if (operator == "/") {
    calculated_value = numOne / numTwo;
  }
  if (operator == "*") {
    calculated_value = numOne * numTwo;
  }
  return calculated_value;
}

const onClickEqual = () => {
  if (!result) {
    result = calculate();
    $result.value = result;
    $operator.value = '';
    return;
  }
  numOne = result;
  result = calculate();
  $result.value = result;
}

document.querySelector("#calculate").addEventListener("click", onClickEqual);

const onClickClear = () => {
  numOne = '';
  numTwo = '';
  operator = '';
  result = ''
  calculated_value = '';
  $operator.value = '';
  $result.value = '';
}

document.querySelector("#clear").addEventListener("click", onClickClear);
