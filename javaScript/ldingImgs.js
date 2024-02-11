'use strict';

const imgs = document.querySelectorAll('img.features_img');

const imgObservFn = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserveObj = {
  root: null,
  threshold: 0,
  rootMargin: '150px',
};

const imageObserver = new IntersectionObserver(imgObservFn, imgObserveObj);

imgs.forEach(img => imageObserver.observe(img));
