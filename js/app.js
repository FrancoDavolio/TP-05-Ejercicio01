let numAleatorio = 0;
let numero = 0;
function generarNumeroAleatorio() {
  numAleatorio = Math.round(Math.random() * (0 - 10) + 10);
  console.log(numAleatorio);
}

function numeroMagico() {
  numero = document.getElementById("num").value;
  console.log(numero);
  if (numAleatorio == numero) {
    alert("Felicitaciones usted adivino el Numero.");
  } else if (numAleatorio < numero) {
    alert("El numero es menor al que usted ingreso.");
  } else if (numAleatorio > numero) {
      alert("El numero es mayor al que usted ingreso.")
  }
}

