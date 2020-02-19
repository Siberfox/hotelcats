const button = document.querySelector('#button');
const modal = document.querySelector('#modal');
const close = document.querySelectorAll('.modal__close');
const popup = document.querySelector('#popup');
const popupBtn = document.querySelectorAll('.popup_form');
const popupClose = document.querySelectorAll('.popup_close');

button.addEventListener('click', () => {
  modal.classList.add('modal_active');
});

close.forEach(el => {
  el.addEventListener('click', () => {
    modal.classList.remove('modal_active');
  });
});

popupBtn.forEach(el => {
  el.addEventListener('click', () => {
    popup.classList.add('popup_active');
  });
});

popupClose.forEach(el => {
  el.addEventListener('click', () => {
    popup.classList.remove('popup_active');
  });
});
