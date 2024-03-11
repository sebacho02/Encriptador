function encriptar(texto) {
    var vocales = ["e", "i", "a", "o", "u"];
    var reemplazos = ["enter", "imes", "ai", "ober", "ufat"];
    var resultado = "";
  
    for (var i = 0; i < texto.length; i++) {
      var letra = texto[i];
      var indice = vocales.indexOf(letra);
  
      if (indice >= 0) {
        resultado += reemplazos[indice];
      } else {
        resultado += letra;
      }
    }
  
    return resultado;
  }
  
