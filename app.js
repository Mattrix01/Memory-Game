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

function flipCard() {
  // whatever element we clicked and get its attribute data.
  // this keyword is allowing us to interact to whatever element we click
  const cardId = this.getAttribute("data-id");
  // push item into a new array
  cardsChosen.push(cardArray[cardId].name);
  this.setAttribute("src", cardArray[cardId].img);
}
