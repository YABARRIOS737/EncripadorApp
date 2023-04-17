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
    texto = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    caricatura.src = "./img/encriptado.jpg";
} else {
    caricatura.src = "./img/imagen1.png";
    tituloMensaje.textContent = "Ningún mensaje fué encontrado";
    parrafo.textContent = "Debes ingresar algún texto que deseas encriptar o desencriptar";
    alert("Debes ingresar algún texto");
    }

}