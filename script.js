import {
  createElement,
  getElement,
  getAllElements
} from './src/utils.js';


window.stopReel = function(reel) {
  getElement(`.reel.${reel}`).classList.add('stop');
}