
const cardOrganizer = document.querySelector('.card-organizer');
const loading = document.querySelector('.loading');
let planetsArray = [];

const planetsFetching = async () => {
    for (let i = 1; i < 7; i++) {
        let response = await fetch(`https://swapi.dev/api/planets/?page=${i}`);
        let planetsData = await response.json();
        planetsArray = planetsArray.concat(planetsData.results);
    }
    return planetsArray;
}

const addToDisplay = async () => {
    let planets = await planetsFetching();
    for (let i = 0; i <= planets.length - 1; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        const planetName = document.createElement('div');
        const placeholder = document.createElement('img');
        placeholder.classList.add('placeholder');
        placeholder.src = "../../images/placeholder.jpeg";
        planetName.classList.add('element-name');
        planetName.textContent = planets[i].name;
        card.append(placeholder, planetName);
        cardOrganizer.append(card);
        loading.textContent = '';
    }
}

addToDisplay();

