'use strict';

const btnTabCtnr = document.querySelector('div.operations_tab-container');
const btnTab = document.querySelectorAll('button.operations_tab');
const tabsContent = document.querySelectorAll('div.operations_content');

const switchTab = function (e) {
  const clicked = e.target.closest('.operations_tab');

  if (!clicked) return;

  btnTab.forEach(btn => btn.classList.remove('operations_tab-active'));

  clicked.classList.add('operations_tab-active');

  tabsContent.forEach(tab => tab.classList.remove('operations_content-active'));

  const content = document.querySelector(
    `.operations_content-${clicked.dataset.tab}`
  );
  content.classList.add('operations_content-active');
};

btnTabCtnr.addEventListener('click', switchTab);
