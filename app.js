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
const resultDisplay = document.querySelector("#result");
// let can change the array rather than just pushing to it
let cardsChosen = [];
let cardsChosenIds = [];
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
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  console.log("Check for match!");
  if (optionOneId == optionTwoId) {
    cards[cardsChosenIds[0]].setAttribute("src", images / blank.png);
    cards[cardsChosenIds[1]].setAttribute("src", images / blank.png);

    alert("You have a match!");
  }
  if (cardsChosen[0] == cardsChosen[1]) {
    // into the array and get this card, and assign it the background colour of white if they both match
    alert("You found a match!");
    cards[cardsChosenIds[0]].setAttribute("src", images / white.png);
    cards[cardsChosenIds[1]].setAttribute("src", images / white.png);
    // removing ability to click on the card
    cards[cardsChosenIds[0]].removeEventListener("click", flipCard);
    cards[cardsChosenIds[1]].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
    // anything else if not match we do following.
  } else {
    cards[optionOneId].setAttribute("src", images / blank.png);
    cards[optionTwoId].setAttribute("src", images / blank.png);
    alert("No match, Try again!");
  }
  resultDisplay.textContent = cardsWon.length;
  // resetting array so we can do this process all over again.
  cardsChosen = [];
  cardsChosenIds = [];
  // if we get all the cards write...
  // dividing by /2 because can only have 6 matches out of the 12.

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.innerHTML = "Congratulations you found all the matches!";
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
