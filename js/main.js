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

const scrollBtn = document.querySelector('.scroll-btn');
const footer = document.querySelector('footer')

window.onscroll = ( ) =>  {
    // console.log(document.body.clientHeight);
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        scrollBtn.classList.add('scroll-btn--visible')
      } else if (document.body.scrollTop >= (document.body.scrollTop + footer.offsetHeight)) {
        console.log('biba')
      } 
      else {
        scrollBtn.classList.remove('scroll-btn--visible')
      }
}

scrollBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;    
})
