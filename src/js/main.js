const button = document.querySelector('#button');
const modal = document.querySelector('#modal');
const close = document.querySelectorAll('.modal__close');

button.addEventListener('click', () => {
  modal.classList.add('modal_active');
});

close.forEach(el => {
  el.addEventListener('click', () => {
    modal.classList.remove('modal_active');
  });
});
