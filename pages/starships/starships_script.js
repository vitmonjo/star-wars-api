
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
