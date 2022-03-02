
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
        placeholder.src = (starshipsImageMap[starships[i].name] || "../../images/placeholder.jpeg");
        starshipName.classList.add('element-name');
        starshipName.textContent = starships[i].name;
        card.append(placeholder, starshipName);
        cardOrganizer.append(card);
        loading.textContent = '';
    }
}

addToDisplay();
