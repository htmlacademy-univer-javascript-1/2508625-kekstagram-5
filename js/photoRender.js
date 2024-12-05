import { createPhotoList, PHOTO_COUNT } from './data.js';

const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createPictures = createPhotoList(PHOTO_COUNT);
const similarListFragment = document.createDocumentFragment();

createPictures.forEach(({ url, description, likes, comments }) => {
  const picture = pictureTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;
  similarListFragment.appendChild(picture);
});

picturesList.appendChild(similarListFragment);
