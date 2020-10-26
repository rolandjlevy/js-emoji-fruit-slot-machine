import { $, $$, delay, randomNum, getRandomNumbers } from './src/utils.js';

$('main.wrapper').classList.remove('init');

let running = true;

window.toggleReels = function(btn) {
  running ? stopReels() : startReels();
  btn.classList.toggle('active');
  running = !running;
}

const startReels = function() {
  $('.reel.first').classList.remove('stop');
  $('.reel.second').classList.remove('stop');
  $('.reel.third').classList.remove('stop');
}

const stopReels = async function() {
  const nums = getRandomNumbers(3, 10);
  await delay(4000);
  stopAnimation('first', nums[0]);
  await delay(4000);
  stopAnimation('second', nums[1]);
  await delay(4000);
  stopAnimation('third', nums[2]);
}

const topOffset = 379;

function stopAnimation(reelName, pos) {
  const reel = $(`.reel.${reelName}`);
  const timer = setInterval(() => {
    const rect = reel.firstElementChild.getBoundingClientRect();
    const top = rect.top + topOffset;
    if (top >= (pos * 100) - 90 && top <= (pos * 100) - 80) {
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