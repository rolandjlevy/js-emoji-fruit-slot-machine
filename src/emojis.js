const unused = ['💍', '🍌', '🐓', '🥇', '🐥', '⭐', '🍊', '🐦', '🐚', '💎', '🐟', '🍕', '🥕', '💰', '🍅', '🔔', '🎃', '🍄', '🥝', '🍅', '🍏', '🥑', '🍆']

const emojis = ['🍏', '🍒', '🍇', '🍋', '🍉', '🥑', '🍐', '🍆', '🍓', '🍌' ];

const shuffleArray = function(arr) {
  const clone = [...arr];
  const shuffled = [];
  while (clone.length) {
    const random = Math.floor(Math.random() * clone.length);
    let removed = clone.splice(random, 1).shift();
    shuffled.push(removed);
  }
  return shuffled;
}

const getRandomNumbers = function(max) {
  const arr = [...Array(max).keys()].map(n => n-1);
  console.log(arr);
  // const shuffled = [];
  // while (clone.length) {
  //   const random = Math.floor(Math.random() * clone.length);
  //   let removed = clone.splice(random, 1).shift();
  //   shuffled.push(removed);
  // }
  // return shuffled;
}

export {
  shuffleArray,
  getRandomNumbers
};