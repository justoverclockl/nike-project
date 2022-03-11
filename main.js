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
    constructor(email, password, userId, registrationDate) {
        this.email = email
        this.password = password
        this.registrationDate = new Date().toISOString()
    }

    toJson() {
        return JSON.stringify(this)
    }

    displayLoginMessage() {
        return `Grazie per esserti registrato. La tua email è ${this.email}`
    }

    displayLoginEmail() {
        return this.email
    }

    static fromJson(json) {
        return JSON.parse(json)
    }

}

function addUser(email,password,registrationDate){
    const user = new Login(email,password,registrationDate);
    let newUser = [];
    newUser.push([email,password,registrationDate]);
    console.log(newUser)
    user.displayLoginMessage()
}



/*function addUser(e) {
    e.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const popup = document.getElementById('popup-text');
    const loginForm = document.getElementById('loginform');
    const navLinks = document.getElementById('nav-links');
    const userNew = new Login(email, password)
    newUser.push(userNew)
    console.log(newUser)
    loginForm.setAttribute('style', 'display:none !important');
    popup.innerHTML = userNew.displayLoginMessage()
    localStorage.setItem("user", userNew.toJson());
    if ("user" in localStorage) {
        navLinks.innerHTML = `<ul>
                    <li class="links">Bentornato ${userNew.displayLoginEmail()}</li>
                </ul>`
    }
}*/

const submitButton = document.getElementById('login');
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const emailValue = document.getElementById('email').value;
    const passwordValue = document.getElementById('password').value;
    addUser(emailValue, passwordValue, new Date().toISOString())
})
