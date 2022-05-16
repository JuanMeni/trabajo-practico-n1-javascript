function contarVocales(str) { 

    const contar = str.match(/[aeiou]/gi).length;

    return contar;
}

const cadena = prompt("Escriba una frase");

const resultado = contarVocales(cadena);

document.write("Cantidad de vocales en la frase: "+ resultado)

// var text = prompt("Escribe una frase");
// var nText = text.length;
// var i;
// for (i = 0; i < nText; i++) {
// if (text.substr(i,1) === "a" || text.substr(i,1) === "e" || text.substr(i,1) === "i" || text.substr(i,1) === "o" || text.substr(i,1) === "u") {
// document.write(text.substr(i,1);
// }
// }