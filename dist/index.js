"use strict";

var _Utils = require("./Utils.js");

var _Score = require("./Score.js");

var _Sound = require("./Sound.js");

var _Fruit = require("./Fruit.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var score = new _Score.Score();
var sound = new _Sound.Sound();
var fruit = new _Fruit.Fruit();
var list = fruit.getListOfFruit();
console.log(list); // import { Utils } from './Utils.js';
// new Utils();

var startReels = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var nums;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sound.init('vibrating-beep.mp3');
            (0, _Utils.$)('.btn.start').classList.remove('active');
            score.win = {};
            nums = (0, _Utils.getRandomNumbers)(3, 10);
            _context.next = 6;
            return (0, _Utils.delay)(1500);

          case 6:
            startAnimation('r1', nums[0]);
            _context.next = 9;
            return (0, _Utils.delay)(1500);

          case 9:
            startAnimation('r2', nums[1]);
            _context.next = 12;
            return (0, _Utils.delay)(1500);

          case 12:
            startAnimation('r3', nums[2]);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function startReels() {
    return _ref.apply(this, arguments);
  };
}();

var replayReels = function replayReels(init) {
  !init && sound.init('blip.mp3');
  score.credits--;
  (0, _Utils.$)('.credits-display').textContent = score.credits;
  (0, _Utils.$)('.btn.start').classList.add('active');
  (0, _Utils.$)('.btn.replay').classList.remove('active');
  ['r1', 'r2', 'r3'].forEach(function (item) {
    return (0, _Utils.$)(".reel.".concat(item)).classList.remove('stop');
  });
};

var startAnimation = function startAnimation(reelN, pos, state) {
  var topOffset = 312;
  var timer = setInterval(function () {
    var top = (0, _Utils.$)(".reel.".concat(reelN)).firstElementChild.getBoundingClientRect().top + topOffset;

    if (top >= pos * 100 - 60 && top <= pos * 100 - 50) {
      addToScore(reelN);
      calculateScore();
      (0, _Utils.$)(".reel.".concat(reelN)).classList.add('stop');
      clearInterval(timer);
    }
  }, 1);
};

var addToScore = function addToScore(reelN) {
  sound.init('pling.mp3');

  var _$$getBoundingClientR = (0, _Utils.$)('.container').getBoundingClientRect(),
      top = _$$getBoundingClientR.top,
      bottom = _$$getBoundingClientR.bottom;

  (0, _Utils.$$)(".".concat(reelN, " > li")).forEach(function (item) {
    var fruitTop = item.getBoundingClientRect().top + item.clientHeight / 2;

    if (fruitTop > top && fruitTop < bottom) {
      score.win[reelN] = item.classList.value;
    }
  });
};

var calculateScore = function calculateScore() {
  if (Object.keys(score.win).length == 3) {
    score.total += score.getValue();
    (0, _Utils.$)('.score-display').textContent = score.total;

    if (score.credits > 0) {
      (0, _Utils.$)('.btn.replay').classList.add('active');
    } else {
      console.log('Restart game...');
    }
  }
};

(0, _Utils.$)('.btn.replay').addEventListener('click', function (e) {
  replayReels();
});
(0, _Utils.$)('.btn.start').addEventListener('click', function (e) {
  startReels();
});
document.addEventListener('DOMContentLoaded', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            (0, _Utils.$)('main.wrapper').classList.remove('init');
            _context2.next = 3;
            return (0, _Utils.delay)(1500);

          case 3:
            replayReels(true);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());