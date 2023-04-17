function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let caricatura = document.getElementById("caricatura");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    caricatura.src = "./img/encriptado.jpg";
  } else {
    caricatura.src = "./img/imagen1.png";
    tituloMensaje.textContent = "Ningún mensaje fué encontrado";
    parrafo.textContent = "Debes ingresar algún texto que deseas encriptar o desencriptar";
      "Debes ingresar algún texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar algún texto");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let caricatura = document.getElementById("caricatura");

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    caricatura.src = "./img/desencriptado.jpg";
  } else {
    caricatura.src = "./img/imagen1.png";
    tituloMensaje.textContent = "Ningún mensaje fué encontrado";
    parrafo.textContent = "Debes ingresar algún texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar algún texto");
  }
}
