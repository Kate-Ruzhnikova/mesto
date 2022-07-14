const selectors = {
    //profile
    profileName: '.profile__name',
    profileDescription: '.profile__description',
    popupOpenButtonProfile: '.profile__edit-button',
    popupOpenButtonCard: '.profile__add-button',

    //elements
    elementsList: '.elements__list',
    elements: '.elements',

    //popup
    popupElement: '.popup',
    popupCloseButtonElement: '.popup__close',
        
    //popupProfile
    popupProfile: '.popup-profile',
    popupContainer: '.popup__container',
    popupName: '#popup-name',
    popupDescription: '#popup-description',

    //popupCards
    popupCard: '.popup-card',
    popupContainerCard: '.popup__container-card',
    inputTitle: '#popup-title-card',
    inputLink: '#popup-link',

    //photo
    popupImg: '.popup-img',
    figureImg: '.figure__img',
    figureFigcaption: '.figure__figcaption',

    //template
    templateElement: '.element-template',

}
const profileName = document.querySelector(selectors.profileName);
const profileDescription = document.querySelector(selectors.profileDescription);
const popupOpenButtonProfile = document.querySelector(selectors.popupOpenButtonProfile);
const popupOpenButtonCard = document.querySelector(selectors.popupOpenButtonCard);

const elementsList = document.querySelector(selectors.elementsList);
const elements = document.querySelector(selectors.elements);

const popupElement = document.querySelector(selectors.popupElement);
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

const templateElement = document.querySelector(selectors.templateElement).content; 
const popupCloseButtonElement = document.querySelectorAll(selectors.popupCloseButtonElement);

function openPopup(popup) {
    popup.classList.add("popup_opened");
}

function closePopup(popup) {
    popup.classList.remove("popup_opened");
    
} 

function createCard(item) {                               
    const cardTemplate = templateElement.cloneNode(true);
    const elementsPhoto = cardTemplate.querySelector(".elements__photo");
    const likeButton = cardTemplate.querySelector(".elements__like");
    const textElement = cardTemplate.querySelector(".elements__text");
    const deleteButtonElement = cardTemplate.querySelector(".elements__delete-button");

    elementsPhoto.src = item.link;
    elementsPhoto.alt = item.name
    textElement.textContent = item.name;

    likeButton.addEventListener ("click", (evt) => {
        evt.target.classList.toggle("elements__like_active");
    });

    deleteButtonElement.addEventListener ("click", (evt) => {
        evt.target.closest(".elements__card").remove();
  });

  elementsPhoto.onclick = function () {
    openPopup(popupImg);
    figureImg.src = item.link;
    figureImg.alt = item.name;
    figureFigcaption.textContent = item.name;

};
  return cardTemplate;

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
    const templateElement = createCard(cardNew);

    elementsList.prepend(templateElement);
    closePopup(popupCard);
    
}

initialCards.forEach((item) => {
    const templateElement = createCard(item);
    elementsList.append(templateElement);
  });


popupOpenButtonProfile.addEventListener('click', () => {
    openPopup(popupProfile);
    popupName.value = profileName.textContent;
    popupDescription.value = profileDescription.textContent;
})

popupOpenButtonCard.addEventListener("click", () => {
    openPopup(popupCard);
  });

popupCloseButtonElement.forEach((button) => {
    const popup = button.closest(".popup");
    button.addEventListener("click", () => {closePopup(popup);});
  });

popupContainer.addEventListener('submit', handleProfileFormSubmit);
popupContainerCard.addEventListener('submit', handleAddCardSubmit);
