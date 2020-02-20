const modal = document.querySelector('#modal');
const modalButton = document.querySelector('#button');
const modalClose = document.querySelectorAll('.modal__close');
const popup = document.querySelector('#popup');
const popupButton = document.querySelectorAll('.popup_form');
const popupClose = document.querySelectorAll('.popup--close');
const popupForm = document.querySelector('.popup-form');
const sendForm = document.querySelector('.popup__button');
const popupSuccess = document.querySelector('.popup-success');

modalButton.addEventListener('click', () => {
  modal.classList.add('modal_active');
  document.body.style.overflow = 'hidden';
});

modalClose.forEach(el => {
  el.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.body.style.overflow = 'auto';
  });
});

popupButton.forEach(el => {
  el.addEventListener('click', () => {
    popup.classList.add('popup_active');
    document.body.style.overflow = 'hidden';
  });
});

popupClose.forEach(el => {
  el.addEventListener('click', () => {
    popup.classList.remove('popup_active');
    popupForm.classList.remove('popup-form_close');
    popupSuccess.classList.remove('popup-success--open');
    document.body.style.overflow = 'auto';
  });
});

sendForm.addEventListener('click', () => {
  popupForm.classList.add('popup-form_close');
  popupSuccess.classList.add('popup-success--open');
});
