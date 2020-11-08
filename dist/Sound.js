"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sound = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sound = /*#__PURE__*/function () {
  function Sound() {
    _classCallCheck(this, Sound);

    this.sound = document.createElement('audio');
    this.sound.setAttribute('preload', 'auto');
    this.sound.setAttribute('controls', 'none');
    this.sound.setAttribute('muted', false);
    this.sound.style.display = 'none';
    document.body.appendChild(this.sound);
  }

  _createClass(Sound, [{
    key: "init",
    value: function init(src) {
      var _this = this;

      this.sound.pause();
      this.sound.currentTime = 0;
      this.sound.src = "sounds/".concat(src);
      var playPromise = this.sound.play();

      if (playPromise) {
        playPromise.then(function () {
          setTimeout(function () {
            return _this.sound.play();
          }, 0);
        })["catch"](function (error) {
          console.log({
            error: error
          });
        });
      }
    }
  }, {
    key: "play",
    value: function play() {
      this.sound.play();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.sound.pause();
    }
  }]);

  return Sound;
}();

exports.Sound = Sound;
