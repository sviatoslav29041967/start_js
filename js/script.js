
"use strict";

const numberOfFilms = prompt('Сколько фильмов Вы уже посмотрпели', '');
const personalMovieDb = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

let a = prompt('Один из просмотренных фильмов ?', '');
let b = prompt('На сколько оцените его ?', '');
let c = prompt('Один из просмотренных фильмов ?', '');
let d = prompt('На сколько оцените его ?', '');

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;
console.log(personalMovieDb);
