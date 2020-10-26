import { $, $$, delay, randomNum, getRandomNumbers } from './src/utils.js';

window.startReels = async function() {
  $('.toggle.btn').classList.remove('active');
  $('.reel.first').classList.remove('stop');
  $('.reel.second').classList.remove('stop');
  $('.reel.third').classList.remove('stop');
  const nums = getRandomNumbers(3, 10);
  await delay();
  stopAnimation('first', nums[0]);
  await delay();
  stopAnimation('second', nums[1]);
  await delay();
  stopAnimation('third', nums[2]);
}

function stopAnimation(reelName, pos, state) {
  const topOffset = 379;
  const reel = $(`.reel.${reelName}`);
  const timer = setInterval(() => {
    const rect = reel.firstElementChild.getBoundingClientRect();
    const top = rect.top + topOffset;
    if (top >= (pos * 100) - 90 && top <= (pos * 100) - 80) {
      if (reelName === 'third') {
        $('.toggle.btn').classList.add('active');
      }
      reel.classList.add('stop');
      clearInterval(timer);
    }
  }, 1);
}

window.toggleReel = function(reel, btn) {
  const thisReel = $(`.reel.${reel}`);
  thisReel.classList.toggle('stop');
  btn.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', (e) => {
  $('main.wrapper').classList.remove('init');
  startReels();
});