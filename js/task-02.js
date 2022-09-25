const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngredients = document.querySelector("#ingredients");

for (let ingredient of ingredients) {
  const addLi = document.createElement("li");
  addLi.innerText = ingredient;
  addLi.classList.add("item");
  listOfIngredients.append(addLi);
}
