const template = document.querySelector('#picture').content.querySelector('.picture');
const gallery = document.querySelector('.pictures');

const createImageElement = (imageData) => {
  const element = template.cloneNode(true);
  element.querySelector('.picture__img').src = imageData.url;
  element.querySelector('.picture__img').alt = imageData.description;
  element.querySelector('.picture__comments').textContent = imageData.comments.length;
  element.querySelector('.picture__likes').textContent = imageData.Likes;
  return element;
};

const renderGallery = (images) => {
  const fragment = document.createDocumentFragment();
  images.forEach((image) => fragment.appendChild(createImageElement(image)));
  gallery.appendChild(fragment);
};

export { renderGallery };
