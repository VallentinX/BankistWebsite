'use strict';

const sections = document.querySelectorAll('section.section');

const revealSection = function (entries, observer) {
  const [entriy] = entries;

  if (!entriy.isIntersecting) return;

  entriy.target.classList.remove('section-hidden');

  observer.unobserve(entriy.target);
};

const observerObj = {
  root: null,
  threshold: 0.15,
};

const sectionObserver = new IntersectionObserver(revealSection, observerObj);

sections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section-hidden');
});
