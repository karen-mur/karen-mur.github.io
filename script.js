var letraE = "enter";
var letraI = "imes";
var letraA = "ai";
var letraO = "ober";
var letraU = "ufat";

function codificar() {
  var texto = document.getElementById("textoRaw").value.toLowerCase();
  if (texto == "") {
    document.getElementById("textoProcesado").innerHTML = "";
    return;
  }
  var aux2 = "";
  for (let index = 0; index < texto.length; index++) {
    if (texto.charAt(index) == "e") {
      aux2 += letraE;
    } else if (texto.charAt(index) == "i") {
      aux2 += letraI;
    } else if (texto.charAt(index) == "a") {
      aux2 += letraA;
    } else if (texto.charAt(index) == "o") {
      aux2 += letraO;
    } else if (texto.charAt(index) == "u") {
      aux2 += letraU;
    } else {
      aux2 += texto.charAt(index);
    }
  }
  document.getElementById("textoProcesado").innerHTML = aux2;
}

function decodificar() {
  var texto = document.getElementById("textoRaw").value.toLowerCase();
  if (texto == "") {
    document.getElementById("textoProcesado").innerHTML = "";
    return;
  }

  texto = texto.replaceAll(letraE, "e");
  texto = texto.replaceAll(letraA, "a");
  texto = texto.replaceAll(letraI, "i");
  texto = texto.replaceAll(letraO, "o");
  texto = texto.replaceAll(letraU, "u");

  document.getElementById("textoProcesado").innerHTML = texto;
}

function copiar() {
  // Get the text field
  var textoCopiado = document.getElementById("textoProcesado");

  // Select the text field
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard.writeText(textoCopiado.value);  
  //alert("Copied the text: " + copyText.value);

}
