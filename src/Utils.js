// export class Utils {
//   constructor() {
//   }
//   $(selector) {
//     return document.querySelector(selector);
//   }
//   $$(selector) {
//     return document.querySelectorAll(selector);
//   }
//   delay(time) {
//     return new Promise(resolve => setTimeout(resolve, time));
//   }
//   getRandomNumbers(n, max) {
//     const arr = [...Array(max).keys()].map(n => n+1);
//     const selected = [];
//     let counter = n;
//     while (counter > 0) {
//       const random = Math.floor(Math.random() * arr.length);
//       let removed = arr.splice(random, 1).shift();
//       selected.push(removed);
//       counter--;
//     }
//     selected.sort();
//     return selected;
//   }
// }

function $(selector) {
  return document.querySelector(selector);
}
function $$(selector) {
  return document.querySelectorAll(selector);
}

function delay(t) {
  new Promise(function(resolve) {
    setTimeout(resolve, t);
  });
}

function getRandomNumbers(n, max) {
  const arr = [...Array(max).keys()].map(function(n) {
    return n+1;
  });
  const selected = [];
  let counter = n;
  while (counter > 0) {
    const random = Math.floor(Math.random() * arr.length);
    let removed = arr.splice(random, 1).shift();
    selected.push(removed);
    counter--;
  }
  selected.sort();
  return selected;
}

export {
  $, $$,
  delay,
  getRandomNumbers
};