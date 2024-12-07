const Config = {
  MAX_TAGS: 5,
  TAG_REGEX: /^#[\wа-яё]{1,19}$/i,
};

const Elements = {
  body: document.body,
  form: document.querySelector('.img-upload__form'),
  overlay: document.querySelector('.img-upload__form .img-upload__overlay'),
  cancelButton: document.querySelector('.img-upload__form .img-upload__cancel'),
  fileField: document.querySelector('.img-upload__form .img-upload__input'),
  hashtagField: document.querySelector('.img-upload__form .text__hashtags'),
  previewImage: document.querySelector('.img-upload__preview img'),
};

const Messages = {
  TOO_MANY_TAGS: `Допускается не более ${Config.MAX_TAGS} тегов`,
  DUPLICATE_TAGS: 'Теги должны быть уникальными',
  INVALID_TAG: 'Неправильный формат тега',
};

const splitAndCleanTags = (inputString) => inputString.trim().split(/\s+/).filter((tag) => tag.length > 0);

const checkTags = (tags) => {
  const uniqueTags = new Set(tags.map((tag) => tag.toLowerCase()));
  return {
    hasValidCount: tags.length <= Config.MAX_TAGS,
    isUnique: uniqueTags.size === tags.length,
    matchesPattern: tags.every((tag) => Config.TAG_REGEX.test(tag)),
  };
};

const validateTags = (inputValue) => {
  const tagsArray = splitAndCleanTags(inputValue);
  const { hasValidCount, isUnique, matchesPattern } = checkTags(tagsArray);
  return hasValidCount && isUnique && matchesPattern;
};

const formValidator = new Pristine(Elements.form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'error-message',
});

formValidator.addValidator(Elements.hashtagField, validateTags, Messages.INVALID_TAG);

const changeModalVisibility = (isVisible) => {
  Elements.overlay.classList.toggle('hidden', !isVisible);
  Elements.body.classList.toggle('modal-open', isVisible);

  if (isVisible) {
    document.addEventListener('keydown', onDocumentKeydown);
  } else {
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};

function onDocumentKeydown(evt) {
  const isTextFieldFocused = document.activeElement.matches('.text__hashtags, .text__description');
  if (evt.key === 'Escape' && !isTextFieldFocused) {
    evt.preventDefault();
    changeModalVisibility(false);
  }
}

Elements.fileField.addEventListener('change', () => changeModalVisibility(true));
Elements.cancelButton.addEventListener('click', () => changeModalVisibility(false));

Elements.form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (formValidator.validate()) {
    Elements.form.submit();
  }
});
