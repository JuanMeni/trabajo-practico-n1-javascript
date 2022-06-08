// comision, notas, legajo, estado, asistencia
// comision, antiguedad, horarios: (part-time, full-time), tipo de contrato.
// crear una clase
class Usuario {
  // primero creamos un metodo constructor
  constructor(
    nombreUsuarioParam,
    nombreParam,
    apellidoParam,
    correoParam,
    passwordParam,
    direccionParam
  ) {
    this.nombreUsuario = nombreUsuarioParam;
    this.password = passwordParam;
    this.apellido = apellidoParam;
    this.nombre = nombreParam;
    this.correo = correoParam;
    this.direccion = direccionParam;
  }
  // definir los metodos
  cambiarPassword() {
    document.write("<br>Cambiando el password ...");
  }
  // propiedades conmutadas get y set
  // getter
  get mostrarNombreUsuario() {
    return this.nombreUsuario;
  }

  get mostrarDireccion() {
    return this.direccion;
  }

  // setter
  set modificarDireccion(nuevaDireccion) {
    this.direccion = nuevaDireccion;
  }

  mostrarDatos() {
    document.write(`<br>
        <ul>
        <li>nombre: ${this.nombre}</li>
        <li>Apellido: ${this.apellido}</li>
        <li>Correo: ${this.correo}</li>
        <li>Direccion: ${this.direccion}</li>
        <li>Nombre usuario: ${this.nombreUsuario}</li>
        </ul>`);
  }
}
// crear una clase con herencia
class Alumno extends Usuario{
  constructor(comision, legajo, nombre, apellido, nombreUsuario, password, email, direccion){
    // invocamos al constructor de la clase usuario
    super(nombreUsuario, nombre, apellido, email, password, direccion);
    this.comision = comision;
    this.legajo = legajo;
    this.estado = estado;
  }
}
// como crear un objeto o instancia
let userValentina = new Usuario(
  "valeOrmaechea",
  "Valentina",
  "Ormaechea",
  "valeOrma@gmail.com",
  "1234560a",
  "-"
);
let userJuan = new Usuario(
  "menichetti",
  "Juan Pablo",
  "Menichetti",
  "menichetti@gmail.com",
  "1234560a",
  "-"
);
console.log(userValentina);

userValentina.mostrarDatos();
userJuan.mostrarDatos();

document.write(`El nombre de usuario es ${userValentina.mostrarNombreUsuario}`);
document.write(
  `<br>La direccion de usuario es ${userJuan.mostrarNombreUsuario} es ${userJuan.mostrarDireccion}`
);
userJuan.modificarDireccion = 'Tucumán';
document.write(`<br>La direccion de usuario es ${userJuan.mostrarNombreUsuario} es ${userJuan.mostrarDireccion}`)
