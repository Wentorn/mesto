const popup = document.querySelector('.popup');
const nameInput = document.querySelector('.popup__input_name'); 
const descInput = document.querySelector('.popup__input_description'); 
const iconClose = document.querySelector('.popup__button-close'); 
const formElement = document.querySelector('.popup__form');
const textName = document.querySelector('.profile__name'); 
const textDesc = document.querySelector('.profile__description'); 
const editButton = document.querySelector('.profile__button-edit'); 
const iconLike = document.querySelector('.elements__button-like');

function onPopup () {
    popup.classList.add('popup_active');
    nameInput.value = textName.textContent;
    descInput.value = textDesc.textContent;
}

function closePopup () {
    popup.classList.remove('popup_active');
}

function formSubmitHandler (data) {
    data.preventDefault(); 
    textName.textContent = nameInput.value;
    textDesc.textContent = descInput.value;
    closePopup();
}

function toggleLike () {
    if (iconLike.classList.contains('elements__button-like_active')) {
        iconLike.classList.remove("elements__button-like_active");
    } else {
        iconLike.classList.add("elements__button-like_active");
    }
  }

formElement.addEventListener('submit', formSubmitHandler);
iconClose.addEventListener('click', closePopup);
editButton.addEventListener('click', onPopup);
iconLike.addEventListener('click', toggleLike);
