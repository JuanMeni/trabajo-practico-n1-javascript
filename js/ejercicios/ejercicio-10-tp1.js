// let numero = prompt("Escriba un numero");

// if(numero % 2 === 0){
//     document.write("El numero es divisible por 2")
// }
// else if (numero % 3 === 0){
//     document.write("El numero es divisible por 3")
// }
// else if(numero % 5 === 0){
//     document.write("El numero es divisible por 5")
// }
// else if( numero % 7 === 0){
//     document.write("El numero es divisible por 7")
// }

// else {
//     document.write("El numero no divisible ni por 2, 3, 5 y 7")

// }

let numero = prompt("Escribe un número");
if (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {
document.write("Es divisible por 2, 3, 5 o 7");
} else {
document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}