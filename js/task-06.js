const input = document.getElementById("validation-input");
const dataLength = parseInt(input.getAttribute("data-length"));

const checkClass = (add, remove) => {
  input.classList.add(add);
  input.classList.remove(remove);
};

input.addEventListener("blur", (event) => {
  const length = event.target.value.length;

  if (length == dataLength) {
    checkClass("valid", "invalid");
  } else {
    checkClass("invalid", "valid");
  }

  console.log(length);
  console.log(dataLength);
});
