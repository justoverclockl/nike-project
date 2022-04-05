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
