const listEl = document.querySelector(".list");
const cardInputEl = document.querySelector("#list-card-input");
const listContainer = document.querySelector(".list-container");
const saveBtn = document.querySelector(".save");
const frontInputEl = document.querySelector("#front");
const backInputEl = document.querySelector("#back");
const addNewDeckBtn = document.querySelector(".new-deck-btn");
const modal = document.getElementById("modal");
const modalBtn = document.querySelector(".modal-btn");
const newDeckEntryField = document.querySelector("#new-deck-field");
const dropDownMenu = document.querySelector(".dropdown-menu");

const cardListArr = [];

function addNewDeck() {
  modal.style.display = "block";
}

function saveDeckName(event) {
  event.preventDefault();
  const newDeckEntry = newDeckEntryField.value.trim();
  const newDeckListItem = document.createElement("li");
  if (!newDeckEntry) {
    return alert("Error: Please enter a Deck Name");
  }
  newDeckListItem.textContent = newDeckEntry;
  dropDownMenu.append(newDeckListItem);
  modal.style.display = "none";
}

function saveFrontBack(event) {
  event.preventDefault();
  const frontCard = frontInputEl.value.trim();
  const backCard = backInputEl.value.trim();
  const listCard = document.createElement("div");
  listCard.classList = "list-card";
  if (!frontCard || !backCard) {
    return alert("Error: Please enter in both fields");
  }
  cardListArr.push(frontInputEl.value + "/" + backInputEl.value);
  listCard.textContent = frontCard;
  listContainer.append(listCard);
  frontInputEl.value = "";
  backInputEl.value = "";
  console.log(cardListArr);
}

saveBtn.addEventListener("click", saveFrontBack);
addNewDeckBtn.addEventListener("click", addNewDeck);
modalBtn.addEventListener("click", saveDeckName);
