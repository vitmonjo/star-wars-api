// // People fetch
// let peopleArray = [];

// let peopleRequest = `https://swapi.dev/api/people/`;
// fetch(peopleRequest).then((response) => {
//     return response.json();
// }).then((data) => {
//     peopleArray = peopleArray.concat(data.results);
// })

// for (let i = 2; i < 10; i++) {
//     let peopleRequest = `https://swapi.dev/api/people/?page=${i}`;
//     fetch(peopleRequest).then((response) => {
//         return response.json();
//     }).then((data) => {
//         peopleArray = peopleArray.concat(data.results);
//     })
// }

// const pilots = [];

// setTimeout(function() {
//     peopleArray.filter(function(person) {
//         if (person.starships.length !== 0) {
//             pilots.push(person);
//         }
//     })
// }, 5000)

fetch(`https://swapi.dev/api/people/`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.results);
    })

// const pilots = peopleArray.filter(function(person) {
//     if (person.starships.length !== 0) {
//         return true;
//     }
// });

// Planets fetch
// let planetsArray = [];

// let planetsRequest = `https://swapi.dev/api/planets/`;
// fetch(planetsRequest).then((response) => {
//     return response.json();
// }).then((data) => {
//     planetsArray = planetsArray.concat(data.results);
// })

// for (let i = 2; i < 7; i++) {
//     let planetsRequest = `https://swapi.dev/api/planets/?page=${i}`;
//     fetch(planetsRequest).then((response) => {
//         return response.json();
//     }).then((data) => {
//         planetsArray = planetsArray.concat(data.results);
//     })
// }

// Starships fetch

// let starshipsArray = [];

// let starshipsRequest = `https://swapi.dev/api/starships/`;
// fetch(starshipsRequest).then((response) => {
//     return response.json();
// }).then((data) => {
//     starshipsArray = starshipsArray.concat(data.results);
// })

// for (let i = 2; i < 5; i++) {
//     let starshipsRequest = `https://swapi.dev/api/starships/?page=${i}`;
//     fetch(starshipsRequest).then((response) => {
//         return response.json();
//     }).then((data) => {
//         starshipsArray = starshipsArray.concat(data.results);
//     })
// }