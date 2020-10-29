import { $, $$, delay, randomNum, getRandomNumbers } from './src/utils.js';

window.startReels = async function() {
  $('.toggle.btn').classList.remove('active');
  ['r1', 'r2', 'r3'].forEach(item => {
    $(`.reel.${item}`).classList.remove('stop');
  });
  const nums = getRandomNumbers(3, 10);
  await delay();
  stopAnimation('r1', nums[0]);
  await delay();
  stopAnimation('r2', nums[1]);
  await delay();
  stopAnimation('r3', nums[2]);
}

function stopAnimation(reelName, pos, state) {
  const topOffset = 379;
  const reel = $(`.reel.${reelName}`);
  const timer = setInterval(() => {
    const rect = reel.firstElementChild.getBoundingClientRect();
    const top = rect.top + topOffset;
    if (top >= (pos * 100) - 60 && top <= (pos * 100) - 50) {
      if (reelName === 'r3') {
        $('.toggle.btn').classList.add('active');
      }
      reel.classList.add('stop');
      clearInterval(timer);
    }
  }, 1);
}

document.addEventListener('DOMContentLoaded', async (e) => {
  $('main.wrapper').classList.remove('init');
  await delay(2000);
  startReels();
});