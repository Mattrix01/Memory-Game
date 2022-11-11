document.addEventListener("DOMContentLoaded", () => {
  //card options
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
  let cardsChosenId = [];
  let cardsWon = [];

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

  function checkMatch() {
    // searching through only img in grid id, could change to general
    const cards = document.querySelectorAll("#grid img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");

      alert("You have a match!");
    }
    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      alert("You have clicked the same image!");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      alert("Sorry, try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You found them all!";
    }
  }

  function flipCard() {
    // whatever element we clicked and get its attribute data.
    // this keyword is allowing us to interact to whatever element we click
    let cardId = this.getAttribute("data-id");
    // push item into a new array
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    // after 500 milliseconds run function above.
    if (cardsChosen.length === 2) {
      setTimeout(checkMatch, 500);
    }
  }
  createBoard();
});
