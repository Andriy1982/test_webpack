import itemTemplate from '../templates/templateSelect.hbs';
import article from './article';

const arrCategory = article
  .map(el => el.category)
  .filter((item, index, array) => {
    return array.indexOf(item) === index;
  });

export const markup = itemTemplate(arrCategory);
