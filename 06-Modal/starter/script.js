'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsShowModel = document.querySelectorAll('.show-modal');

console.log(btnsShowModel);

const openModel = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModel.length; i++) {
  btnsShowModel[i].addEventListener('click', openModel);
}

btnCloseModel.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
});
