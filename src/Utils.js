export class Utils {
  constructor() {
  }
  $(selector) {
    return document.querySelector(selector);
  }
  $$(selector) {
    return document.querySelectorAll(selector);
  }
  getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min + 1) + min);
  }
  getRandomNums(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }
  delay(t) {
    return new Promise(resolve => setTimeout(resolve, t));
  }
  getRandomNumbers(n, max) {
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
  getRandomNumLong(arr) {
    return arr
    .map((a) => ({sort: Math.random(), value: a}))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
  }
}