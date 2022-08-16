// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).


const navItemEl = document.querySelector('#categories');
console.log('Number of categories:', navItemEl.children.length);

const totalLiEl = navItemEl.querySelectorAll('li.item');

totalLiEl.forEach(item => {
    console.log('Category:', item.querySelector('h2').textContent);
    console.log('Elements:', item.querySelectorAll('li').length);
});
