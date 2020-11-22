const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const delay = (t) => new Promise(resolve => setTimeout(resolve, t));

const getRandomNumbers = (n, max) => {
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

const getRandomNumLong = (arr) => {
  return arr
  .map((a) => ({sort: Math.random(), value: a}))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value);
}

const getRandomNums = (arr) => arr.sort(() => Math.random() - 0.5);

export {
  $, $$,
  delay,
  getRandomNumbers
};