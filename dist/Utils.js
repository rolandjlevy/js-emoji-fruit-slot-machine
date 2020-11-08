"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomNumbers = exports.delay = exports.$$ = exports.$ = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// export class Utils {
//   constructor() {
//   }
//   $(selector) {
//     return document.querySelector(selector);
//   }
//   $$(selector) {
//     return document.querySelectorAll(selector);
//   }
//   delay(time) {
//     return new Promise(resolve => setTimeout(resolve, time));
//   }
//   getRandomNumbers(n, max) {
//     const arr = [...Array(max).keys()].map(n => n+1);
//     const selected = [];
//     let counter = n;
//     while (counter > 0) {
//       const random = Math.floor(Math.random() * arr.length);
//       let removed = arr.splice(random, 1).shift();
//       selected.push(removed);
//       counter--;
//     }
//     selected.sort();
//     return selected;
//   }
// }
var $ = function $(selector) {
  return document.querySelector(selector);
};

exports.$ = $;

var $$ = function $$(selector) {
  return document.querySelectorAll(selector);
};

exports.$$ = $$;

var delay = function delay(t) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, t);
  });
};

exports.delay = delay;

var getRandomNumbers = function getRandomNumbers(n, max) {
  var arr = _toConsumableArray(Array(max).keys()).map(function (n) {
    return n + 1;
  });

  var selected = [];
  var counter = n;

  while (counter > 0) {
    var random = Math.floor(Math.random() * arr.length);
    var removed = arr.splice(random, 1).shift();
    selected.push(removed);
    counter--;
  }

  selected.sort();
  return selected;
};

exports.getRandomNumbers = getRandomNumbers;

var getRandomNumLong = function getRandomNumLong(arr) {
  return arr.map(function (a) {
    return {
      sort: Math.random(),
      value: a
    };
  }).sort(function (a, b) {
    return a.sort - b.sort;
  }).map(function (a) {
    return a.value;
  });
};

var getRandomNums = function getRandomNums(arr) {
  return arr.sort(function () {
    return Math.random() - 0.5;
  });
};