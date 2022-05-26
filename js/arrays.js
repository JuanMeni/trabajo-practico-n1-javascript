// declarar o crear un arreglo
let usuario = [];

let series = ["Naruto",2 , "GOT",8 ,"Rick & Morty", 4,];
document.write(series);

// acceder a un elemento del arreglo

document.write("<br>"+ series[0]);
document.write("<br>"+ series[4]);
console.log(series.length);

// bucle para mostrar todos los elementos del arreglo

for(let posicion = 0; posicion < series.length; posicion ++){
    document.write("<br>Elemento: "+ series[posicion]);
}

// agregamos un elemento al final del arreglo
series.push("ozark");

for(let posicion = 0; posicion < series.length; posicion ++){
    document.write("<br>Elemento: "+ series[posicion]);
}

// agregar un elemento en una posicion en particular.
series.splice(3,0, "Breaking bad");

document.write("<hr>");
for(let posicion = 0; posicion < series.length; posicion ++){
    document.write("<br>Elemento: "+ series[posicion]);
}

// Eliminar un elemento de una posicion en particular
series.splice(3,1,);

document.write("<hr>");
for(let posicion = 0; posicion < series.length; posicion ++){
    document.write("<br>Elemento: "+ series[posicion]);
}
