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

// for each item in my array, create an element.
function createBoard() {
  for (let i = 0; i < 10; i++) {
    const card = document.createElement("img");
    // grabbing card we just created
    card.setAttribute("src", "images/blank.png");
    // Making sure each card is unique, keeping track of each one adding an id.
    card.setAttribute("data-id", i);
    gridDisplay.appendChild(card);
  }
}

createBoard();
