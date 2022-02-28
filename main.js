// slider per elemento navbar

let swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 5000,
    },
    direction: 'horizontal',
    loop: true,
});


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