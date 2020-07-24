var hamburguer = document.querySelector("#hamburguer");

hamburguer.addEventListener("click", function () {
  document.querySelector(".container").classList.toggle("show-menu");
});

changed = (event) => {
  if (event.target.value !== "" && !event.target.classList.contains("notblank")) {
    event.target.classList.toggle("notblank");
  }
}
/* 
var field = document.querySelector(".field");

field.addEventListener('change', function () {
  if (field.value !== "" && !field.classList.contains("notblank")) {
    field.classList.toggle("notblank");
  }
}); */