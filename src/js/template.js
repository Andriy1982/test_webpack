import itemTemplate from '../templates/templateSelect.hbs';

import article from './article'

const arrCategory = article.map(el => el.category).filter((item, index, array) => {
    //   console.log(item.category, index);
return array.indexOf(item) === index
  })
//   console.log(arrCategory);



// const listRef = document.querySelector('.js-menu');

export const markup = itemTemplate(arrCategory);

// listRef.insertAdjacentHTML('afterbegin', markup);
// console.log(markup);