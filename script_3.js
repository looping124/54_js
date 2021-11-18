let btnScript_3 = document.querySelector('.script-3');
let btnAns_3 = document.querySelector('.script-3-answer');

btnScript_3.addEventListener('click', e => {
  let height_pyramid = document.getElementById("height_pyramid").value;
  if(height_pyramid && height_pyramid >= 0 && height_pyramid <= 25 ) {
    pyramid(height_pyramid)
  } 
})

function pyramid(height_pyramid){
  for(let count = 1; count <= height_pyramid ; count++){
    console.log(" ".repeat(height_pyramid-count)+"#".repeat(count));
  }
}