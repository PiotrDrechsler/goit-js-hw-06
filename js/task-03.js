const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://image.shutterstock.com/shutterstock/photos/2150116717/display_1500/stock-photo-a-dog-paw-with-lone-bee-on-dry-ground-among-the-withered-grasses-2150116717.jpg",
    alt: "A dog paw with lone bee on dry ground among the withered grasses",
  },
  {
    url: "https://image.shutterstock.com/shutterstock/photos/2198401407/display_1500/stock-photo-heart-shaped-lake-in-the-middle-of-the-forest-czarny-staw-in-puszcza-niepo-omicka-in-summer-2198401407.jpg",
    alt: "heart-shaped lake in the middle of the forest Czarny Staw in Puszcza Niepołomicka in summer",
  },
];

const gallery = document.querySelector(".gallery");

const addImage = images
  .map(
    (image) =>
      `<li style="list-style-type: none"><img class="image" src="${image.url}" alt="${image.alt}"/></li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", addImage);
