const massive = [];

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
'Солнечный денёк.', 'Дорога к пляжу.', 'Шум прибоя.', 'Вот она-свобода!', 'Отдыхаем.', 'Черная молния.', 'На диете.', 
'Заряд бодрости.', 'Первым делом-самолёты.', 'Разложить всё по полочкам.', 'Прямо пойдешь-к морюшку придёшь.', 
'Зеленоглазое такси.', 'Радуга в тарелке.', 'Кексоролл.', 'Луностопы.', 'В погоне за мечтой.',
 'Вместе весело шагать по просторам и, конечно, припевать лучше хором.', 'Без комментариев.', 'Волшебные калоши.', 'Пальма финиковая - 8 штук.',
  'Все на ужин!', 'Как Магдалена, морская пена.', 'Я тебя съем.', 'Фаер-шоу в Турции.', 'Оставьте бегемота в покое!' 
];

const PHOTOS_COUNT = 25;

const LAKES_MINIMUM_QUANTITY = 15;

const LAKES_MAXIMUM_QUANTITY = 200;

const COMMENTS_MINIMUM_QUANTITY = 0;

const COMMENTS_MAXIMUM_QUANTITY = 30;

const AVATARS_MINIMUM_QUANTITY = 1;

const AVATARS_MAXIMUM_QUANTITY = 6;