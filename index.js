function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/e/gi, "nter")
      .replace(/i/gi, "hikes")
      .replace(/a/gi, "pai")
      .replace(/o/gi, "yober")
      .replace(/u/gi, "ulat");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      muñeco.src = "./img/encriptado.jpg";
    } else {
      muñeco.src = "./img/muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
  }
    function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/nter/gi, "e")
      .replace(/hikes/gi, "i")
      .replace(/pai/gi, "a")
      .replace(/yober/gi, "o")
      .replace(/ulat/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/desencriptado.jpg";
      } else {
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
      }
  }