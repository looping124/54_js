let btnScript_3 = document.querySelector('.script-3');
let btnAns_3 = document.querySelector('.script-3-answer');

btnScript_3.addEventListener('click', e => {
  let height_pyramid = document.getElementById("height_pyramid").value;
  // let pyramidPrint = pyramid(height_pyramid);
  if(height_pyramid && height_pyramid >= 0 && height_pyramid <= 25 ) {
    pyramid(height_pyramid)
    // console.log(`${pyramidPrint}`);
    // btnAns_3.innerText = `${pyramidPrint}`;
  } 
})

function pyramid(height_pyramid){
  for(let count = 1; count <= height_pyramid ; count++){
    console.log(" ".repeat(height_pyramid-count)+"#".repeat(count));
  }
}