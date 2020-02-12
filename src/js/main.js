const button = document.querySelector('#button');
const modal = document.querySelector('#modal');
const close = document.querySelector('#close');

button.addEventListener('click', () => {
  modal.classList.add('modal_active');
});
close.addEventListener('click', () => {
  modal.classList.remove('modal_active');
});
