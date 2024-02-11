'use strict';

const modal = document.querySelector('div.overlay-modal');
const btnCloseModal = document.querySelector('button.btn-close-modal');
const btnsOpenModal = document.querySelectorAll('.btn-show-modal');

const openModal = e => {
  e.preventDefault();

  modal.classList.remove('hidden');
};

const closeModal = e => {
  modal.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
