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
let newUser = [];

class Login {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    toJson() {
        return JSON.stringify(this)
    }

    displayLoginMessage() {
        return `Grazie per esserti registrato. La tua email è ${this.email}`
    }

    static fromJson(json) {
        return JSON.parse(json)
    }
}


function addUser(e) {
    e.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const popup = document.getElementById('popup-text');
    const loginForm = document.getElementById('loginform')
    const userNew = new Login(email, password)
    newUser.push(userNew)
    console.log(newUser)
    loginForm.setAttribute('style', 'display:none !important');
    popup.innerHTML = userNew.displayLoginMessage()
}


const submitButton = document.getElementById('login');
submitButton.addEventListener('click', addUser)
