/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const language = 'pt_br';
const assets = 'assets/images/cards';

var cards = [
  {
    type: 'culture',
    level: 1,
    tokens: 0,
  },
  {
    type: 'military',
    level: 1,
    tokens: 0,
  },
  {
    type: 'science',
    level: 1,
    tokens: 0,
  },
  {
    type: 'industry',
    level: 1,
    tokens: 0,
  },
  {
    type: 'economy',
    level: 1,
    tokens: 0,
  },
];

// check if has on storage
const storage = localStorage.getItem('cards');
if (storage) cards = JSON.parse(storage);

// render
function render() {
  cards.map(function loop(card, index) {
    const imageDOM = document.getElementById(`card-${index}-image`);
    if (imageDOM) imageDOM.src = `${assets}/${language}/${card.type}-${card.level}.jpg`;

    const tokensDOM = document.getElementById(`card-${index}-tokens`);
    if (tokensDOM) tokensDOM.innerHTML = card.tokens;

    return true;
  });

  localStorage.setItem('cards', JSON.stringify(cards));
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// Functions

// new game
function newGame() {
  if (confirm('Tem certeza?')) {
    localStorage.clear();
    window.location.reload();
  }
}

// Change card level
function changeCardLevel(id) {
  const card = cards[id];

  var newLevel = card.level + 1;
  if (newLevel > 4) {
    newLevel = 1;
  }
  cards[id].level = newLevel;
  render();
}

// Add Tokens
function addTokens(id) {
  cards[id].tokens += 1;
  render();
}

// Remove Tokens
function subTokens(id) {
  const card = cards[id];

  var newValue = card.tokens - 1;
  if (newValue < 0) {
    newValue = 0;
  }
  cards[id].tokens = newValue;
  render();
}

// Make card go to left
function sendCardToTheLeft(id) {
  if (id === 0) return false;

  const card = cards.splice(id, 1);
  cards.splice(0, 0, card[0]);

  /*

  const card = cards[id];
  const oldCard = cards[id - 1];

  cards[id] = oldCard;
  cards[id - 1] = card; // send card to the first position */

  return render();
}

// Make card go to right
function sendCardToTheRight(id) {
  if (id === 4) return false;

  const card = cards[id];
  const oldCard = cards[id + 1];

  cards[id] = oldCard;
  cards[id + 1] = card;

  return render();
}
