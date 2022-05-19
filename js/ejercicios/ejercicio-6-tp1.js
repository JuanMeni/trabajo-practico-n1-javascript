// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.


let numero1 = parseInt(prompt("Escriba un numero"));
let numero2 = parseInt(prompt("Escriba un segundo numero"));

if (numero1 > numero2) {
  document.write("El numero mayor es: " + numero2);
} else if (numero1 === numero2) {
  document.write("el numero 1 es igual al numero 2");
} else {
  document.write("El numero mayor es: " + numero2);
}
