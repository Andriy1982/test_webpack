const wrapRef = document.querySelector('.wrapper');

const array = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 0],
];

// let searchValue = 13;

console.log(array[2][4] == 0);
// console.log(array[-1][0]);
console.table(array);

// console.log(array[0].indexOf(4));

function foobar(inputArray, searchValue) {
  for (var i = 0, L = inputArray.length; i < L; i++) {
    var j = inputArray[i].indexOf(searchValue);

    if (j >= 0) {
      return [i, j];
    }
  }

  return null;
}

// const findIndex = foobar(array, searchValue);

// console.log(findIndex);

const toggleNumber = (arr, searchValue) => {
  const [indexFirst, indexSecond] = arr;

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
    //   el.style.left = '-60px';
    //   return;
    // }
    el.style.left = el.style.left ? '0px' : '-60px';
    //  elZero.style.bottom = '62px';
    return;
  }
  if (nextElement === 0) {
    array[indexFirst][indexSecond + 1] = searchValue;
    array[indexFirst][indexSecond] = 0;
    console.log(wrapRef.querySelector(`[data-value="${searchValue}"]`));
    const el = wrapRef.querySelector(`[data-value="${searchValue}"]`);
    //  const elZero = wrapRef.querySelector('[data-value="0"]');
    el.style.left = '62px';
    //  elZero.style.bottom = '62px';
    return;
  }
  if (topElement === 0) {
    array[indexFirst - 1][indexSecond] = searchValue;
    array[indexFirst][indexSecond] = 0;
    console.log(wrapRef.querySelector(`[data-value="${searchValue}"]`));
    const el = wrapRef.querySelector(`[data-value="${searchValue}"]`);
    //  const elZero = wrapRef.querySelector('[data-value="0"]');
    el.style.bottom = '0px';
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
    el.style.bottom = '-62px';
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
  toggleNumber(foobar(array, searchValue), searchValue);
  console.log(foobar(array, searchValue), searchValue);
  // event.target.textContent = 0;
  // event.target.style;
  // event.target.style.right = '-60px';
  // console.log(wrapRef.dataset.activ);
  console.table(array);
});
