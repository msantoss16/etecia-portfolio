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

document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value;
    document.querySelector("label[for=prazo]").innerHTML = `Deadline: ${prazo} weeks`;
    atualizarPreco();
})

function atualizarPreco(){
    const qtde = document.querySelector("#qtde").value;
    const temJS = document.querySelector("#js").checked;
    const incluiLayout = document.querySelector("#layout-sim").checked;
    const prazo = document.querySelector("#prazo").value;
  
    let preco = qtde * 100;
    if (temJS) preco *= 1.1
    if (incluiLayout) preco += 500
    let taxaUrgencia = 1 - prazo*0.1;
    preco *= 1 + taxaUrgencia
   
    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}