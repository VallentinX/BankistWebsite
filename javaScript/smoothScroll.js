'use strict';

/* Event Delegation. */
/* Buttons */
const btnScrool = document.querySelector('button.btn-scroll-to');
const navScroll = document.querySelectorAll('ul.nav_links');

/* Function */
const smoothScroll = function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav_link')) {
    if (!menuContainer.classList.contains('menu-is-close')) {
      menuContainer.classList.add('menu-is-close');
    }

    const id = e.target.getAttribute('href');

    const section = document.querySelector(id);

    section.scrollIntoView({behavior: 'smooth'});
  }
};

navScroll.forEach(link => link.addEventListener('click', smoothScroll));

btnScrool.addEventListener('click', function (e) {
  e.preventDefault();

  const section = document.querySelector('section#section-1');

  section.scrollIntoView({behavior: 'smooth'});
});
