import createProfileCard from "./cardModule.js";
import greet, { add, multiply } from "./mathUtils.js";

const addProfileBtn = document.getElementById("addProfile");
const cardContainer = document.getElementById("cardContainer");
const profileCountElem = document.getElementById("profileCount");

// Greet + math utils test
greet();
console.log("➕ Add(2,3):", add(2, 3));
console.log("✖ Multiply(4,5):", multiply(4, 5));

// Function to update profile count
function updateProfileCount() {
  const count = cardContainer.children.length;
  profileCountElem.textContent = `Profiles: ${count}`;
}

addProfileBtn.addEventListener("click", () => {
  const name = prompt("Enter name:");
  const role = prompt("Enter role:");

  if (name && role) {
    const newCard = createProfileCard(name, role, updateProfileCount);
    cardContainer.appendChild(newCard);
    updateProfileCount();
  }
});
