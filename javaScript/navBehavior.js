'use strict';

const navigation = document.querySelector('nav.nav');
const navHeight = navigation.getBoundingClientRect().height;
const titleCont = document.querySelector('div.header_title');

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    navigation.classList.add('sticky');
    titleCont.style.paddingTop = `${navHeight}px`;
  } else {
    navigation.classList.remove('sticky');
    titleCont.style.paddingTop = 0;
  }
};

const observeObj = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const headerObserver = new IntersectionObserver(stickyNav, observeObj);
headerObserver.observe(header);
