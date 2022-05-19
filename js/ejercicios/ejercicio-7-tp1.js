// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.


let numero1 = parseInt(prompt("Escriba un numero"))
let numero2 = parseInt(prompt("Escriba un segundo numero"))
let numero3 = parseInt(prompt("Escriba un tercer numero"))

if(numero1 > numero2 && numero1 > numero3){
    document.write("El numero mayor es: "+ numero1);
}
else if(numero2 > numero3){
    document.write("El numero mayor es: "+ numero2);
}
else{
    document.write("El numero mayor es: "+ numero3);
}
