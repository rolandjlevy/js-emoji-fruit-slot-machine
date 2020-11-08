"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Score = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Score = /*#__PURE__*/function () {
  function Score() {
    _classCallCheck(this, Score);

    _defineProperty(this, "getValue", function () {
      var str3 = Object.values(this.win).join('');
      var regex = /^(.)\1+$/;
      var win3 = regex.test(str3) && str3.length == 3;
      if (win3) return this.values[str3];
      var str2 = str3.slice(0, 2);
      var win2 = regex.test(str2) && str2.length == 2;
      if (win2) return this.values[str2];
      return 0;
    });

    this.credits = 10;
    this.total = 0;
    this.win = {};
    this.setValues();
  }

  _createClass(Score, [{
    key: "setValues",
    value: function setValues() {
      this.values = {
        'ggg': 300,
        'gg': 100,
        'ooo': 240,
        'oo': 80,
        'ccc': 180,
        'cc': 60,
        'lll': 120,
        'll': 40
      };
    }
  }]);

  return Score;
}();

exports.Score = Score;