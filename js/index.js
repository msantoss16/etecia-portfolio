var hamburguer = document.querySelector("#hamburguer");
var form = document.querySelector('form');

hamburguer.addEventListener("click", function () {
  document.querySelector(".container").classList.toggle("show-menu");
});

changed = (event) => {
  if (event.target.value !== "" && !event.target.classList.contains("notblank")) {
    event.target.classList.toggle("notblank");
  }
}

form.addEventListener("submit", function (evento) {
  evento.preventDefault();
});

fOrcamento = (event) => {
  window.open(
    'orcamento.html',
    '_blank'
  );
}