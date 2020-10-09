function foo() {
  console.log('Hello');
}

setTimeout(foo, 2000);

console.log('Good Day');

const date = new Date();
console.log(date);
console.log(date.getDate());
console.log();

const timer = {
  intervalid: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    const startTime = Date.now();
    this.intervalid = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;

      console.log(msToTime(deltaTime));
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalid);
    this.intervalid = null;
    this.isActive = false;
    msToTime(0);
  },
};

// timer.start();
// timer.stop();

function msToTime(duration) {
  let seconds = pad(parseInt((duration / 1000) % 60));
  let minutes = pad(parseInt((duration / (1000 * 60)) % 60));
  let hours = pad(parseInt((duration / (1000 * 60 * 60)) % 24));

  //   hours = hours < 10 ? '0' + hours : hours;
  //   minutes = minutes < 10 ? '0' + minutes : minutes;
  //   seconds = seconds < 10 ? '0' + seconds : seconds;

  return hours + ':' + minutes + ':' + seconds;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

let number = 50;
// let interval = setTimeout(function tick() {
//   interval = setTimeout(tick, 1000);
//   number -= 1;
//   console.log(number);
// }, 1000);

// console.log(interval);
// clearTimeout(3);
let interval = null;
function bar() {
  interval = setTimeout(function tick() {
    setTimeout(tick, 1000);
    number -= 1;
    console.log(number);
  }, 1000);
}
console.log(interval);
// bar();
