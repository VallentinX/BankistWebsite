'use strict';

const header = document.querySelector('header.header');

const createDiv = document.createElement('div');
createDiv.classList.add('cookie');

const craeteP = document.createElement('p');
craeteP.textContent =
  'We know cookies are annoying, but we use them for our users benefits like improving your experience based on your activity on our webpage.';

createDiv.appendChild(craeteP);

const createBtn = document.createElement('button');
createBtn.classList.add('cookies');
createBtn.textContent = 'Got it!';

createDiv.appendChild(createBtn);

header.prepend(createDiv);

const clsCookies = function () {
  createDiv.remove();
};

const cookiesBtn = document.querySelector('button.cookies');
cookiesBtn.addEventListener('click', clsCookies);
