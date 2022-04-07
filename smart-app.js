const logIN = document.getElementById("enter");
logIN.addEventListener("click", () => {
  popUp = document.getElementById("pop-up-container").style.display = "block";
});
const logOut = document.getElementById("close-popup");
logOut.addEventListener("click", () => {
  pop = document.getElementById("pop-up-container").style.display = "none";
});

const next = document.getElementById("next");
const div = document.querySelector(".slide");

next.addEventListener("click", () => {
  div.scrollBy({
    left: 600,
    behavior: "smooth",
  });
});

const goBack = document.getElementById("goBack");

goBack.addEventListener("click", () => {
  div.scrollBy({
    left: -600,
    behavior: "smooth",
  });
});
