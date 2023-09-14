function scope() {
  const form = document.querySelector(".form");
  const peso = form.querySelector("#peso");
  const altura = form.querySelector("#altura");
  const res = document.querySelector(".resultado");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    if (isNaN(peso.value) || peso.value == '') {
      res.innerHTML = "Peso inválido";
    } else if (isNaN(altura.value) || altura.value == '') {
      res.innerHTML = "Altura inválida";
    } else {
      imc = (peso.value / (altura.value * altura.value)).toFixed(2);
      res.innerHTML = `O seu IMC é ${imc}`;
    }
  });
}
scope();
