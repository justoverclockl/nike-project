// exhibition search
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

// exhibition menu
let iconMenu = document.getElementById("icon-menu");
iconMenu.addEventListener("click", () => {
  let menu = (document.getElementById("menu").style.display = "block");
});

const closeIconMenu = document.getElementById("closebtn");
closeIconMenu.addEventListener("click", () => {
  const closeMenu = (document.getElementById("menu").style.display = "none");
});
