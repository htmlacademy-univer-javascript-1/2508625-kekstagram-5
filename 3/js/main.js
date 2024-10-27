const PHOTO_COUNT = 25;
const LIKES = { MIN: 15, MAX: 200 };
const COMMENTS = { MIN: 0, MAX: 30 };
const AVATAR_COUNT = 6;
const COMMENT_ID_MAX = 1000;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const pickRandomElement = (array) => array[getRandomInt(0, array.length - 1)];

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

const createComments = () => {
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

const createPhotoList = () => {
  const photoList = [];

  for (let i = 1; i <= PHOTO_COUNT; i++) {
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

const photos = createPhotoList();

photos();

