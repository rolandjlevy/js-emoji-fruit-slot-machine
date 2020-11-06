export class Score {
  constructor() {
    this.credits = 10;
    this.total = 0;
    this.win = {};
    this.setValues();
  }
  setValues() {
    this.values = {
      'ggg': 300,
      'gg': 100,
      'ooo': 240,
      'oo': 80,
      'ccc': 180,
      'cc': 60,
      'lll': 120,
      'll': 40,
    }
  }
  getValue = function(str3) {
    const regex = /^(.)\1+$/;
    const win3 = regex.test(str3) && str3.length == 3;
    if (win3) return this.values[str3];
    const str2 = str3.slice(0, 2);
    const win2 = regex.test(str2) && str2.length == 2;
    if (win2) return this.values[str2];
    return 0;
  }
}