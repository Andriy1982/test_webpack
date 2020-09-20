// import './template.js';
// import article from './article'
import {markup} from './template'
import article from './article'
import articlesTemplate from '../templates/templateArticles.hbs';
// import { resolve } from 'core-js/fn/promise';

//   console.log(markup);
// console.log(article.map(el => el.category));
// console.log(articlesTemplate);
  
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
      inputLast: document.querySelector('input[name="last_name"]')
  }

  

  console.log(ref.form, ref.inputFirst, ref.inputLast, ref.button);

  ref.form.addEventListener('submit', (event) => {
      const {target} = event;
      event.preventDefault();
      console.log(event);
      const name = target.querySelector('input[name="first_name"]')
     
      const secondName = target.querySelector('input[name="last_name"]')
      console.log(name.value);
      console.log(name.value, secondName.value);
    //   const description = document.createElement('p');
    //   console.log(description);
    // description.textContent ="Hellow" +   name.value + secondName.value
    // ref.form.appendChild(description)
    ref.form.insertAdjacentHTML('afterend', `<p class = "discription">${name.value}  ${secondName.value} </p> ${markup} `)

    const selectRef = document.querySelector('.select')
    console.log(selectRef);
    // const div = document.createElement('div');
    // console.log(div);
    selectRef.insertAdjacentHTML('afterend', '<div class = "wraper"></div>')
    const wrap = document.querySelector('.wraper')
    selectRef.addEventListener('change', (event) => {
        // console.log(event.target.value);
const articleShow = article.filter(el => event.target.value === el.category).map(el => el.article)

console.log(articleShow)
const markupArticles = articlesTemplate(articleShow)
console.log(markupArticles);

// wrap.insertAdjacentHTML('afterbegin', `<p> ${articleShow} </p>`);
        wrap.innerHTML = markupArticles;
        
        // console.log(div);
    })

  })

// const select = document.createElement('select') 

// console.log(select);
 
//   ref.form.insertAdjacentHTML('afterend', '')

//   description.textContent = 

// const select = document.querySelector('select[name="select"]')
// console.log(select);

// select.addEventListener('change', (event) => {
//     console.log(event.target.value);
// })

const promise = new Promise(resolve => {
  resolve({a: 34, b: 45}) 
})
promise.then(({a, b}) =>console.log(a, b));

// 34, undefined