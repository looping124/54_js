let btnScript_1 = document.querySelector('.script-1');
let btnAns_1 = document.querySelector('.script-1-answer');

btnScript_1.addEventListener('click', e => {
  console.log(`Bonjour monde !`);
  let userName = document.getElementById("name_hello").value;
  if(userName) {
    console.log(`Bonjour ${userName} !`);
    btnAns_1.innerText = `Bonjour ${userName} !`;
  } 
})
