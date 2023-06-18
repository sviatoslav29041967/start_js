"use strict";


let numberOfFilms;

function start(){
   numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели ?', '');

   while( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели ?', '');
   }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function showMyDB() {
  if ( personalMovieDB.privat == false ){
    console.log(personalMovieDB);
  }
}
showMyDB()


function detectPersonalLevel() {
  if ( personalMovieDB.count < 10 ) {
    console.log('Вы посмотрели довольно мало фильмов');
  }  else if (  personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
  } else if ( personalMovieDB.count > 30 ) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}

detectPersonalLevel() 

function rememberMyFilms() {
  let i = 0;
  while (i < 2) {
  const a = prompt('Один из последних просмотренных фильмов ?', '');
  const b = prompt('На сколько оцените его ?', '');

if(a !='' && a != null && a.length < 50 && b != '' && b != null ) {
  personalMovieDB.movies[a] = b;
  console.log('Done');
  i++;
} else {
  console.log('Error');
  i--;
    }
  }
}
rememberMyFilms()



function writeYourGenres(){
  
  for (let i = 0; i <= 2; i++) {
    let unswer = prompt(`Ваш любимый жанр под номером ${i +1}`);
    personalMovieDB.genres.push(unswer);
    }
   
}
writeYourGenres()
console.log(personalMovieDB.genres);




console.log(personalMovieDB);







// function showFirstMessege(text) {
//   console.log(text);
// }
// showFirstMessege('Hello World');

// function ret() {
//   let num = 50;
//   num = num*12;
//   return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const usdCurse = 36;
// const euro = 40;
// const discount = 0.9;

// function convert(amount, curse) {
//   return (amount * curse);
// }

// function promotion(result) {
//   console.log(result * discount);
// }
// const res = convert(250, usdCurse)
// promotion(res);





