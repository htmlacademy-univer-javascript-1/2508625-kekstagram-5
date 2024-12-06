import { getRandomInt, pickRandomElement } from './util.js';

export const PHOTO_COUNT = 25;
export const LIKES = { MIN: 15, MAX: 200 };
export const COMMENTS = { MIN: 0, MAX: 30 };
export const AVATAR_COUNT = 6;
export const COMMENT_ID_MAX = 1000;

const DESCRIPTIONS = [
  'Утро на природе!',
  'Я так счастлива!',
  'Никогда ничего не бойтесь, живите здесь и сейчас. Кайфуйте, Жизнь одна!',
  'Я и кто?',
  'В моем словаре нет слова «невозможно»!'
];

const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const userNames = ['Костя', 'Катерина', 'Иван', 'Мария', 'Алена', 'Анна', 'Дмитрий', 'Кузьма'];

export const createComments = () => {
  const comments = [];
  const numberOfComments = getRandomInt(COMMENTS.MIN, COMMENTS.MAX);

  for (let i = 0; i < numberOfComments; i++) {
    comments.push({
      id: getRandomInt(1, COMMENT_ID_MAX),
      avatar: `img/avatar-${getRandomInt(1, AVATAR_COUNT)}.svg`,
      message: `${pickRandomElement(COMMENT_MESSAGES)} ${Math.random() < 0.5 ? pickRandomElement(COMMENT_MESSAGES) : ''}`.trim(),
      name: pickRandomElement(userNames),
    });
  }
  return comments;
};

export const createPhotoList = (count) => {
  const photoList = [];

  for (let i = 1; i <= count; i++) {
    photoList.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: pickRandomElement(DESCRIPTIONS),
      likes: getRandomInt(LIKES.MIN, LIKES.MAX),
      comments: createComments(),
    });
  }

  return photoList;
};
