import { generatePhotoElement } from './photoRender.js';
import {loadData} from './api.js';
import './photoRender.js';
import './miniatures.js';
import './big-picture.js';
import './form.js';

let loadedPhotos = [];

const onSuccess = (data) => {
  loadedPhotos = data.slice();
  generatePhotoElement(loadedPhotos);
  const event = new CustomEvent('photosLoaded', { detail: loadedPhotos });
  document.dispatchEvent(event);
};

const onFail = () => {
  const messageAlert = document.createElement('div');
  messageAlert.style.position = 'absolute';
  messageAlert.style.left = 0;
  messageAlert.style.top = 0;
  messageAlert.style.right = 0;
  messageAlert.style.padding = '10px 3px';
  messageAlert.style.fontSize = '30px';
  messageAlert.style.backgroundColor = 'red';
  messageAlert.style.textAlign = 'center';
  messageAlert.textContent = 'Ошибка загрузки фотографий';
  document.body.append(messageAlert);
};

loadData(onSuccess, onFail);
