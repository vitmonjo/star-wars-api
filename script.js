// People fetch
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

// Planets fetch
let planetsArray = [];

let request = `https://swapi.dev/api/planets/`;
fetch(request).then((response) => {
    return response.json();
}).then((data) => {
    planetsArray = planetsArray.concat(data.results);
})

for (let i = 2; i < 7; i++) {
    let request = `https://swapi.dev/api/planets/?page=${i}`;
    fetch(request).then((response) => {
        return response.json();
    }).then((data) => {
        planetsArray = planetsArray.concat(data.results);
    })
}