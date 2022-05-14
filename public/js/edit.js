const listCard = document.createElement("div");
listCard.classList = "list-card";
const listEl = document.querySelector(".list");
const cardInputEl = document.querySelector("#list-card-input");
const listContainer = document.querySelector(".list-container");

const cardListArr = [];

function addCard(event) {
  event.preventDefault();
  const newCard = cardInputEl.value.trim();
  if (!newCard || newCard === "") {
    return alert("Error: Please enter a value for the card.");
  }
  cardListArr.push(cardInputEl.value);
  listCard.textContent = newCard;
  listContainer.append(listCard);

  console.log(cardListArr);
  cardInputEl.value = "";
}

const addNew = document.querySelector(".add-new");
addNew.addEventListener("click", addCard);
