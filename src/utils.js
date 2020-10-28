const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const createElement = function(tag, className) {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  return element;
}

const delay = (t=3000) => new Promise(resolve => setTimeout(resolve, t));

const randomNum = (max) => Math.floor(Math.random() * Math.floor(max));

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
  createElement,
  delay,
  randomNum,
  getRandomNumbers
};