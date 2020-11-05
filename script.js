import { $, $$, delay, randomNum, getRandomNumbers } from './src/utils.js';

const nums = getRandomNumbers(3, 10);

window.startReels = function() {
  $('.btn.stop').classList.add('active');
  $('.btn.start').classList.remove('active');
  ['r1', 'r2', 'r3'].forEach(item => {
    $(`.reel.${item}`).classList.remove('stop');
  });
}

window.stopReels = async function() {
  $('.btn.stop').classList.remove('active');
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
  const topOffset = 379;
  const reel = $(`.reel.${reelName}`);
  const timer = setInterval(() => {
    const rect = reel.firstElementChild.getBoundingClientRect();
    const top = rect.top + topOffset;
    if (top >= (pos * 100) - 60 && top <= (pos * 100) - 50) {
      if (reelName === 'r3') {
        $('.btn.start').classList.add('active');
      }
      reel.classList.add('stop');
      clearInterval(timer);
    }
  }, 1);
}

document.addEventListener('DOMContentLoaded', async (e) => {
  $('main.wrapper').classList.remove('init');
  await delay(3000);
  startReels();
});