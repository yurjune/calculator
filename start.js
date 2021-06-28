let numOne = '';
let operator = '';
let numTwo = '';
const $operator = document.querySelector('#operator')
const $result = document.querySelector('#result')

// event.target.textContent 로 중복 제거
const onClickNumber = (event) => {
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
const onClickOperator = (op) => (event) => {
  if (numOne) {
    operator = op;
    $operator.value = op;
  } else {
    alert("숫자를 먼저 입력하세요")
  }
}
// // return 표시
// const onClickOperator = (op) => {
//   return () => {
//     if (numOne) {
//     operator = op;
//     $operator.value = op;
//     } else {
//       alert("숫자를 먼저 입력하세요")
//     }
//   }
// }

// onClickOperator()는 함수를 return하므로(고차함수) 이벤트리스터 두번째 인자에 함수가 리턴되어있다.
// 그래서 실행되는 상태가 아니다.
document.querySelector('#plus').addEventListener('click', onClickOperator("+"));
document.querySelector('#minus').addEventListener('click', onClickOperator("-"));
document.querySelector('#divide').addEventListener('click', onClickOperator("/"));
document.querySelector('#multiply').addEventListener('click', onClickOperator("*"));

const onClickEqual = () => {
  if (!numTwo) {
    alert("숫자를 먼저 입력하세요2");
    return;
  } 
  if (operator === "+") {
    $result.value = Number(numOne) + Number(numTwo);
  } else if (operator === "-") {
    $result.value = numOne - numTwo;
  } else if (operator === "/") {
    $result.value = numOne / numTwo;
  } else if (operator === "*") {
    $result.value = numOne * numTwo;
  }
} 
document.querySelector('#calculate').addEventListener('click', onClickEqual);

const onClickClear = () => {
  numOne = ''
  operator = ''
  numTwo = ''
  $operator.value = '';
  $result.value = '';
}
document.querySelector('#clear').addEventListener('click', onClickClear);
