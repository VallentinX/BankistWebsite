'use strict';

const slides = document.querySelectorAll('div.slide');
const slideBtnL = document.querySelector('button.slider_btn-left');
const slideBtnR = document.querySelector('button.slider_btn-right');
const dotsCont = document.querySelector('div.dots');

let currentSlide = 0;
const maxSlide = slides.length;

const goToSlide = slide => {
  slides.forEach(
    (sld, i) => (sld.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

goToSlide(0);

const init = function () {};

const nextSlide = function () {
  if (currentSlide >= maxSlide - 1) currentSlide = 0;
  else currentSlide++;

  goToSlide(currentSlide);

  switchDot(currentSlide);
};

const prevSlide = function () {
  if (currentSlide <= 0) currentSlide = maxSlide - 1;
  else currentSlide--;

  goToSlide(currentSlide);

  switchDot(currentSlide);
};

const createDots = function () {
  slides.forEach(function (_, i) {
    const createBtn = document.createElement('button');
    createBtn.classList.add('dots_dot');
    createBtn.setAttribute('data-slide', `${i}`);

    if (i === 0) createBtn.classList.add('active-dot');

    dotsCont.appendChild(createBtn);
  });
};

createDots();

const switchDot = function (slide) {
  document
    .querySelectorAll('button.dots_dot')
    .forEach(dot => dot.classList.remove('active-dot'));

  document
    .querySelector(`button.dots_dot[data-slide="${slide}"]`)
    .classList.add('active-dot');
};

const dotsFn = function (e) {
  if (e.target.classList.contains('dots_dot')) {
    const {slide} = e.target.dataset;

    goToSlide(slide);

    switchDot(slide);

    currentSlide = slide;
  }
};

slideBtnR.addEventListener('click', nextSlide);
slideBtnL.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {
  e.key === 'ArrowRight' && nextSlide();
  e.key === 'ArrowLeft' && prevSlide();
});

dotsCont.addEventListener('click', dotsFn);
