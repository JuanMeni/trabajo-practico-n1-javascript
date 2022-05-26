// funciones sin parametros
function saludar(){
    // todo el codigo que quiero que tenga esta funcion
    document.write("Hola mundo.");
}

// invocar o llamar una funcion.
saludar();

// funcion con parametros
function saludarPersona(nombreRecibido, apellidoRecibido){
    document.write(`<br>Hola, mi nombre es: ${nombreRecibido} y mi apellido es: ${apellidoRecibido}`);
}

// funcion que retorna valor
function convertirDolaresAPesos(dolares){
    let pesosFinales = dolares * 210;
    return pesosFinales;
}

let nombre = prompt("Ingrese un nombre.");
let apellido = prompt("Ingrese un apellido.");

saludarPersona(nombre,apellido);

let pesosSinImpustos = convertirDolaresAPesos(20);
document.write(`<br>Juegos en pesos $ ${pesosSinImpustos}`);
