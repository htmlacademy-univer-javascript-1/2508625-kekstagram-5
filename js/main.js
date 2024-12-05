import { renderGallery } from './renderGallery.js';
import { createPhotoList, PHOTO_COUNT } from './data.js';

const photos = createPhotoList(PHOTO_COUNT);
renderGallery(photos);
