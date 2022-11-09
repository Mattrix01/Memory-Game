const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

// array shuffled randomly, if larger or smaller than 0.5 it will check each object if below or above.
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const cardsChosen = [];
const cardsChosenIds = [];
const cardsWon = [];

// for each item in my array, create an element.
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    // grabbing card we just created
    card.setAttribute("src", "images/blank.png");
    // Making sure each card is unique, keeping track of each one adding an id.
    card.setAttribute("data-id", i);
    // listening for clicks
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}

createBoard();

function checkMatch() {
  // searching through only img in grid id, could change to general
  const cards = document.querySelectorAll("#grid img");
  console.log("Check for match!");
  // into the array and get this card, and assign it the background colour of white if they both match
  if (cardsChosen[0] == cardsChosen[1]) {
    alert("You found a match!");
    cards[cardsChosenIds[0]].setAttribute("src", images / white.png);
    cards[cardsChosenIds[1]].setAttribute("src", images / white.png);
    // removing ability to click on the card
    cards[cardsChosenIds[0]].removeEventListener("click", flipCard);
    cards[cardsChosenIds[1]].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  }
}

function flipCard() {
  // whatever element we clicked and get its attribute data.
  // this keyword is allowing us to interact to whatever element we click
  const cardId = this.getAttribute("data-id");
  // push item into a new array
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  // after 500 milliseconds run function above.
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
