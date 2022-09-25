const list = document.querySelector("#categories");
const numberOfCategories = list.querySelectorAll("li.item");
console.log(`Number of categories: ${numberOfCategories.length}`);

const listArray = numberOfCategories.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length} `);
});
