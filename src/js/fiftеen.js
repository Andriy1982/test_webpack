const wrapRef = document.querySelector('.wrapper');

import buttonTemplate from '../templates/fifteen.hbs';

const array = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 0],
];

array.forEach(el => {
  el.forEach((elem, ind, arrrr) => {
    elem += 5;
    console.log(elem);
  });
});
console.log(array);

const getRandomInRange = (min, max) => {
  // const arr = [];
  // for (let i = min; i <= max; i++) arr.push(i);

  // return arr;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const newArray = array.map(item => {
  return item.map(nextItem => {
    nextItem = getRandomInRange(1, 15);
    return nextItem;
  });
});
console.log(newArray);

console.log(getRandomInRange(1, 15));
const testArr = new Array(15);

console.log(testArr);
console.log(
  testArr.map((el, index, arr) => {
    console.log(el, index);
    el = index;
    return el;
  }),
);
// console.log(buttonTemplate(arr));
// let searchValue = 13;

console.log(array[2][4] == 0);
// console.log(array[-1][0]);
console.table(array);

// console.log(array[0].indexOf(4));

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

  const prevElement = array[indexFirst][indexSecond - 1];
  const nextElement = array[indexFirst][indexSecond + 1];
  const topElement =
    indexFirst === 0 ? null : array[indexFirst - 1][indexSecond];
  const bottomElement =
    indexFirst === 3 ? null : array[indexFirst + 1][indexSecond];

  if (prevElement === 0) {
    array[indexFirst][indexSecond - 1] = searchValue;
    array[indexFirst][indexSecond] = 0;
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
    array[indexFirst][indexSecond + 1] = searchValue;
    array[indexFirst][indexSecond] = 0;
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
    array[indexFirst - 1][indexSecond] = searchValue;
    array[indexFirst][indexSecond] = 0;
    console.log(wrapRef.querySelector(`[data-value="${searchValue}"]`));
    const el = wrapRef.querySelector(`[data-value="${searchValue}"]`);
    //  const elZero = wrapRef.querySelector('[data-value="0"]');
    // el.style.bottom = '0px';
    el.style.bottom = `${parseInt(el.style.bottom, 10) + 62}px`;
    //  elZero.style.bottom = '62px';
    return;
  }
  if (bottomElement === 0) {
    array[indexFirst + 1][indexSecond] = searchValue;
    array[indexFirst][indexSecond] = 0;
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
  toggleNumber(foobar(array, searchValue), searchValue);
  console.log(foobar(array, searchValue), searchValue);
  // event.target.textContent = 0;
  // event.target.style;
  // event.target.style.right = '-60px';
  // console.log(wrapRef.dataset.activ);
  console.table(array);
});
