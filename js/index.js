var hamburguer = document.querySelector("#hamburguer");

hamburguer.addEventListener("click", function () {
  document.querySelector(".container").classList.toggle("show-menu");
});

changed = (event) => {
  if (event.target.value !== "" && !event.target.classList.contains("notblank")) {
    event.target.classList.toggle("notblank");
  }
}

