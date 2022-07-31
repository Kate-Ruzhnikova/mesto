const formProfile = {
    form: '.popup__content',
    button: '.popup__save',
    buttonInvalid: 'popup__save_type_invalid',
    borderInvalid: 'popup__error'
};

function enableValidation(config) {
    const form = document.querySelectorAll(config.form);
    form.forEach((form) => {form.addEventListener('input', (event) => handleFormInput(event, config));});
}

function handleFormInput(event, config) {
    const input = event.target;
    const form = event.currentTarget;
    showFieldError(input);
    setSubmitButtonState(form, config);
}

function showFieldError(input) {
    const span = input.nextElementSibling;
    span.textContent = input.validationMessage;
}

function setSubmitButtonState(form, config) {
    const button = form.querySelector(config.button);
    const isValid = form.checkValidity();
    if (isValid) {
      button.removeAttribute('disabled');
      button.classList.remove(config.buttonInvalid);
    } else {
      button.setAttribute('disabled', true);
      button.classList.add(config.buttonInvalid);
    }
  }
  
  enableValidation(formProfile);

