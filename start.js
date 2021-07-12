let numOne = '';
let operator = '';
let numTwo = '';
let result = '';
const $operator = document.querySelector('#operator')
const $result = document.querySelector('#result')

// event.target.textContent 로 중복 제거
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
document.querySelector('#num-0').addEventListener('click', onClickNumber);
document.querySelector('#num-1').addEventListener('click', onClickNumber);
document.querySelector('#num-2').addEventListener('click', onClickNumber);
document.querySelector('#num-3').addEventListener('click', onClickNumber);
document.querySelector('#num-4').addEventListener('click', onClickNumber);
document.querySelector('#num-5').addEventListener('click', onClickNumber);
document.querySelector('#num-6').addEventListener('click', onClickNumber);
document.querySelector('#num-7').addEventListener('click', onClickNumber);
document.querySelector('#num-8').addEventListener('click', onClickNumber);
document.querySelector('#num-9').addEventListener('click', onClickNumber);

// 고차함수로 중복 제거
// 고차함수: 함수가 함수를 반환하는 함수
const onClickOperator = (op) => (event) => {
  if (numTwo) { // 연달아 계산 구현
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
  numOne = 0;
  operator = op;
  $operator.value = operator;
  $result.value += numOne;
}

// onClickOperator()는 함수를 return하므로(고차함수) 이벤트리스터 두번째 인자에 함수가 리턴되어있다.
// 그래서 실행되는 상태가 아니다.
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

const onClickEqual = () => {
  if (result) {
    numOne = result;
    result = '';
    calculate()
    return;
  }
  if (numTwo) {
    calculate();
    return;
  }
  if (!operator) {
    alert("개발 중")
    return;
  }
  numTwo = numOne;
  calculate();
} 
document.querySelector('#calculate').addEventListener('click', onClickEqual);

const onClickClear = () => {
  numOne = ''
  operator = ''
  numTwo = ''
  result = ''
  $operator.value = '';
  $result.value = '';
}
document.querySelector('#clear').addEventListener('click', onClickClear);
