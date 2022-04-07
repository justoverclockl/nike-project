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
const list = document.getElementsByClassName("carousel-list");

function scroll() {
  buttonNext.addEventListener("click", () => {
    list.scoop({
      left: -700,
      behavior: "smooth",
    });
  });
  const prev = document.getElementById;
}
