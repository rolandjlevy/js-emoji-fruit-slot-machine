import { $, $$, delay, getRandomNumbers } from './src/utils.js';
import { Score } from './src/Score.js';
import { Sound } from './src/Sound.js';

const score = new Score();
const sound = new Sound();

const containerRect = $('.container').getBoundingClientRect();

window.startReels = function() {
  score.credits--;
  $('.credits-display').textContent = score.credits;
  $('.btn.stop').classList.add('active');
  $('.btn.start').classList.remove('active');
  ['r1', 'r2', 'r3'].forEach(item => {
    $(`.reel.${item}`).classList.remove('stop');
  });
}

window.stopReels = async function() {
  const soundFileName = 'taken.mp3';
  sound.init(`sounds/${soundFileName}`);
  $('.btn.stop').classList.remove('active');
  score.win = {};
  const nums = getRandomNumbers(3, 10);
  await delay(1500);
  stopAnimation('r1', nums[0]);
  await delay(1500);
  stopAnimation('r2', nums[1]);
  await delay(1500);
  stopAnimation('r3', nums[2]);
}

window.toggleReel = async function(reel, btn) {
  const thisReel = $(`.reel.${reel}`);
  await delay(2000);
  thisReel.classList.add('stop');
  btn.classList.toggle('active');
}

function stopAnimation(reelName, pos, state) {
  const topOffset = 312;
  const reel = $(`.reel.${reelName}`);
  const timer = setInterval(() => {
    const rect = reel.firstElementChild.getBoundingClientRect();
    const top = rect.top + topOffset;
    if (top >= (pos * 100) - 60 && top <= (pos * 100) - 50) {
      getSelectedFruit(reelName);
      const soundFileName = 'pling.mp3';
      sound.init(`sounds/${soundFileName}`);
      if (Object.keys(score.win).length == 3) {
        const winStr = Object.values(score.win).join('');
        score.total += score.getValue(winStr);
        $('.score-display').textContent = String(score.total);
        if (score.credits > 0) {
          $('.btn.start').classList.add('active');
        } else {
          console.log('Restart game...');
        }
      }
      reel.classList.add('stop');
      clearInterval(timer);
    }
  }, 1);
}

function getSelectedFruit(reelName) {
  $$(`.${reelName} > li`).forEach(item => {
    const fruitTop = item.getBoundingClientRect().top + item.clientHeight / 2;
    if (fruitTop > containerRect.top && fruitTop < containerRect.bottom) {
      score.win[reelName] = item.classList.value;
    }
  });
}

document.addEventListener('DOMContentLoaded', async (e) => {
  $('main.wrapper').classList.remove('init');
  await delay(2000);
  startReels();
});