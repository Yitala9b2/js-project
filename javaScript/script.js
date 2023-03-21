

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

// let numberOfFilms;

// function start() {
//    numberOfFilms = +prompt('Сколько фильмов вы посмотрели', '');
//    // eslint-disable-next-line no-restricted-globals
//    while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//        numberOfFilms = prompt('Сколько фильмов вы посмотрели', '');
//    }
// }

// start();

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start() {
        personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели', '');
        // eslint-disable-next-line no-restricted-globals
        while (personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов вы посмотрели', '');
        }
    },
    rememberMyFilms() {
        for (let index = 0; index < 2; index++) {
            const a = prompt('Один из последних просмотренных фильмов', '');
            const b = +prompt('На сколько оцените его', '');
            if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                console.log('error');
                index--;
            }
        }
    },
    detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классный зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('ВВы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    writeYourGenres() {
        for (let index = 1; index < 2; index++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${index}`, '');
            // if (genre === '' || genre == null) {
            //    console.log('Вы ввели некорректные данные или не ввели их вовсе');
            //    index--;
            // }
            // personalMovieDB.genres[index - 1] = genre;

            const genres = prompt('Введите ваши любимые жанры через запятую', '');
            if (genres === '' || genres == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                index--;
            }
            personalMovieDB.genres = genres.split(', ');
            personalMovieDB.genres.sort();
        }
        personalMovieDB.genres.forEach((item, index) => {
            console.log(`Любимый жанр ${index + 1} - это ${item}`);
        });
    },
    showMyDB(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
};

personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.writeYourGenres();

// function rememberMyFilms() {
//    for (let index = 0; index < 2; index++) {
//        const a = prompt('Один из последних просмотренных фильмов', '');
//        const b = +prompt('На сколько оцените его', '');
//        if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
//            personalMovieDB.movies[a] = b;
//        } else {
//            console.log('error');
//            index--;
//        }
//    }
// }
// rememberMyFilms();

// function detectPersonalLevel() {
//    if (personalMovieDB.count < 10) {
//        console.log('Просмотрено мало фильмов');
//    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//        console.log('Вы классный зритель');
//    } else if (personalMovieDB.count > 30) {
//        console.log('ВВы киноман');
//    } else {
//        console.log('Произошла ошибка');
//    }
// }

// detectPersonalLevel();

// const writeYourGenres = () => {
//    for (let index = 1; index <= 3; index++) {
//        const a = prompt(`Ваш любимый жанр под номером ${index}`, '');
//        personalMovieDB.genres[index - 1] = a;
//    }
// };

// writeYourGenres();

// const showMyDB = (hidden) => {
//    if (hidden) {
//        return;
//    }
//    console.log(personalMovieDB);
// };

// showMyDB(personalMovieDB.privat);
