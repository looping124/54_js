const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];
// <!-- a -->
let btnScript_4a = document.querySelector('.script-4a');
let btnAns_4a = document.querySelector('.script-4a-answer');

btnScript_4a.addEventListener('click', e => {
  entrepreneurs.forEach(people => {
    if (people.year<1980&&people.year>=1970) {
      console.log(people.first)
    }
    
  })
})


// <!-- b -->
let btnScript_4b = document.querySelector('.script-4b');
let btnAns_4b = document.querySelector('.script-4b-answer');

btnScript_4b.addEventListener('click', e => {
  entrepreneurs_array = [];
  let index =0;
  entrepreneurs.forEach(people => {
    entrepreneurs_array[index] = `${people.first} ${people.last} `;
    index ++; 
    
  })
  console.log(entrepreneurs_array)
})

// <!-- c -->
let btnScript_4c = document.querySelector('.script-4c');
let btnAns_4c = document.querySelector('.script-4c-answer');

btnScript_4c.addEventListener('click', e => {
  entrepreneurs_array = [];
  let index =0;
  entrepreneurs.forEach(people => {
    entrepreneurs_array[index] = `${people.first} ${people.last} ${2021  - people.year}`;
    index ++; 
    
  })
  console.log(entrepreneurs_array)
})

// <!-- d -->
let btnScript_4d = document.querySelector('.script-4d');
let btnAns_4d = document.querySelector('.script-4d-answer');

btnScript_4d.addEventListener('click', e => {

  entrepreneurs.sort(function(a, b){
    if(a.first < b.first) { return -1; }
    if(a.first > b.first) { return 1; }
    return 0;
})

  entrepreneurs_array = [];
  let index =0;
  entrepreneurs.forEach(people => {
    entrepreneurs_array[index] = `${people.first} ${people.last} ${2021  - people.year}`;
    index ++; 
    
  })
  
  console.log(entrepreneurs_array)
})