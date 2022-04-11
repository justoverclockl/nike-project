// mostra search
let search = document.getElementById("icon-search");
search.addEventListener("click", () => {
  const pageSearch = (document.getElementById("page-search").style.display =
    "block");
});

const closeSearch = document.getElementById("close-btn");
closeSearch.addEventListener("click", () => {
  const closePageSearch = (document.getElementById(
    "page-search"
  ).style.display = "none");
});

/* mostra input
let iconSearch = document.getElementById("icon-search");
iconSearch.addEventListener("mouseover", () => {
  const search = (document.getElementById("input-search").style.display =
    "block");
});

iconSearch.addEventListener("mouseout", () => {
  const closeSearch = (document.getElementById("input-search").style.display =
    "none");
});*/

// mostra menu
let iconMenu = document.getElementById("icon-menu");
iconMenu.addEventListener("click", () => {
  let menu = (document.getElementById("menu").style.display = "block");
});

const closeIconMenu = document.getElementById("closebtn");
closeIconMenu.addEventListener("click", () => {
  const closeMenu = (document.getElementById("menu").style.display = "none");
});

const list = document.getElementById("list");

function enterList(event) {
  event.currentTarget.style.color = "gray";
}

function exitList(event) {
  event.currentTarget.style.color = "white";
}

function hoverElement(event) {
  event.target.style.color = "white";
}

function hoveroutElement(event) {
  event.target.style.color = "inherit";
}

list.addEventListener("mouseenter", enterList);
list.addEventListener("mouseleave", exitList);
list.addEventListener("mouseover", hoverElement);
list.addEventListener("mouseout", hoveroutElement);
