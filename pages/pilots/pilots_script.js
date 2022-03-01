// People then pilots fetch

const cardOrganizer = document.querySelector('.card-organizer');
const loading = document.querySelector('.loading');

let peopleArray = [];
let pilots = [];

const peopleFetching = async () => {
    for (let i = 1; i < 10; i++) {
        let response = await fetch(`https://swapi.dev/api/people/?page=${i}`);
        let peopleData = await response.json();
        peopleArray = peopleArray.concat(peopleData.results)
    }
    return peopleArray;
}

const addToPilots = async () => {
    const data = await peopleFetching();
    pilots = data.filter(function (person) {
        if (person.starships.length !== 0) {
            return true;
        }
    })
    return pilots;
}

const addToDisplay = async () => {
    let pilots = await addToPilots();
    for (let i = 0; i <= pilots.length - 1; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        const pilotName = document.createElement('div');
        const placeholder = document.createElement('img');
        placeholder.classList.add('placeholder');
        placeholder.src ="../../images/placeholder.jpeg";
        pilotName.classList.add('element-name');
        pilotName.textContent = pilots[i].name;
        card.append(placeholder, pilotName);
        cardOrganizer.append(card);
        loading.textContent = '';
    }
}

addToDisplay();
















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