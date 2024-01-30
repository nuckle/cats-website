const cards = document.querySelectorAll('.list__item');

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const cardNumber = i + 1;
    const cardNumberElement = card.querySelector('.number');

    cardNumberElement.innerHTML = cardNumber;    
};

const menu = document.querySelector('.header-list');
const body = document.querySelector('body');
const burger = document.querySelector('.header__burger');

document.addEventListener('click', (e) => {

    if (e.target === burger) {
        menu.classList.toggle('header__list--show');
    } else if (!(e.target === menu)) {
        menu.classList.remove('header__list--show');
    }
})

// burger.addEventListener('click', () => {
//     menu.classList.toggle('header__list--show');
// })

// body.addEventListener('click', ())