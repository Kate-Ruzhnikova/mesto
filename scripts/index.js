const popupElement = document.querySelector('.popup');

const popupCloseButtonElement = document.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');

const popupSave = document.querySelector('.popup__save');
const popupcontent = document.querySelector('.popup__content');
const popupName = popupcontent.querySelector('#popup-name');
const popupDescription = popupcontent.querySelector('#popup-description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const openPopup = function() {
    popupElement.classList.add('popup_opened');
    popupName.value = profileName.textContent;
    popupDescription.value = profileDescription.textContent;
    
}

const closePopup = function() {
    popupElement.classList.remove('popup_opened');
    
} 

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileDescription.textContent = popupDescription.value;
    closePopup();
}
popupcontent.addEventListener('submit', formSubmitHandler);