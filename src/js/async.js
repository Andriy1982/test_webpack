// import itemTemplate from '../templates/testTemplate.hbs';
import itemTemplateFoto from '../templates/test.hbs';
// import fetchArticles from './fetch-articles';

const listRef = document.querySelector('.articles');
const formRef = document.querySelector('.js-search-form');
const loadMoreBtnRef = document.querySelector('[data-action="load-more"]');

console.log(loadMoreBtnRef);
let searchQuery = '';
let urlPixibay = '';

formRef.addEventListener('submit', event => {
  event.preventDefault();
  const { currentTarget } = event;
  searchQuery = currentTarget.elements.query.value;

  listRef.innerHTML = '';

  urlPixibay = `https://pixabay.com/api/?key=18396149-73dfa4d2cc3cf60487110b893&q=${searchQuery}&per_page=5&page=2`;

  fetch(urlPixibay)
    .then(response => response.json())
    .then(({ hits }) => fotoMarkup(hits));

  //   fetchArticles(inputValue).then(updateArticlesMarkup);
  formRef.reset();
});

loadMoreBtnRef.addEventListener('click', () => {
  console.log('Hello');
  console.log(urlPixibay);
  fetch(urlPixibay)
    .then(response => response.json())
    .then(({ hits }) => fotoMarkup(hits));
});

// const options = {
//   method: 'GET',
//   headers: {
//     Accept: 'application/json',
//   },
// };

// fetch('https://jsonplaceholder.typicode.com/todos', options)
//   .then(response => {
//     console.log(response);
//     return response.json();
//   })
//   .then(data => console.log(data));

// function updateArticlesMarkup(hits) {
//   const markup = itemTemplate(hits);
//   listRef.insertAdjacentHTML('beforeend', markup);
// }

// const urlPixibay =
//   'https://pixabay.com/api/?key=18396149-73dfa4d2cc3cf60487110b893&q=yellow+flowers&pretty=true&per_page=5';

// fetch(urlPixibay)
//   .then(response => response.json())
//   .then(({ hits }) => fotoMarkup(hits));

function fotoMarkup(obj) {
  const markupFoto = itemTemplateFoto(obj);
  listRef.insertAdjacentHTML('beforeend', markupFoto);
}
