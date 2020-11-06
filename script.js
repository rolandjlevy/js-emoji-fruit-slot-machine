import { $, $$, delay, randomNum, getRandomNumbers } from './src/utils.js';
import { scoreValues, checkScore } from './src/scoring.js';

let credits = 2;
let score = 0;
let winObject = {}
const containerRect = $('.container').getBoundingClientRect();

window.startReels = function() {
  credits--;
  $('.credits-display').textContent = credits;
  $('.btn.stop').classList.add('active');
  $('.btn.start').classList.remove('active');
  ['r1', 'r2', 'r3'].forEach(item => {
    $(`.reel.${item}`).classList.remove('stop');
  });
}

window.stopReels = async function() {
  $('.btn.stop').classList.remove('active');
  winObject = {};
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
      getSelectedEmoji(reelName);
      if (Object.keys(winObject).length == 3) {
        const winStr = Object.values(winObject).join('');
        score += checkScore(winStr);
        $('.score-display').textContent = String(score);
        if (credits > 0) {
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

function getSelectedEmoji(reelName) {
  $$(`.${reelName} > li`).forEach(item => {
    const fruitTop = item.getBoundingClientRect().top + item.clientHeight / 2;
    if (fruitTop > containerRect.top && fruitTop < containerRect.bottom) {
      winObject[reelName] = item.classList.value;
    }
  });
}

document.addEventListener('DOMContentLoaded', async (e) => {
  $('main.wrapper').classList.remove('init');
  await delay(2000);
  startReels();
});