let iconSearch = document.getElementById("icon-search");
iconSearch.addEventListener("mouseover", () => {
  const search = (document.getElementById("input-search").style.display =
    "block");
});

iconSearch.addEventListener("mouseout", () => {
  const closeSearch = (document.getElementById("input-search").style.display =
    "none");
});

let iconMenu = document.getElementById("icon-menu");
iconMenu.addEventListener("click", () => {
  const menu = (document.getElementById("menu").style.display = "block");
});

/*let lista = document.querySelectorAll("li");
for (let i = 0; i < lista.length; i++) {

  lista[i].addEventListener("mouseover", function () {
    
    
    this.style.color = "#818181";
    this.style.transition = "0.3";

  });
}*/

const closeIconMenu = document.getElementById("closebtn");
closeIconMenu.addEventListener("click", () => {
  const closeMenu = (document.getElementById("menu").style.display = "none");
});
