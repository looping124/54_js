let btnScript_6 = document.querySelector('.script-6');
let btnAns_6 = document.querySelector('.script-6-answer');

btnScript_6.addEventListener('click', e => {
  let arn = document.getElementById("arn").value;
  arn = arn.replace(/\s/g, ''); //on efface les espaces
  let arn_array = arn.match(/.{1,3}/g);
  let index = 0;
  let acides_array = [];
  let arn_array_errors = 0;
  arn_array.forEach(codon  => {
    switch (codon) {
      case 'UCU':
      case 'UCC':
      case 'UCA':
      case 'UCG':
      case 'AGU':
      case 'AGC':
        acides_array[index] = "Sérine";
        index++;
        break;
      case 'CCU':
      case 'CCC':
      case 'CCA':
      case 'CCG':
        acides_array[index] = "Proline";
        index++;
        break;
      case 'UUA':
      case 'UUG':
        acides_array[index] = "Leucine";
        index++;
        break;
      case 'UUU':
      case 'UUC':
        acides_array[index] = "Phénylalanine";
        index++;
        break;
      case 'CGU':
      case 'CGC':
      case 'CGA':
      case 'CGG':
      case 'AGA':
      case 'AGG':
        acides_array[index] = "Arginine";
        index++;
        break;
      case 'UAU':
      case 'UAC':
        acides_array[index] = "Tyrosine";
        index++;
        break;
      default:
        arn_array_errors = 1;
        break;
    }
  })
    if(acides_array && arn_array_errors === 0) {
      console.log(`${acides_array}`);
      btnAns_6.innerText = `${acides_array}`;
  } else if(arn_array_errors === 1 ) {
      console.log(`Le code ARN n'est pas valide`);
      btnAns_6.innerText = `Le code ARN n'est pas valide`;
  }
});