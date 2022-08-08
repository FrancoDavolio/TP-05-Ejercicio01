let numAleatorio = 0;
function generarNumeroAleatorio() {
   numAleatorio = Math.round(Math.random() * (0 - 100) + 100);
   console.log(numAleatorio);
}

function numeroMagico(){
   let numUsuario = parseInt(prompt("Ingrese el numero que usted piensa que va a salir."));
   if (numAleatorio === numUsuario) {
      alert("Felicitaciones usted adivino el Numero.");
   }else(alert("No advino el numero."));
}





