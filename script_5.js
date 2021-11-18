const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 12 }
];
// <!-- a -->
let btnScript_5a = document.querySelector('.script-5a');
let btnAns_5a = document.querySelector('.script-5a-answer');

btnScript_5a.addEventListener('click', e => {
  my_answer = all_books_have_been_rented(books);
  console.log(my_answer);
  btnAns_5a.innerText = `${my_answer}`;
})

function all_books_have_been_rented(books){
  rended = true;
  books.forEach(book => {

    if (book.rented === 0) {
      rended = false;
    }
  })
  return rended;
}

// <!-- b -->
let btnScript_5b = document.querySelector('.script-5b');
let btnAns_5b = document.querySelector('.script-5b-answer');

btnScript_5b.addEventListener('click', e => {
  my_answer = most_rented_book(books);
  console.log(my_answer);
  btnAns_5b.innerText = `${my_answer}`;
})

function most_rented_book(books){
  rended_value = 0;
  rended_book = "";
  books.forEach(book => {
    if (book.rented > rended_value) {
      rended_value = book.rented;
      rended_book = book.title;
    }
  })
  return rended_book;
}

// <!-- c -->
let btnScript_5c = document.querySelector('.script-5c');
let btnAns_5c = document.querySelector('.script-5c-answer');

btnScript_5c.addEventListener('click', e => {
  my_answer = less_rented_book(books);
  console.log(my_answer);
  btnAns_5c.innerText = `${my_answer}`;
})

function less_rented_book(books){
  rended_value = 1000;
  rended_book = "";
  books.forEach(book => {
    if (book.rented < rended_value) {
      rended_value = book.rented;
      rended_book = book.title;
    }
  })
  return rended_book;
}

// <!-- d -->
let btnScript_5d = document.querySelector('.script-5d');
let btnAns_5d = document.querySelector('.script-5d-answer');

btnScript_5d.addEventListener('click', e => {
  my_answer = books.find(book => book.id == 133712);
  console.log(my_answer);
  btnAns_5d.innerText = `${my_answer.title}`;
})

// <!-- e -->
let btnScript_5e = document.querySelector('.script-5e');
let btnAns_5e = document.querySelector('.script-5e-answer');

btnScript_5e.addEventListener('click', e => {
  book_to_delete = books.find(book => book.id == 133712);
  console.log(book_to_delete);
  btnAns_5e.innerText = `${book_to_delete.title}`;
  let index = books.indexOf(book_to_delete);
  console.log(index);
  if (index > -1) {
    books.splice(index, 1);
  }
  console.log(books);
})

// <!-- f -->
let btnScript_5f = document.querySelector('.script-5f');
let btnAns_5f = document.querySelector('.script-5f-answer');

btnScript_5f.addEventListener('click', e => {
  book_to_delete = books.find(book => book.id == 133712);
  console.log(book_to_delete);
  btnAns_5f.innerText = `${book_to_delete.title}`;
  let index = books.indexOf(book_to_delete);
  console.log(index);
  if (index > -1) {
    books.splice(index, 1);
  }
  

  books.sort(function(a, b){
    if(a.first < b.first) { return -1; }
    if(a.first > b.first) { return 1; }
    return 0;
  })
  console.log(books);
})