//Esto es un comentario simple

/*Esto es un
comentario de
varias lineas*/

// mostrar un comentario en la pantalla
document.write("Hola mundo");

// hay otra forma de mostrar un msj en la consola
console.log("Hola mundo");

// hay una tercera forma de mostrar un msj
// alert("Hola comision 2i");

// crear, declarar, inicializar una variables (var - let - const); var ya no se usa

let persona = "Nicolas Andrade";
var persona2 = "Daniela";

document.write("<br>Persona: "+ persona);
document.write("<br>Segunda persona: "+ persona2);

// cambiar el valor de una variable

persona = "Fancisco";
document.write("<br>Persona: "+ persona);

// la diferencia entre let y const es q en let, la variable cambia a lo largo del tiempo, mientras que const es una variable fija
const url = "https://www.youtube.com/"
document.write("<br>URL: "+ url);

let anio = 1997;
document.write("<br>Año de nacimiento: "+ anio);

// variable booleana
let foco = false;
foco=true;
document.write("<br>Foco: "+ foco);