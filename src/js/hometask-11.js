// const { bind } = require("core-js/fn/function");

// const { construct } = require("core-js/fn/reflect");

// const colors = [
//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
// ];

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const ref = {
//   btnStart: document.querySelector('button[data-action="start"]'),
//   btnStop: document.querySelector('button[data-action="stop"]'),
//   body: document.querySelector('body'),
// };

// const getThems = {
//   intervalid: null,
//   isActive: false,
//   start() {
//     // if (this.isActive) {
//     //   return;
//     //   }
//     ref.btnStart.disabled = true;
//     this.isActive = true;
//     this.intervalid = setInterval(() => {
//       ref.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
//     }, 1000);
//   },
//   stop() {
//     clearInterval(this.intervalid);
//     ref.btnStart.disabled = false;
//     this.intervalid = null;
//     this.isActive = false;
//   },
// };

// ref.btnStart.addEventListener('click', getThems.start.bind(getThems));
// ref.btnStop.addEventListener('click', getThems.stop.bind(getThems));

/************************************************************** */

//Задание 1
// const delay = ms => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(ms);
//     }, ms);
//   });
//   // Твой код
// };

// const logger = time => console.log(`Resolved after ${time}ms`);

// // Вызовы функции для проверки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms

//Задание 2

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );

//   callback(updatedUsers);
// };
// const toggleUserState = (allUsers, userName) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const updatedUsers = allUsers.map(user =>
//         user.name === userName ? { ...user, active: !user.active } : user,
//       );
//       resolve(updatedUsers);
//     }, 4000);
//   });
//   return promise;
// };
// console.log(toggleUserState);

// const logger = updatedUsers => console.table(updatedUsers);

/*
 * Сейчас работает так
 */
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);
// toggleUserState(users, 'Ajax', logger);
// toggleUserState(users, 'Poly', logger);

// /*
//  * Должно работать так
//  */
// toggleUserState(users, 'Mango').then(logger);
// toggleUserState(users, 'Lux').then(logger);

// console.log('Ghl');

//Задание 3
// console.log(transaction);
const makeTransaction = transaction => {
  return new Promise((resolve, reject) => {
    // resolve({ transaction: id, transaction: amount });
    const delay = randomIntegerFromInterval(200, 500);
    // console.log(delay1);
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;
      console.log(delay);
      if (canProcess) {
        resolve({ id: transaction.id, time: delay });
      }
      reject(transaction.id);
    }, delay);
  });
};
// console.log(makeTransaction);
// console.log(delay(200, 500));
const logSuccess = ({ id, time }) => {
  //   console.log(id, time);
  console.log(`Transaction ${id} processed in ${time} ms`);
};

// const logError = id => {
//   console.warn(`Error processing transaction ${id}. Please try again later.`);

//   console.log(makeTransaction('hvjhv'));
// .then(el => console.log(el));
// .then(logSuccess).catch(logError);
// };
// console.log(makeTransaction('hvjhv'));
// makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);
// .then(logSuccess).catch(logError);
//****************************************************** */

// class CountdownTimer {
//   construct(selector, targetDate) {
//     this.selector = selector;
//     this.targetDate = targetDate;
//   }
// }

// const timer = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

// console.log(timer);

const ref = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
  input: document.querySelector('.input'),
};

ref.input.addEventListener('input', event => {
  console.log(event.target.valueAsDate.toString());
  const ddd = Date.parse(event.target.valueAsDate.toString());
  targetDate.start(ddd);
});
ref.days.textContent = 35;

console.log(ref.input.value);

const targetDate = {
  intervalid: null,
  isActive: false,
  start(data) {
    if (this.isActive) {
      return;
    }
    // const newDate = new Date(data);
    // console.log(Date.parse(newDate));
    // console.log(msToTime(Date.parse(newDate) - Date.now()));

    this.intervalid = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = data - currentTime;
      //   ref.days.textContent = msToTime(deltaTime);
      ref.secs.textContent = pad(Math.floor((deltaTime % (1000 * 60)) / 1000));
      ref.mins.textContent = pad(
        Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)),
      );
      ref.hours.textContent = pad(
        Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      ref.days.textContent = Math.floor(deltaTime / (1000 * 60 * 60 * 24));
      //   console.log(msToTime(deltaTime));
    }, 1000);
    // console.log(newDate);
    // console.log(Date.now());
  },
};

// // function msToTime(time) {
// const days = Math.floor(time / (1000 * 60 * 60 * 24));
// const hours = pad(
//   Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
// );
// const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
// const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

// return days + ':' + hours + ':' + mins + ':' + secs;
// }

function pad(value) {
  return String(value).padStart(2, '0');
}
// console.log(msToTime());

// targetDate.start('Sep 18, 2020');

// console.log(Date.now('Oct 18, 2020'));
// const newDate = new Date('Oct 20, 2020');
// console.log(newDate);
// console.log(Date.parse(newDate));

// console.log(msToTime(Date.parse(newDate) - Date.now()));
