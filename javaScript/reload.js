'use strict';

const bfUnld = function (e) {
  e.preventDefault();
  console.log('Page unload yet!', e);
  e.returnValue = '';
};

window.addEventListener('beforeunload', bfUnld);
