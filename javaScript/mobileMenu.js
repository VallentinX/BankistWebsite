'use strict';

const openMenu = document.querySelector('button.opn-mbl-mn');
const closeMenu = document.querySelector('button.cls-mbl-mn');
const menuContainer = document.querySelector('div.mobile-menu-container');

const openMobileMenu = () => menuContainer.classList.remove('menu-is-close');
const closeMobileMenu = () => menuContainer.classList.add('menu-is-close');

openMenu.addEventListener('click', openMobileMenu);

closeMenu.addEventListener('click', closeMobileMenu);
