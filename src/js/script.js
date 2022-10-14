const hamburger = document.querySelector('.promo__hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active')
});

const counter = document.querySelectorAll('.skills__raitings-counter'),
	lines = document.querySelectorAll('.skills__raitings-line span');

counter.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
})