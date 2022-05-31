// declarar o crear un arreglo
let usuario = [];

let series = ["Naruto",2 , "GOT",8 ,"Rick & Morty", 4,];
document.write(series);

const imprimirArreglos = (titulo) => {
    document.write("<hr>");
    document.write(`<h3>${titulo}</h3>`);
for(let posicion = 0; posicion < series.length; posicion ++){
    document.write("<br>Elemento: "+ series[posicion]);
}
}

// acceder a un elemento del arreglo

document.write("<br>"+ series[0]);
document.write("<br>"+ series[4]);
console.log(series.length);

// bucle para mostrar todos los elementos del arreglo
imprimirArreglos("Arreglo original")

// for(let posicion = 0; posicion < series.length; posicion ++){
//     document.write("<br>Elemento: "+ series[posicion]);
// }

// agregamos un elemento al final del arreglo
series.push("ozark");

// for(let posicion = 0; posicion < series.length; posicion ++){
//     document.write("<br>Elemento: "+ series[posicion]);
// }

imprimirArreglos("Se agrego un elemento al final del elemento")
// agregar un elemento en una posicion en particular.
series.splice(3,0, "Breaking bad");

// document.write("<hr>");
// for(let posicion = 0; posicion < series.length; posicion ++){
//     document.write("<br>Elemento: "+ series[posicion]);
// }
imprimirArreglos("Se agrego un elemento en una posicion particular.")
// Eliminar un elemento de una posicion en particular
series.splice(3,1,);

// document.write("<hr>");
// for(let posicion = 0; posicion < series.length; posicion ++){
//     document.write("<br>Elemento: "+ series[posicion]);
// }
imprimirArreglos("Se elimino un elemento de una posicion en particular.")