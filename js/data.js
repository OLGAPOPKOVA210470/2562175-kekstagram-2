import { getRandomInteger } from './util.js';
import { getUnique } from './util.js';
import {getRandomElement } from './util.js';

const NAMES = [
    'Виктория', 'Дарья', 'Алексей', 'Александра', 'Сергей', 'Ульяна', 'Патрик', 'Александр', 'Марина', 'Станислав',
    'Елизавета', 'Валентина', 'Егор', 'Фёдор', 'Ольга', 'Владимир', 'Анна', 'Людмила', 'Зоя', 'Виктор',
    'Анатолий', 'Вадим', 'Светлана', 'Екатерина', 'Мария', 'Михаил', 'Иван', 'Илья', 'Дмитрий', 'Маргарита'
];

const MESSAGES = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
    'Санаторий "Железнодорожник".', 'Солнечный денёк.', 'Дорога к пляжу.', 'Шум прибоя.', 'Вот она-свобода!', 'Отдыхаем.', 'Черная молния.', 'На диете.',
    'Заряд бодрости.', 'Первым делом-самолёты.', 'Разложить всё по полочкам.', 'Прямо пойдешь-к морюшку придёшь.',
    'Зеленоглазое такси.', 'Радуга в тарелке.', 'Кексоролл.', 'Луностопы.', 'В погоне за мечтой.',
    'Вместе весело шагать по просторам и, конечно, припевать лучше хором.', 'Без комментариев.', 'Волшебные калоши.', 'Пальма финиковая - 8 штук.',
    'Все на ужин!', 'Как Магдалена, морская пена.', 'Я тебя съем.', 'Фаер-шоу в Турции.', 'Оставьте бегемота в покое!'
];

const MIN_PHOTOS = 1;
const MAX_PHOTOS = 25;
const DESCRIPTIONS_COUNT = 25;
const MIN_LAKES = 15;
const MAX_LAKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const MIN_AVATARS = 1;
const MAX_AVATARS = 6;

const getUniqueId = getUnique(MIN_PHOTOS, MAX_PHOTOS);
const getUniquePhoto = getUnique(MIN_PHOTOS, MAX_PHOTOS);

//Функция, генерирующая один комментарий
const getComment = () => ({
    id: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS),
    avatar: `img/avatar-${getRandomInteger(MIN_AVATARS, MAX_AVATARS)}.svg`,
    massages: getRandomElement(MESSAGES),
    name: getRandomElement(NAMES),
});

//Функция, генерирующая массив

/*const getComments = () => {
    const count = getRandomInteger(MIN_COMMENTS, MAX_COMMENTS);
    const comments = []
    for (let i = 1; i <= count; i++) {
        comments.push(getComment())
    }
    return comments;
};*/

const getComments = () => Array.from({ length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS) }, getComment);


//функция, создающая одну фотографию (возвращает один объект)  //убрали return и фигурные скобки, добавили круглые скобки
const getPhoto = () => ({
    id: getUniqueId(),
    url: `photos/${getUniquePhoto()}.jpg`,
    description: getRandomElement(DESCRIPTIONS),
    likes: getRandomInteger(MIN_LAKES, MAX_LAKES),
    comments: getComments()
});

/*const createPhotos = () => {
    const result = [];
    for (let i = 1; i <= MAX_PHOTOS; i++) {
        result.push(getPhoto())
    }
    return result;
};*/

const createPhotos = () => Array.from({ length: MAX_PHOTOS }, getPhoto);

console.log(createPhotos())
