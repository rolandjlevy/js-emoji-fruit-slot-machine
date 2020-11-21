import { $, $$, delay, getRandomNumbers } from './Utils.js';

import { Score } from './Score.js';
import { Sound } from './Sound.js';
import { Fruit } from './Fruit.js';

const score = new Score();
const sound = new Sound();

const fruit = new Fruit();
// const list = fruit.getListOfFruit();

// import { Utils } from './Utils.js';
// new Utils();

const startReels = async () => {
  sound.init('vibrating-beep.mp3');
  $('.btn.start').classList.remove('active');
  score.win = {};
  const nums = getRandomNumbers(3, 10);
  await delay(1500);
  startAnimation('r1', nums[0]);
  await delay(1500);
  startAnimation('r2', nums[1]);
  await delay(1500);
  startAnimation('r3', nums[2]);
}

const spinReels = (init) => {
  !init && sound.init('blip.mp3');
  score.credits--;
  $('.credits-display').textContent = score.credits;
  $('.btn.start').classList.add('active');
  $('.btn.spin').classList.remove('active');
  ['r1', 'r2', 'r3'].forEach(item => $(`.reel.${item}`).classList.remove('stop'));
}

const startAnimation = (reelN, pos, state) => {
  const topOffset = 312;
  const timer = setInterval(() => {
    const top = $(`.reel.${reelN}`).firstElementChild.getBoundingClientRect().top + topOffset;
    if (top >= (pos * 100) - 60 && top <= (pos * 100) - 50) {
      addToScore(reelN);
      calculateScore();
      $(`.reel.${reelN}`).classList.add('stop');
      clearInterval(timer);
    }
  }, 1);
}

const addToScore = (reelN) => {
  sound.init('pling.mp3');
  const { top, bottom } = $('.container').getBoundingClientRect();
  $$(`.${reelN} > li`).forEach(item => {
    const fruitTop = item.getBoundingClientRect().top + item.clientHeight / 2;
    if (fruitTop > top && fruitTop < bottom) {
      score.win[reelN] = item.classList.value;
    }
  });
}

const calculateScore = () => {
  if (Object.keys(score.win).length == 3) {
    score.total += score.getValue();
    $('.score-display').textContent = score.total;
    if (score.credits > 0) {
      $('.btn.spin').classList.add('active');
    } else {
      $('.btn.reset').classList.add('active');
    }
  }
}

$('.btn.start').addEventListener('click', (e) => { 
  startReels();
});

$('.btn.spin').addEventListener('click', (e) => { 
  spinReels();
});

$('.btn.reset').addEventListener('click', (e) => { 
  resetGame();
  $('.score-display').textContent = score.total;
  $('.credits-display').textContent = score.credits;
  $('.btn.reset').classList.remove('active');
});

const resetGame = async () => {
  score.reset({credits:10});
  await delay(1000);
  spinReels(true);
}

document.addEventListener('DOMContentLoaded', (e) => {
  $('main.wrapper').classList.remove('init');
  fruit.appendAllListsOfFruit();
  resetGame();
});