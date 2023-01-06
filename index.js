let close = document.querySelector(".close");
let menuIcon = document.getElementById("menuIcon");
let menu = document.getElementById("menu")

close.addEventListener("click",renderMenu);
menuIcon.addEventListener("click",renderMenu);

function renderMenu() {
  menu.classList.toggle("activeMenu");
}