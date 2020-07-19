class Card {
  value = 0;
  suit = 0;

  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }
}

class Deck {
  content = [];

  constructor() {
    for (let suit = 1; suit < 5; suit++) {
      for (let value = 2; value < 15; value++) {
        this.content.push(new Card(value, suit));
      }
    }
  }

  drawCard = () => {
    if (this.content.length > 0) {
      let drawnCard = this.content.pop();
      return drawnCard;
    }
    return null;
  };

  shuffle = () => {
    const controlArray = [];
    for (let i = 0; i < this.content.length; i++) {
      controlArray.push(false);
    }

    const shuffledDeck = [];
    while (shuffledDeck.length < this.content.length) {
      let randomIndex = Math.floor(Math.random() * this.content.length);
      if (!controlArray[randomIndex]) {
        controlArray[randomIndex] = true;
        shuffledDeck.push(this.content[randomIndex]);
      }
    }
    this.content = shuffledDeck;
  };
}

class Table {
  content;

  constructor() {
    this.content = [[], [], [], []];
  }

  wipe = () => {
    this.content = [[], [], [], []];
  };

  giveCards = (a, b, c, d) => {
    this.content[0].push(a);
    this.content[1].push(b);
    this.content[2].push(c);
    this.content[3].push(d);
  };

  throwAwayCards = () => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (j != i) {
          if (
            this.content[i].length > 0 &&
            this.content[j].length > 0 &&
            this.content[i][this.content[i].length - 1].suit ==
              this.content[j][this.content[j].length - 1].suit
          ) {
            if (
              this.content[i][this.content[i].length - 1].value <
              this.content[j][this.content[j].length - 1].value
            ) {
              this.content[i].pop();
            } else this.content[j].pop();
            i = 0;
            j = 0;
          }
        }
      }
    }
  };

  fillEmptySpaces = () => {
    let emptyPiles = [];

    let biggestPile = null;
    for (const pile of this.content) {
      if (biggestPile == null || pile.length > biggestPile.length) {
        biggestPile = pile;
      }
      if (pile.length === 0) {
        emptyPiles.push(pile);
      }
    }
    if (emptyPiles.length > 0) {
      for (const emptyPile of emptyPiles) {
        if (biggestPile.length > 1) {
          emptyPile.push(biggestPile.pop());
        }
      }
    }
  };
}

let deck = new Deck();
deck.shuffle();
let table = new Table();

let timesWon = 0;

for (let i = 0; i < 1000000; i++) {
  deck = new Deck();
  deck.shuffle();
  let table = new Table();

  do {
    table.giveCards(
      deck.drawCard(),
      deck.drawCard(),
      deck.drawCard(),
      deck.drawCard()
    );
    for (let i = 0; i < 4; i++) {
      table.throwAwayCards();
      table.fillEmptySpaces();
      table.throwAwayCards();
    }
  } while (deck.content.length > 0);

  let win = true;
  for (const pile of table.content) {
    if (pile.length != 1) {
      win = false;
    }
  }

  if (win) {
    timesWon++;
  }
}

let percentage = (timesWon * 100) / 100000;

console.log(`The winning percentage is: ${percentage}%`);
