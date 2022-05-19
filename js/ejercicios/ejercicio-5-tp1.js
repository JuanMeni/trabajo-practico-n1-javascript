// Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
// Nota: Tener en cuenta la siguiente función: parseInt
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt


let numero1 = parseInt(prompt("Escriba un numero entero"));
let numero2 = parseInt(prompt("Escriba un segundo numero entero"));

// console.log(numero1)
// console.log(numero2)
document.write("Resultado: "+ (numero1 + numero2));

// parseInt("509")
// parseInt es para numeros enteros y parseFloat para numeros decimales