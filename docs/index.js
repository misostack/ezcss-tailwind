const menuBurger = document.querySelector("#menu-burger");
const menu = document.querySelector("#menu");

menuBurger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
