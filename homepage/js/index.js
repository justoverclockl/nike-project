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
const div = document.querySelector('.cards-container');

next.addEventListener('click', () => {
    div.scrollBy({
        left: 600,
        behavior: 'smooth'
    });
});

const prev = document.getElementById('previous');
prev.addEventListener('click', () => {
    div.scrollBy({
        left: -600,
        behavior: 'smooth'
    });
});

// popup per registrazione

const login = document.getElementById('accedi');
login.addEventListener('click', () => {
    const popupEl = document.getElementById('popup').style.display = "block";
})
const closePopup = document.getElementById('close-popup');
closePopup.addEventListener('click', () => {
    const popupEl = document.getElementById('popup').style.display = "none";
})

// classe per il modulo login

class Login {
    static count = 0

    constructor(id, email, password, registrationDate) {
        this.id = ++this.constructor.count
        this.email = email
        this.password = password
        this.registrationDate = new Date().toISOString()
    }

    toJson() {
        return JSON.stringify(this)
    }

    static incrementId() {
        if (!this.latestId) {
            this.latestId = 1;
        } else this.latestId++;
        return this.latestId;
    }

    displayLoginMessage() {
        return `Grazie per esserti registrato. La tua email è ${this.email}`
    }

}

let newUser = [];

function addUser(id, email, password, registrationDate) {
    const user = new Login(id ,email, password, registrationDate);
    newUser.push(user);
    console.log(newUser)
    const popup = document.getElementById('popup-text');
    popup.innerHTML = user.displayLoginMessage()
}


const submitButton = document.getElementById('login');
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const id = Login.incrementId()
    const emailValue = document.getElementById('email').value;
    const passwordValue = document.getElementById('password').value;
    addUser(id, emailValue, passwordValue, new Date().toISOString())
})

// popup per le cards

const cards = document.querySelectorAll('.cards')
const cardContainer = document.getElementById('cards-container');

cards.forEach((card => {
    let open = false;

    const getName = card.querySelector('.footer-left')
    const getPrice = card.querySelector('.footer-right')

    function showPopup() {

        const popup = document.createElement('div')
        popup.setAttribute('class', 'card-popup')
        popup.setAttribute('id', 'card-popup')

        popup.innerHTML = '' +
            '<div class="close-card-popup" id="close-card-popup">&times;</div>' +
            '<p class="card-popup-text">Il prezzo di ' + getName.innerText + ' è di:</p>' +
            '<p class="card-popup-price">' + getPrice.innerText + ' €' +
            '<div class="card-popup-center"><button class="card-popup-button">Acquista il prodotto</button></div>'

        const overlay = document.createElement('div')
        overlay.setAttribute('class', 'overlay')
        overlay.setAttribute('id', 'overlay')
        cardContainer.appendChild(overlay)
        cardContainer.appendChild(popup)


        overlay.addEventListener('click', closePopup)
        let elem = document.querySelector('.close-card-popup')
        elem.addEventListener('click', closePopup)

    }

    function closePopup() {
        const popup = document.getElementById('card-popup')
        const overlay = document.getElementById('overlay')
        popup.remove()
        overlay.remove()
    }

    card.addEventListener('click', () => {
        showPopup()
        open = true
    })
}))