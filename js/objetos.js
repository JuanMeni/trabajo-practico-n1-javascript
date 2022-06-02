// let memoria = "16RAM";
// let pantalla = "6";
// let almacenamiento = "128GB";
// let camara = true;
// let SO = "android";

// Notacion literal para crear un objeto
let usuarioFrancisco = {
    // propiedad:valor,
    nombreUsuario: "fran",
    password: "1234560Abc",
    nombre: "Francisco",
    apellido: "Andrade",
    correo: "fran@gmail.com",
    estado: true,
    // metodos o funciones
    cambiarPassword:() => {
        document.write("<br>Nuevo  password");
    }
}

// mostrar un objeto
// No se puede utilizar un documetn write para mostrar un objeto
console.log(usuarioFrancisco)

// mostrar propiedades de un objeto, forma 1
document.write(`<br>Nombre de usuario: ${usuarioFrancisco.nombreUsuario}`);
// mostrar propiedades de un objeto, forma 2
document.write(`<br>Correo: ${usuarioFrancisco["correo"]}`);
// para modificar una propiedad de un objeto
usuarioFrancisco.estado = false
document.write(`<br>Estado: ${usuarioFrancisco.estado}`);
// agregamos una propiedad nueva al objeto
usuarioFrancisco.direccion = "Tucuman";
document.write(`<br>Direccion: ${usuarioFrancisco.direccion}`);
// invocar a un metodo del objeto
usuarioFrancisco.cambiarPassword();
// crear un bucle que muestre todo el objeto
let claves = Object.keys(usuarioFrancisco);
console.log(claves);

console.log(usuarioFrancisco);
for(let indice =0; indice < claves.length; indice ++){
    document.write(`<br>${claves[indice]}: ${usuarioFrancisco[claves[indice]]}`)
}