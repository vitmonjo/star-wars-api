
const cardOrganizer = document.querySelector('.card-organizer');
const loading = document.querySelector('.loading');
let starshipsArray = [];

const starshipsFetching = async () => {
    for (let i = 1; i < 5; i++) {
        let response = await fetch(`https://swapi.dev/api/starships/?page=${i}`);
        let starshipsData = await response.json();
        starshipsArray = starshipsArray.concat(starshipsData.results);
    }
    return starshipsArray;
}

const addToDisplay = async () => {
    let starships = await starshipsFetching();
    for (let i = 0; i <= starships.length - 1; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        const starshipName = document.createElement('div');
        const placeholder = document.createElement('img');
        placeholder.classList.add('placeholder');
        placeholder.src = "../../images/placeholder.jpeg";
        starshipName.classList.add('element-name');
        starshipName.textContent = starships[i].name;
        card.append(placeholder, starshipName);
        cardOrganizer.append(card);
        loading.textContent = '';
    }
}

addToDisplay();









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
