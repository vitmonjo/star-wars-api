
const cardOrganizer = document.querySelector('.card-organizer');
const loading = document.querySelector('.loading');
let planetsArray = [];
const planetsImageMap = {
    'Tatooine': 'https://i.imgur.com/mkEtKtJ.jpg',
    'Alderaan': 'https://i.imgur.com/inFnKE1.jpg',
    'Yavin IV': 'https://i.imgur.com/0BbZc4W.jpg',
    'Hoth': 'https://i.imgur.com/anPXG0f.jpg',
    'Dagobah': 'https://i.imgur.com/wRl9IXU.jpg',
    'Bespin': 'https://i.imgur.com/RUqTZd8.jpg',
    'Endor': 'https://i.imgur.com/VJ9s6vp.jpg',
    'Naboo': 'https://i.imgur.com/2maWPiS.jpg',
    'Coruscant': 'https://i.imgur.com/81gqd3G.jpg',
    'Kamino': 'https://i.imgur.com/1BHzTU2.jpg',
    'Geonosis': 'https://i.imgur.com/O5s1DMF.jpg',
    'Utapau': 'https://i.imgur.com/GEYax5y.jpg'
}

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
        placeholder.src = (planetsImageMap[planets[i].name] || "../../images/placeholder.jpeg");
        planetName.classList.add('element-name');
        planetName.textContent = planets[i].name;
        card.append(placeholder, planetName);
        cardOrganizer.append(card);
        loading.textContent = '';
    }
}

addToDisplay();

