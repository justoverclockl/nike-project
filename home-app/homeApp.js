const logIN = document.getElementById("enter");
logIN.addEventListener("click", () => {
  const popUp = (document.getElementById("pop-up-container").style.display =
    "block");
});
const logOut = document.getElementById("close");
logOut.addEventListener("click", () => {
  const pop = (document.getElementById("pop-up-container").style.display =
    "none");
});

const closeCookie = document.getElementById("accept");
setTimeout(() => {
  document.getElementById("pop-up-cookie").style.display = "block";
}, 5000),
  closeCookie.addEventListener("click", () => {
    document.getElementById("pop-up-cookie").style.display = "none";
  });

const buttonNext = document.getElementById("next");
const list = document.querySelector(".carousel-list");

buttonNext.addEventListener("click", () => {
  list.scrollBy({
    left: 500,
    behavior: "smooth",
  });
});

const buttonBack = document.getElementById("back");
buttonBack.addEventListener("click", () => {
  list.scrollBy({
    left: -500,
    behavior: "smooth",
  });
});
