// function contarVocales(str) { 

//     const contar = str.match(/[aeiou]/gi).length;

//     return contar;
// }

// const cadena = prompt("Escriba una frase");

// const resultado = contarVocales(cadena);

// document.write("Cantidad de vocales en la frase: "+ resultado)

// otra forma de hcaerlo
let frase = prompt ("Ingrese una frase de 5 caracteres");
// perro
console.log(frase.length);
// length nos mostrara la cantidad de caracteres que tiene la frase
console.log(frase.substring(0,1));
// substring nos mostrara de donde hasta donde analizara la frase
if (frase.substring(0,1) === "a" || frase.substring(0,1) === "e" || frase.substring(0,1) === "i" || frase.substring(0,1) === "o" || frase.substring(0,1) === "u"){
    document.write(frase.substring(0,1))
}
if (frase.substring(1,1) === "a" || frase.substring(1,1) === "e" || frase.substring(1,1) === "i" || frase.substring(1,1) === "o" || frase.substring(1,1) === "u"){
    document.write(frase.substring(1,1))
}
if (frase.substring(2,1) === "a" || frase.substring(2,1) === "e" || frase.substring(2,1) === "i" || frase.substring(2,1) === "o" || frase.substring(2,1) === "u"){
    document.write(frase.substring(2,1))
}
if (frase.substring(3,1) === "a" || frase.substring(3,1) === "e" || frase.substring(3,1) === "i" || frase.substring(3,1) === "o" || frase.substring(3,1) === "u"){
    document.write(frase.substring(3,1))
}
if (frase.substring(4,1) === "a" || frase.substring(4,1) === "e" || frase.substring(4,1) === "i" || frase.substring(4,1) === "o" || frase.substring(4,1) === "u"){
    document.write(frase.substring(4,1))
}
if (frase.substring(5,1) === "a" || frase.substring(5,1) === "e" || frase.substring(5,1) === "i" || frase.substring(5,1) === "o" || frase.substring(5,1) === "u"){
    document.write(frase.substring(5,1))
}