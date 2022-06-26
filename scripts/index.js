document.querySelector('.popup'); /*обращаемся к селектору*/
const popupElement = document.querySelector('.popup'); /*сохранили в переменную*/
console.log('popupElement'); /*Выводим в консоль наш элемент*/

/*Кнопки закрытия и открытия*/
const popupCloseButtonElement = document.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__button_edit');

const popupContainer = document.querySelector('.popup__container');
const popupName = document.querySelector('.popup__name');
const popupDescription = document.querySelector('.popup__description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const inputName = profileName;
const inputDescription = profileDescription;
inputName.value = profileName.textContent;
inputDescription.value = profileDescription.textContent;

const togglePopupVisibility = function() {
    popupElement.classList.toggle('.popup__is-opened');

}
const openPopup = function() {
    popupElement.classList.add('popup__is-opened');
    
}
const closePopup = function() {
    inputName.value = profileName.textContent;
    inputDescription.value = profileDescription.textContent;
    popupElement.classList.remove('popup__is-opened');
    
} 

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);


function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;
}
popupContainer.addEventListener('submit', formSubmitHandler);

















