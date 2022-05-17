const listEl = document.querySelector(".list");
const cardInputEl = document.querySelector("#list-card-input");
const listContainer = document.querySelector(".list-container");
const saveBtn = document.querySelector(".save");
const frontInputEl = document.querySelector("#front");
const backInputEl = document.querySelector("#back");

const cardListArr = [];

// function addCard(event) {
//   const listCard = document.createElement("div");
//   listCard.classList = "list-card";
//   event.preventDefault();
//   const newCard = cardInputEl.value.trim();
//   if (!newCard || newCard === "") {
//     return alert("Error: Please enter a value for the card.");
//   }
//   cardListArr.push(cardInputEl.value);
//   listCard.textContent = newCard;
//   listContainer.append(listCard);
//   console.log(cardListArr);
//   cardInputEl.value = "";
// }

function saveFrontBack(event) {
  event.preventDefault();
  console.log("click");
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

const addNew = document.querySelector(".add-new");
// addNew.addEventListener("click", addCard);
saveBtn.addEventListener("click", saveFrontBack);
