import { Utils } from './Utils.js';

export class Score extends Utils {
  constructor() {
    super();
    this.setValues();
    this.getLeaderBoard({url:'src/data.json', maxIndex:20});
  }
  reset({credits}) {
    this.total = 0;
    this.credits = credits;
    this.win = {};
  }
  setValues() {
    this.values = {
      'ggg': 300,
      'gg': 100,
      'g': 25,
      'ooo': 240,
      'oo': 80,
      'o': 20,
      'ccc': 180,
      'cc': 60,
      'c': 15,
      'lll': 120,
      'll': 40,
      'l': 10
    }
  }
  getValue = function() {
    const str3 = Object.values(this.win).join('');
    const regex = /^(.)\1+$/; // first char is repeated one or more times and occupies entire test string
    const win3 = regex.test(str3) && str3.length == 3;
    if (win3) return this.values[str3];
    const str2 = str3.slice(0, 2);
    const win2 = regex.test(str2) && str2.length == 2;
    if (win2) return this.values[str2];
    const str1 = str3.slice(0, 1);
    return this.values[str1];
  }
  getLeaderBoard({url, maxIndex}) {
    this.$('.leader-board-points').innerHTML = '<li>Loading...</li>';
    fetch(url)
    .then(res => res.json())
    .then(data => {
      const list = data
      .sort((a, b) => b.points - a.points)
      .map(item => `<li>${item.name}: ${item.points}</li>`)
      .filter((_, index) => index <= maxIndex)
      .join('');
      this.$('.leader-board-points').innerHTML = list;
    });
  }
}