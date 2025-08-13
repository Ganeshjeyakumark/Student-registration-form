// Default export function to create a profile card
export default function createProfileCard(name, role, updateCount) {
  const card = document.createElement("div");
  card.classList.add("card");

  const nameElem = document.createElement("h3");
  nameElem.textContent = name;

  const roleElem = document.createElement("p");
  roleElem.textContent = role;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "🗑 Delete";
  removeBtn.classList.add("remove-btn");

  removeBtn.addEventListener("click", () => {
    card.remove();
    updateCount();
  });

  card.appendChild(nameElem);
  card.appendChild(roleElem);
  card.appendChild(removeBtn);

  return card;
}
