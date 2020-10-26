import {
  createElement,
  getElement,
  getAllElements
} from './src/utils.js';


// window.stopReel = function(reel) {
//   getElement(`.reel.${reel}`).classList.add('stop');
// }

window.stopReel = function(reel) {
  getElement(`.reel.${reel}`).classList.add('stop');

  // box.style.opacity = window.getComputedStyle(box).opacity - 0.02;


  // const thisReel = getElement(`.reel.${reel}`);
  
  // let currentSpeed = Number(getComputedStyle(thisReel).getPropertyValue('--speed'));
  // thisReel.style.setProperty('--speed', `1`);

  // const timer = setInterval(() => {
  //   currentSpeed += 0.05;
  //   thisReel.style.setProperty('--speed', String(currentSpeed.toFixed(2)));
  //   thisReel.style.setProperty('--speed', getComputedStyle(thisReel).getPropertyValue('--speed') + 0.05);
  //   if (currentSpeed >= 2) clearInterval(timer);
  // }, 100);

  // const reelFirstAll = getAllElements('.reel.first > li');
  // reelFirstAll.forEach(item => {
  //   item.style.setProperty('animationPlayState', 'paused');
  //   item.style.setProperty('--speed', '1');
  // });
 
}