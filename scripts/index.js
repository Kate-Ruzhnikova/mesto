const selectors = {
    /**profile*/
    profileName: '.profile__name',
    profileDescription: '.profile__description',
    popupOpenButtonProfile: '.profile__edit-button',
    popupOpenButtonCard: '.profile__add-button',

    /**elements*/
    listCards: '.elements__list',

    /**popup*/
    popup: '.popup',
    popupCloseButtonElement: '.popup__close',
        
    /**popupProfile*/
    popupProfile: '.popup_profile',
    popupContainer: '.popup__container',
    popupName: '#popup-name',
    popupDescription: '#popup-description',

    /**popupCards*/
    popupCard: '.popup_card',
    popupContainerCard: '.popup__container-card',
    inputTitle: '#popup-title-card',
    inputLink: '#popup-link',

    /**photo*/
    popupImg: '.popup_img',
    figureImg: '.figure__img',
    figureFigcaption: '.figure__figcaption',

    /**template*/
    templateCard: '.element-template',
}
const profileName = document.querySelector(selectors.profileName);
const profileDescription = document.querySelector(selectors.profileDescription);
const popupOpenButtonProfile = document.querySelector(selectors.popupOpenButtonProfile);
const popupOpenButtonCard = document.querySelector(selectors.popupOpenButtonCard);

const listCards = document.querySelector(selectors.listCards);

const popupProfile = document.querySelector(selectors.popupProfile);
const popupContainer = popupProfile.querySelector(selectors.popupContainer);
const popupName = popupContainer.querySelector(selectors.popupName);
const popupDescription = popupContainer.querySelector(selectors.popupDescription);

const popupCard = document.querySelector(selectors.popupCard);
const popupContainerCard = popupCard.querySelector(selectors.popupContainerCard);
const inputTitle = popupContainerCard.querySelector(selectors.inputTitle);
const inputLink = popupContainerCard.querySelector(selectors.inputLink);

const popupImg = document.querySelector(selectors.popupImg);
const figureImg = document.querySelector(selectors.figureImg);
const figureFigcaption = document.querySelector(selectors.figureFigcaption);

const templateCard = document.querySelector(selectors.templateCard).content; 
const popupCloseButtonElement = document.querySelectorAll(selectors.popupCloseButtonElement);

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeEsc);
}

function closePopup(popup) {
    const openedPopup = document.querySelector('.popup_opened')
    if (openedPopup) {
        openedPopup.classList.remove('popup_opened');
        document.removeEventListener('keydown', closeEsc);
    }
} 

 /**закрытие попапа на оверлей */
function closePopupOnClick(event, popup) {
    if (event.target === popup) {
      closePopup(popup);
    }
  }

 /**закрытие попапа на esc */
function closeEsc(evt) {
    if(evt.key === 'Escape') {
        closePopup();
    }
}

function createCard(cardData) {
    const cardTemplate = templateCard.cloneNode(true);
    const cardPhoto = cardTemplate.querySelector('.elements__photo');         
    const likeButton = cardTemplate.querySelector('.elements__like');
    const textCard = cardTemplate.querySelector('.elements__text');
    const deleteButtonCard = cardTemplate.querySelector('.elements__delete-button');

    /**наполняем содержимым попап карточек */
    cardPhoto.src = cardData.link;
    cardPhoto.alt = cardData.name;
    textCard.textContent = cardData.name;

    likeButton.addEventListener ('click', (evt) => {
        evt.target.classList.toggle('elements__like_active');
    });

    deleteButtonCard.addEventListener ('click', (evt) => {
        evt.target.closest('.elements__card').remove();
    });

    cardPhoto.addEventListener ('click', openPopupImg);

    return cardTemplate;
}

function openPopupImg(evt) {
    figureImg.src = evt.target.src;
    figureImg.alt = evt.target.alt;
    figureFigcaption.textContent = evt.target.alt;
    openPopup(popupImg);
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileDescription.textContent = popupDescription.value;
    closePopup(popupProfile);
}

function handleAddCardSubmit(evt) {
    evt.preventDefault();
    const cardNew = {};
    cardNew.name = inputTitle.value;
    cardNew.link = inputLink.value;
    const templateCard = createCard(cardNew);
    evt.target.reset();                     

    listCards.prepend(templateCard);
    closePopup(popupCard);

    //inputTitle.value = ""; //**После сабмита очистили поля формы*/
    //inputLink.value = ""; 
}

initialCards.forEach((cardData) => {         
    const templateCard = createCard(cardData);
    listCards.append(templateCard);
});

function openPopupProfile() {
    popupName.value = profileName.textContent;
    popupDescription.value = profileDescription.textContent;
    openPopup(popupProfile);
}


popupOpenButtonProfile.addEventListener('click', openPopupProfile);

popupOpenButtonCard.addEventListener('click', () => {
    openPopup(popupCard);
});

popupCloseButtonElement.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => {closePopup(popup);});
    popup.addEventListener('click', (event) => {closePopupOnClick(event, popup);});
});

popupContainer.addEventListener('submit', handleProfileFormSubmit);
popupContainerCard.addEventListener('submit', handleAddCardSubmit);
