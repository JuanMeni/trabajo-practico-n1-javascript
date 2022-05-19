// Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

// otra forma de hcaerlo
let frase = prompt ("Ingrese una frase de 5 caracteres");
frase = frase.toLowerCase();
// tolowercase es para q independientemente lo que ponga el usuario, saldra siempre en minuscula
// perro
console.log(frase.length);
// length nos mostrara la cantidad de caracteres que tiene la frase
console.log(frase.substring(0,1));
// substring nos mostrara de donde hasta donde analizara la frase
// if (frase.substring(0,1) === "a" || frase.substring(0,1) === "e" || frase.substring(0,1) === "i" || frase.substring(0,1) === "o" || frase.substring(0,1) === "u"){
//     document.write(frase.substring(0,1))
// }
// if (frase.substring(1,2) === "a" || frase.substring(1,2) === "e" || frase.substring(1,2) === "i" || frase.substring(1,2) === "o" || frase.substring(1,2) === "u"){
//     document.write(frase.substring(1,2))
// }
// if (frase.substring(2,3) === "a" || frase.substring(2,3) === "e" || frase.substring(2,3) === "i" || frase.substring(2,3) === "o" || frase.substring(2,3) === "u"){
//     document.write(frase.substring(2,3))
// }
// if (frase.substring(3,4) === "a" || frase.substring(3,4) === "e" || frase.substring(3,4) === "i" || frase.substring(3,4) === "o" || frase.substring(3,4) === "u"){
//     document.write(frase.substring(3,4))
// }
// if (frase.substring(4,5) === "a" || frase.substring(4,5) === "e" || frase.substring(4,5) === "i" || frase.substring(4,5) === "o" || frase.substring(4,5) === "u"){
//     document.write(frase.substring(4,5))
// }

// Otra forma de hacerlo es utilizando charAt

// if (frase.charAt(0) === "a" || frase.charAt(0) === "e" || frase.charAt(0) === "i" || frase.charAt(0) === "o" || frase.charAt(0) === "u"){
//         document.write(frase.charAt(0))
//     }
// y asi copiando el if, reemplazando el substring  por charAt y modificando los parametros que estan entre parentesis de 0 a 1, de 1 a 2 ...

// Otra forma de hacerlo con el bucle for

for(let indice = 0; indice < 5; indice ++){
    if (frase.charAt(indice) === "a" || frase.charAt(indice) === "e" || frase.charAt(indice) === "i" || frase.charAt(indice) === "o" || frase.charAt(indice) === "u"){
        document.write(frase.charAt(indice))
    }
}