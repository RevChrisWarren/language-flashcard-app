// global variables that need to be available to multiple functions
let currentCards = [];
let cardIterator = 0;

// returns an array of card objects based on the deck_id
async function getCards(deck_id) {
    let cards =  await fetch(`/api/cards?deck_id=${deck_id}`);
    cards = await cards.json();
    return cards;
}

// handles the click event for a particular deck and calls the populateDrillCards function to fill in the drill view
async function deckSelection(e) {    
    const deck_id = e.target.dataset.id;
    const cards = await getCards(deck_id);
    // sets the currentCards global variable to the data for the cards of currently selected deck
    currentCards = cards;
    // resets cardIterator to 0 everytime a new deck is selected
    cardIterator = 0;
   
    const cardContainerEl = document.getElementById("card-container");
    cardContainerEl.classList.remove("d-none");

    const deckDropDownEl = document.getElementById("deck-dropdown");
    deckDropDownEl.textContent = e.target.textContent;

    populateDrillCard(cards);
}

// sets up html for a card drill and iterates the counterIterator
function populateDrillCard(cards) {

    if (cardIterator < cards.length - 1) {
        const cardFrontTextEl = document.getElementById("card-front-text");
        const cardBackTextEl = document.getElementById("card-back-text");
        const buttonContainerEl = document.getElementById("button-container");
    
        buttonContainerEl.dataset.cardId = cards[cardIterator].id;
        cardFrontTextEl.textContent = cards[cardIterator].front;
        cardBackTextEl.textContent = cards[cardIterator].back;
    
        cardIterator++;
    } else {
        endDrill();
    }
}

function endDrill() {
    console.log("NO MORE CARDS TO DRILL");
    
    const cardContainerEl = document.getElementById("card-container");
    cardContainerEl.setAttribute("class", "d-none");

    const deckDropDownEl = document.getElementById("deck-dropdown");
    deckDropDownEl.textContent = "Decks"
}

// handles logic for sending a rating of a drilled card to the server
async function sendRating(card_id, rating) {
    fetch(`/api/cards/${card_id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          userResponse: rating,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
}


// function that sends rating to server and resets html for next drill card
function drillRating(e) {
    const rating = e.target.textContent
    const card_id = e.target.parentElement.dataset.cardId

    sendRating(card_id, rating);
    populateDrillCard(currentCards);
    unflipCard();
}

// functions responsible for applying and removing flip class to drilling card
function flipCard() {
    const cardBackTextEl = document.getElementById("card-back-text");
    cardBackTextEl.classList.remove("d-none");
    
    const buttonContainerEl = document.getElementById("button-container");
    buttonContainerEl.classList.remove("d-none");
    
    const cardEl = document.getElementById("card-content");
    cardEl.classList.add("card-flip");
}

function unflipCard() {
    const cardBackTextEl = document.getElementById("card-back-text");
    cardBackTextEl.classList.add("d-none");
    
    const buttonContainerEl = document.getElementById("button-container");
    buttonContainerEl.classList.add("d-none");
    
    const cardEl = document.getElementById("card-content");
    cardEl.classList.remove("card-flip");
}


// initializes page, adds event listeners for various buttons
function init(){
    const decksEl = document.getElementsByClassName("dropdown-item");
    const drillRatingEl = document.getElementsByClassName("drill-rating");
    
    Array.from(decksEl).forEach((element) => {
        element.addEventListener('click', deckSelection);
    });

    Array.from(drillRatingEl).forEach((element) => {
        element.addEventListener('click', drillRating);
    });

    const drillFlipButtonEl = document.getElementById("flip-button");
    drillFlipButtonEl.addEventListener("click", flipCard)
}

// defers init function until after page load
window.onload = function(){
    init();
}