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

/*let lista = document.querySelectorAll("li");
for (let i = 0; i < lista.length; i++) {

  lista[i].addEventListener("mouseover", function () {
    
    
    this.style.color = "#818181";
    this.style.transition = "0.3";

  });
}*/
