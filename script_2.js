let btnScript_2 = document.querySelector('.script-2');
let btnAns_2 = document.querySelector('.script-2-answer');

btnScript_2.addEventListener('click', e => {
  let userNumber = document.getElementById("number_factorial").value;
  let factorialNumber = factorial(userNumber);
  if(userNumber && userNumber >= 0 && userNumber <= 100 ) {
    console.log(`Le factoriel de  ${userNumber} est ${factorialNumber} !`);
    btnAns_2.innerText = `Le factoriel de  ${userNumber} est ${factorialNumber} !`;
  } 
})

function factorial(number){
  let result = 1;
  for(let count = 2; count <= number; count++){
    result = result * count;
    }
  return result;
}