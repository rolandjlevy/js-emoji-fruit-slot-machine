const unused = ['💍', '🍌', '🐓', '🥇', '🐥'];
const emojis = ['🍏', '🍒', '🍇', '🍋', '🍉', '🍊', '🔔', '💎', '⭐', '💰' ];

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

export {
  shuffleArray
};