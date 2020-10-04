const wrapRef = document.querySelector('.wrapper');
const wrap1Ref = document.querySelector('.test');

import buttonTemplate from '../templates/fifteen.hbs';


const array = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 0],
];

const arr = [];
for (let i = 1 ; i <= 15; i++) arr.push(i);

const getRandomInRange = (min, max) => {
 
  let [elem] = arr.splice(arr.indexOf(Math.floor(Math.random() * (max - min + 1)) + min),1)

return elem;
};

const newArray = array.map(item => {
  return item.map(nextItem => {
    if (nextItem) {
    nextItem = getRandomInRange(1,15);
    }
    return nextItem;
  });
});

console.log(getRandomInRange());

console.log(buttonTemplate(newArray));

wrapRef.innerHTML = buttonTemplate(newArray)


console.table(newArray);


function foobar(inputArray, searchValue) {
  for (let i = 0, L = inputArray.length; i < L; i++) {
    let j = inputArray[i].indexOf(searchValue);

    if (j >= 0) {
      return [i, j];
    }
  }

  return null;
}

// const findIndex = foobar(array, searchValue);

// console.log(findIndex);

// const changeStyle = () => {
//   let numberTurOn = 62;
//   let localParameter += numberTurOn
//     el.style.bottom = +'px';
// };

const toggleNumber = (arr, searchValue) => {
  const [indexFirst, indexSecond] = arr;

  let numberTurOn = 62;
  let localParameter = 0;

  const prevElement = newArray[indexFirst][indexSecond - 1];
  const nextElement = newArray[indexFirst][indexSecond + 1];
  const topElement =
    indexFirst === 0 ? null : newArray[indexFirst - 1][indexSecond];
  const bottomElement =
    indexFirst === 3 ? null : newArray[indexFirst + 1][indexSecond];

  if (prevElement === 0) {
    newArray[indexFirst][indexSecond - 1] = searchValue;
    newArray[indexFirst][indexSecond] = 0;
    console.log(wrapRef.querySelector(`[data-value="${searchValue}"]`));
    const el = wrapRef.querySelector(`[data-value="${searchValue}"]`);
    //  const elZero = wrapRef.querySelector('[data-value="0"]');
    // if (!el.style.left) {
    // el.style.left = '0px';
    //   return;
    // }
    el.style.left = `${parseInt(el.style.left, 10) - 62}px`;
    // el.style.left = '0px';
    // el.style.left = el.style.left ? '0px' : '-60px';
    //  elZero.style.bottom = '62px';
    return;
  }
  if (nextElement === 0) {
    newArray[indexFirst][indexSecond + 1] = searchValue;
    newArray[indexFirst][indexSecond] = 0;
    console.log(wrapRef.querySelector(`[data-value="${searchValue}"]`));
    const el = wrapRef.querySelector(`[data-value="${searchValue}"]`);
    //  const elZero = wrapRef.querySelector('[data-value="0"]');
    // localParameter += numberTurOn;
    // el.style.left = `${localParameter}px`;
    console.log(parseInt(el.style.left, 10));
    el.style.left = `${parseInt(el.style.left, 10) + 62}px`;

    //  elZero.style.bottom = '62px';
    return;
  }
  if (topElement === 0) {
    newArray[indexFirst - 1][indexSecond] = searchValue;
    newArray[indexFirst][indexSecond] = 0;
    console.log(wrapRef.querySelector(`[data-value="${searchValue}"]`));
    const el = wrapRef.querySelector(`[data-value="${searchValue}"]`);
    //  const elZero = wrapRef.querySelector('[data-value="0"]');
    // el.style.bottom = '0px';
    el.style.bottom = `${parseInt(el.style.bottom, 10) + 62}px`;
    //  elZero.style.bottom = '62px';
    return;
  }
  if (bottomElement === 0) {
    newArray[indexFirst + 1][indexSecond] = searchValue;
    newArray[indexFirst][indexSecond] = 0;
    let number = 0;
    // console.log(wrapRef.dataset.Value);
    console.log(wrapRef.querySelector(`[data-value="${searchValue}"]`));
    const el = wrapRef.querySelector(`[data-value="${searchValue}"]`);
    const elZero = wrapRef.querySelector('[data-value="0"]');
    // el.style.bottom = '-62px';
    el.style.bottom = `${parseInt(el.style.bottom, 10) - 62}px`;
    // elZero.style.bottom = '62px';
    return;
  }

  return [prevElement, nextElement, topElement, bottomElement];
};

// console.log(toggleNumber(findIndex));

// console.table(array);

// searchValue = 7;

// toggleNumber(foobar(array, searchValue));

// console.table(array);

// console.log(wrapRef);

wrapRef.addEventListener('click', event => {
  // console.log(+event.target.textContent);
  const searchValue = +event.target.textContent;
  console.log(searchValue);
  if (!searchValue) return;
  toggleNumber(foobar(newArray, searchValue), searchValue);
  console.log(foobar(newArray, searchValue), searchValue);
  // event.target.textContent = 0;
  // event.target.style;
  // event.target.style.right = '-60px';
  // console.log(wrapRef.dataset.activ);
  console.table(newArray);
});

let b = 20;

if (true) {
  console.log(b);
  let b = 10;
}
const MAX = 10;
let amount = 0;

const confused = 'no';
const myKey = confused;

const dog = { name: 'Poly' };

const fn = arr => arr.map(el => {
  const item = document.createElement('div');
  item.textContent = el;

  return item;
 });

console.log(fn(['html', 'css', 'js', 'react']));

window.addEventListener('beforeunload', (event) => {

  console.log('hello');
  console.log(event);
  // Отмените событие, как указано в стандарте.
  event.preventDefault();
  // Хром требует установки возвратного значения.
  // event.returnValue = '';
});

window.onpopstate = function(event) {
  console.log(event);
  // alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
};

// history.pushState({page: 1}, "title 1", "?page=1");
// history.pushState({page: 2}, "title 2", "?page=2");
// history.replaceState({page: 3}, "title 3", "?page=3");
// history.back(); // alerts "location: http://example.com/example.html?page=1, state: {"page":1}"
// history.back(); // alerts "location: http://example.com/example.html, state: null
// history.go(2);  // alerts "location: http://example.com/example.html?page=3, state: {"page":3}