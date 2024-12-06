import { photos, galleryContainer } from './photoRender.js';

const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

function onEscPress(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
}

function closeBigPicture() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscPress);
}

function openBigPicture(photo) {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEscPress);

  bigPicture.querySelector('.big-picture__img img').src = photo.url;
  bigPicture.querySelector('.big-picture__img img').alt = photo.description;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.comments-count').textContent = photo.comments.length;
  bigPicture.querySelector('.social__caption').textContent = photo.description;

  const commentsList = bigPicture.querySelector('.social__comments');
  commentsList.innerHTML = '';

  photo.comments.forEach((comment) => {
    const commentElement = createCommentElement(comment);
    commentsList.appendChild(commentElement);
  });

  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
}

function createCommentElement(comment) {
  const commentElement = document.createElement('li');
  commentElement.classList.add('social__comment');

  const commentAvatar = document.createElement('img');
  commentAvatar.classList.add('social__picture');
  commentAvatar.src = comment.avatar;
  commentAvatar.alt = comment.name;
  commentAvatar.width = 35;
  commentAvatar.height = 35;

  const commentText = document.createElement('p');
  commentText.classList.add('social__text');
  commentText.textContent = comment.message;

  commentElement.appendChild(commentAvatar);
  commentElement.appendChild(commentText);

  return commentElement;
}

galleryContainer.addEventListener('click', (evt) => {
  const target = evt.target.closest('.picture');
  if (target) {
    const photoIndex = [...galleryContainer.querySelectorAll('.picture')].indexOf(target);
    const photoData = photos[photoIndex];
    openBigPicture(photoData);
  }
});

closeButton.addEventListener('click', closeBigPicture);
