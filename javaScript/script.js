// самостоятельно

// const numFilms = document.querySelector('#Films');

// const lastFilm = document.querySelector('#lastFilm');

// const estimation = document.querySelector('#estimation');

// const arrAnswers = [numFilms, lastFilm, estimation];
// arrAnswers.forEach((answer) => {
//    answer.addEventListener('input', (event) => {
//        answer.setAttribute('value', event.target.value);
//        const answerMovie = lastFilm.value;
//        const answerEstimation = estimation.value;
//        console.log(answerMovie);

//        const personalMovieDB = {
//            count: numFilms.value,
//            movies: {
//                [answerMovie]: answerEstimation,
//            },
//            actors: {},
//            genres: [],
//            privat: false,
//        };
//        console.log('hi');
//        console.log(personalMovieDB.movies);
//    });
// });

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели', '');
    // eslint-disable-next-line no-restricted-globals
    while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы посмотрели', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let index = 0; index < 2; index++) {
        const a = prompt('Один из последних просмотренных фильмов', '').trim();
        const b = +prompt('На сколько оцените его', '');
        if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            console.log('error');
            index--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классный зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('ВВы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

const writeYourGenres = () => {
    for (let index = 1; index <= 3; index++) {
        const a = prompt(`Ваш любимый жанр под номером ${index}`, '');
        personalMovieDB.genres[index - 1] = a;
    }
};

writeYourGenres();

const showMyDB = (hidden) => {
    if (hidden) {
        return;
    }
    console.log(personalMovieDB);
};

showMyDB(personalMovieDB.privat);