let btnScript_7 = document.querySelector('.script-7');
let btnAns_7 = document.querySelector('.script-7-answer');

btnScript_7.addEventListener('click', e => {
  let sentence = document.getElementById("bot_bot").value;
  if(false) {

  } else if (sentence.charAt(sentence.length-1) == "?"){
    console.log(`Ouais Ouais...`);
    btnAns_7.innerText = (`Ouais Ouais...`);
  } else if (sentence != "" && sentence === sentence.toUpperCase()) {
    console.log(`Pwa, calme-toi...`);
    btnAns_7.innerText = (`Pwa, calme-toi...`);
} else if (sentence.includes("Fortnite") || sentence.includes("fortnite")) {
  console.log(`on s' fait une partie soum-soum ?`);
  btnAns_7.innerText = (`on s' fait une partie soum-soum ?`);
} else if (sentence === "") {
  console.log(`t'es en PLS ?`);
  btnAns_7.innerText = (`t'es en PLS ?`);
} else {
  console.log(`balek`);
  btnAns_7.innerText = (`balek`);
}
}) 

let btnScript_7b = document.querySelector('.script-7b');
let btnAns_7b = document.querySelector('.script-7b-answer');
btnScript_7b.addEventListener('click', e => {
  // let sentence = document.getElementById("bot_botb").value;
  let sentence = prompt("Please enter your name");
  if(false) {

  } else if (sentence.charAt(sentence.length-1) == "?"){
    console.log(`Ouais Ouais...`);
    btnAns_7.innerText = (`Ouais Ouais...`);
  } else if (sentence != "" && sentence === sentence.toUpperCase()) {
    console.log(`Pwa, calme-toi...`);
    btnAns_7.innerText = (`Pwa, calme-toi...`);
} else if (sentence.includes("Fortnite") || sentence.includes("fortnite")) {
  console.log(`on s' fait une partie soum-soum ?`);
  btnAns_7.innerText = (`on s' fait une partie soum-soum ?`);
} else if (sentence === "") {
  console.log(`t'es en PLS ?`);
  btnAns_7.innerText = (`t'es en PLS ?`);
} else {
  console.log(`balek`);
  btnAns_7.innerText = (`balek`);
}
}) 

