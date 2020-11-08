export class Fruit {
  constructor() {
    this.init();
  }
  init() {
    this.fruit = {
      grape: {
        name: 'g',
        emoji: '🍇',
        count: 2
      },
      orange: {
        name: 'o',
        emoji: '🍊',
        count: 2
      },
      cherry: {
        name: 'c',
        emoji: '🍒',
        count: 3
      },
      lemon: {
        name: 'l',
        emoji: '🍋',
        count: 3
      }
    }
  }
  getArrayOfFruit() {
    return Object.keys(this.fruit)
    .reduce((acc, item, index, array) => {
      const { name, emoji } = this.fruit[item];
      const a = [...Array(this.fruit[item].count).fill({name, emoji})];
      acc = [...acc, ...a]
      return acc;
    }, [])
    .sort(() => Math.random() - 0.5);
  }
  getListOfFruit() {
    const arr = this.getArrayOfFruit();
    let str = '<ul>\n';
    arr.forEach(item => {
      str += `\t<li class="${item.name}">${item.emoji}</li>\n`;
    })
    str += '</ul>';
    return str;
  }
}