const button = document.querySelector('#button');
const modal = document.querySelector('#modal');
const close = document.querySelectorAll('.modal__close');
const popup = document.querySelector('#popup');
const popupBtn = document.querySelectorAll('.popup_form');
const popupClose = document.querySelectorAll('.popup_close');
const popupForm = document.querySelector('.popup-form');
const sendForm = document.querySelector('.popup__button');

button.addEventListener('click', () => {
  modal.classList.add('modal_active');
  document.body.style.overflow = 'hidden';
});

close.forEach(el => {
  el.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.body.style.overflow = 'auto';
  });
});

popupBtn.forEach(el => {
  el.addEventListener('click', () => {
    popup.classList.add('popup_active');
    document.body.style.overflow = 'hidden';
  });
});

popupClose.forEach(el => {
  el.addEventListener('click', () => {
    popup.classList.remove('popup_active');
    document.body.style.overflow = 'auto';
  });
});

sendForm.addEventListener('click', () => {
  popupForm.classList.add('popup-form_close');
});
