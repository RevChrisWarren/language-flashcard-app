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
const span = document.querySelector(".close");
// const newCardBtn = document.querySelector(".new-card-btn");
const UpdateBtn = document.querySelector(".edit");

const cardListArr = [];

function addNewDeck() {
  modal.style.display = "block";
  // newCardBtn.style.display = "none";
}
function showDeckList() {
  console.log("test");
}

async function saveDeckName(event) {
  event.preventDefault();
  const newDeckEntry = newDeckEntryField.value.trim();
  const newDeckListItem = document.createElement("li");
  if (!newDeckEntry) {
    return alert("Error: Please enter a Deck Name");
  }
  let newDeck = await fetch("/api/decks/", {
    method: "POST",
    body: JSON.stringify({ newDeckEntry }),
    headers: { "Content-Type": "application/json" },
  });
  // newDeckListItem.textContent = newDeckEntry;
  newDeckListItem.innerHTML = `<a class="dropdown-item">${newDeckEntry}</a>`;
  newDeckListItem.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".dropdown-toggle").innerHTML = newDeckEntry;
    let queryUrl = fetch("/api/");
  });

  console.log(newDeckListItem);
  dropDownMenu.append(newDeckListItem);
  modal.style.display = "none";
  newDeckEntryField.value = "";
  // newCardBtn.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
  // newCardBtn.style.display = "block";
}

function newCard() {
  console.log("clear");
  frontInputEl.value = "";
  backInputEl.value = "";
  saveBtn.style.display = "block";
  UpdateBtn.style.display = "none";
}

function saveFrontBack(event) {
  event.preventDefault();
  const frontCard = frontInputEl.value.trim();
  const backCard = backInputEl.value.trim();
  const listCard = document.createElement("div");
  listCard.classList = "list-card";
  listCard.id = "list-card";
  if (!frontCard || !backCard) {
    return alert("Error: Please enter in both fields");
  }
  cardListArr.push(frontInputEl.value);
  cardListArr.push(backInputEl.value);
  listCard.textContent = frontCard + " / " + backCard;
  listContainer.append(listCard);
  frontInputEl.value = "";
  backInputEl.value = "";
  console.log(cardListArr);
}

const listCardContainer = document.querySelector(".list-container");
listCardContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("list-card")) {
    const word = e.target.innerHTML.split(" / ");
    frontInputEl.value = word[0];
    backInputEl.value = word[1];
    saveBtn.style.display = "none";
    UpdateBtn.style.display = "block";
  }
});

function updateCard(e) {
  e.preventDefault();
  console.log("update");
  console.log(e.target);
}

UpdateBtn.addEventListener("click", updateCard);
saveBtn.addEventListener("click", saveFrontBack);
addNewDeckBtn.addEventListener("click", addNewDeck);
modalBtn.addEventListener("click", saveDeckName);
span.addEventListener("click", closeModal);
// newCardBtn.addEventListener("click", newCard);
