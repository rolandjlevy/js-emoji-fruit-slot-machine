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

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const delay = (t) => new Promise(resolve => setTimeout(resolve, t));

const getRandomNumbers = function(n, max) {
  const arr = [...Array(max).keys()].map(n => n+1);
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