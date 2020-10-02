
  
import { markup } from './template';
import article from './article';
import articlesTemplate from '../templates/templateArticles.hbs';

// Фукционал
//  - Пользователь может ввести свое имя и фамилию в форму и отправить ее
//  - После отправки, под формой вы должны отрендерить надпись {name} {secondName},
// выбирите категорию новостей а также селектор где пользователь может выбрать 1 из 3 категорий новостей
//  - После выбора категории новости вы должны отрендерить те новости которые выбрал пользователь
//  - Пользователь может выбрать другую категорию, вы должны отрендерить новости из новой категории
// - При перезагрузке страницы имя пользовател и выбранная категория должна сохранятся

const ref = {
  form: document.querySelector('.form'),
  button: document.querySelector('.btn'),
  inputFirst: document.querySelector('input[name="first_name"]'),
  inputLast: document.querySelector('input[name="last_name"]'),
};





function handlerForm(event) {
  event.preventDefault();

  if (document.querySelector('.select')) {
    return;
  }

  ref.form.insertAdjacentHTML(
    'afterend',
    `<p class = "description">${ref.inputFirst.value}  ${ref.inputLast.value} выбирите категорию новостей</p> ${markup} `,
  );
  const selectRef = document.querySelector('.select');
  selectRef.insertAdjacentHTML('afterend', `<div class = "wraper"></div>`);
  selectRef.addEventListener('change', handlerSelect);

  localStorage.setItem('firstName', ref.inputFirst.value);
  localStorage.setItem('SecondName', ref.inputLast.value);

  ref.form.reset();
}

function handlerSelect({ target }) {
  const wrap = document.querySelector('.wraper');
  const articleShow = article
    .filter(el => target.value === el.category)
    .map(el => el.article);

  localStorage.setItem('category', target.value);

  wrap.innerHTML = articlesTemplate(articleShow);
}

function writeWithLocalstorage() {
  if (localStorage.getItem('firstName')) {
    ref.inputFirst.value = localStorage.getItem('firstName');
    ref.inputLast.value = localStorage.getItem('SecondName');
  }
}

ref.form.addEventListener('submit', handlerForm);

writeWithLocalstorage();