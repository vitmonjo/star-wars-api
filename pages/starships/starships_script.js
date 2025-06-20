
const cardOrganizer = document.querySelector('.card-organizer');
const loading = document.querySelector('.loading');
let starshipsArray = [];
const starshipsImageMap = {
    'CR90 corvette': 'https://i.imgur.com/JzcsifG.jpg',
    'Star Destroyer': 'https://i.imgur.com/0kDcjKh.jpg',
    'Sentinel-class landing craft': 'https://i.imgur.com/n57oAzP.jpg',
    'Death Star': 'https://i.imgur.com/8Kfoa5Z.jpg',
    'Millennium Falcon': 'https://i.imgur.com/OtSNxmm.jpg',
    'Y-wing': 'https://i.imgur.com/Ga8DJ2Y.jpg',
    'X-wing': 'https://i.imgur.com/Zw4rQNA.jpg',
    'TIE Advanced x1': 'https://i.imgur.com/eoi4WWw.jpg',
    'Executor': 'https://i.imgur.com/iWLUQyy.jpg',
    'Rebel transport': 'https://i.imgur.com/H9mktfh.jpg',
    'Slave 1': 'https://i.imgur.com/MAt7hmF.jpg',
    'Imperial shuttle': 'https://i.imgur.com/sHfsxFx.jpg'
}

const countInstancesInLocalStorage = (string) => {
    let counter = 0;
    for (let i = 0; i < localStorage.length; i++) {
        const currentStoredItem = localStorage.key(i);
        if (String(currentStoredItem).includes(string)) counter++;
    }
    return counter;
}

const checkLocalStorage = () => {
    return localStorage.getItem('STARSHIP-0');
}

const populateFromLocalStorage = () => {
    for (let i = 0; i < countInstancesInLocalStorage('STARSHIP'); i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        const planetName = document.createElement('div');
        const placeholder = document.createElement('img');
        placeholder.classList.add('placeholder');
        placeholder.src = (starshipsImageMap[localStorage.getItem(`STARSHIP-${i}`)] || "../../images/placeholder.jpeg");
        planetName.classList.add('element-name');
        planetName.textContent = localStorage.getItem(`STARSHIP-${i}`);
        card.append(placeholder, planetName);
        cardOrganizer.append(card);
        loading.textContent = '';
    }
}

const starshipsFetching = async () => {
    let response = await fetch(`https://swapi.info/api/starships`);
    let starshipsData = await response.json();
    starshipsArray = starshipsArray.concat(starshipsData);
    return starshipsArray;
}

const addToDisplay = async () => {
    if (checkLocalStorage() === null) {
        let starships = await starshipsFetching();
        for (let i = 0; i <= starships.length - 1; i++) {
            const card = document.createElement('div');
            card.classList.add('card');
            const starshipName = document.createElement('div');
            const placeholder = document.createElement('img');
            placeholder.classList.add('placeholder');
            placeholder.src = (starshipsImageMap[starships[i].name] || "../../images/placeholder.jpeg");
            starshipName.classList.add('element-name');
            starshipName.textContent = starships[i].name;
            card.append(placeholder, starshipName);
            cardOrganizer.append(card);
            loading.textContent = '';
        }
        for (starship in starshipsArray) {
            localStorage.setItem(`STARSHIP-${starship}`, `${starshipsArray[starship].name}`);
        }
    } else {
        populateFromLocalStorage();
    }
}

addToDisplay();
