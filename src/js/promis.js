// const { resolve, reject } = require('core-js/fn/promise');

// const { resolve, reject } = require('core-js/fn/promise');

// console.log('Hello');

// const promise = new Promise((resolve, reject) => {
//   const success = Math.random() > 0.5;
//   setTimeout(() => {
//     if (success) {
//       resolve('Успех');
//     }

//     reject('Error');
//   }, 1000);
// });

// // console.log(promise);

// promise.then(result => console.log(result)).catch(error => console.log(error));

const fetchUser = userName => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.4;

      if (success) {
        const user = { name: userName, age: 26, posts: 74 };
        resolve(user);
      }
      const error = 'Error';
      reject(error);
    }, 1000);
    //   const success = Math.random() > 0.4;

    //   const user = { name: userName, age: 26, posts: 74 };
    //   const error = 'Error';

    //   return success ? user : error;
  });
  return promise;
};

// fetchUser('Polly')
//   .then(el => console.log(el))
//   .catch(el => console.log(el));

// fetch('https://jsonplaceholder.typicode.com/todos/${id}')
//   .then(res => res.json())
//   .then(console.log)
//   .catch(console.log);

const fetchTodo = id => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  // .then(res => res.json(),);
};
fetchTodo(6)
  //   .then(res => res.text())
  .then(console.log)
  .catch(console.log);
