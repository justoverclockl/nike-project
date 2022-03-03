// slider per elemento navbar

let swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 5000,
    },
    direction: 'horizontal',
    loop: true,
});

// slider delle cards
const next = document.getElementById('next');
next.addEventListener('click', () => {
    const div = document.querySelector('.cards-container');
    div.scrollBy({
        left: 600,
        behavior: 'smooth'
    });
});

const prev = document.getElementById('previous');
prev.addEventListener('click', () => {
    const diva = document.querySelector('.cards-container');
    diva.scrollBy({
        left: -600,
        behavior: 'smooth'
    });
});

// popup per registrazione e array per gli input

const login = document.getElementById('accedi');
login.addEventListener('click', () => {
    const popupEl = document.getElementById('popup').style.display = "block";
})
const closePopup = document.getElementById('close-popup');
closePopup.addEventListener('click', () => {
    const popupEl = document.getElementById('popup').style.display = "none";
})

function submitRegistration() {
    const loginEmail = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let savedData = [];
    if (loginEmail !== '' && password !== '') {
        savedData.push(loginEmail, password);
        console.log(savedData)
    }
    return savedData;

}


