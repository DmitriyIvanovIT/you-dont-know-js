const book = document.querySelectorAll('.book'),
body = document.querySelector('body'),
titleBook3 = book[4].querySelector('h2 a'),
adv = document.querySelector('.adv'),
ulBook2 = book[0].querySelector('ul'),
liBook2 = ulBook2.querySelectorAll('li'),
ulBook5 = book[5].querySelector('ul'),
liBook5 = ulBook5.querySelectorAll('li'),
ulBook6 = book[2].querySelector('ul'),
liBook6 = ulBook6.querySelectorAll('li');

// Востановление порядка книг
book[0].before(book[1]);
book[0].after(book[4]);
book[4].after(book[3]);
book[2].before(book[5]);

// Изменение фонового изображения
body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

// Изменение заголовка
titleBook3.textContent = 'Книга 3. this и Прототипы Объектов';

// Удаление рекламы
adv.remove();

// Восстановление порядка глав во второй книге
liBook2[9].after(liBook2[2]);
liBook2[3].after(liBook2[6]);
liBook2[6].after(liBook2[8]);

// Восстановление порядка глав в пятой книге
liBook5[1].after(liBook5[9]);
liBook5[4].after(liBook5[2]);
liBook5[7].after(liBook5[5]);

// Добавление главы “Глава 8: За пределами ES6” в шестую книгу
const newElem = document.createElement('li');
newElem.textContent = 'Глава 8: За пределами ES6';

liBook6[8].insertAdjacentElement('afterend', newElem);