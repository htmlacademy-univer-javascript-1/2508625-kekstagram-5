import { createPhotoList, PHOTO_COUNT } from './data.js';

const galleryContainer = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const generatePhotoElement = ({ url, description, likes, comments }) => {
  const photoElement = photoTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__img').alt = description;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  photoElement.querySelector('.picture__likes').textContent = likes;
  return photoElement;
};

const photos = createPhotoList(PHOTO_COUNT);
const fragment = document.createDocumentFragment();

photos.forEach((photo) => {
  const photoItem = generatePhotoElement(photo);
  fragment.appendChild(photoItem);
});

galleryContainer.appendChild(fragment);

export { photos, galleryContainer, generatePhotoElement };
