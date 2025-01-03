const closeButton = document.querySelector('#picture-cancel');
const bigPicture = document.querySelector('.big-picture');

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const closeOnEsc = (evt) => {
  if (evt.key === 'Escape') {
    closeBigPicture();
  }
};

closeButton.addEventListener('click', closeBigPicture);
document.addEventListener('keydown', closeOnEsc);

export { closeOnEsc };
