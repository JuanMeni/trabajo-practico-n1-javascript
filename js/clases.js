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
class Alumno extends Usuario {
  constructor(
    comision,
    legajo,
    estado,
    nombre,
    apellido,
    nombreUsuario,
    password,
    email,
    direccion
  ) {
    // invocamos al constructor de la clase usuario
    super(nombreUsuario, nombre, apellido, email, password, direccion = 'sin direccion');
    this.comision = comision;
    this.legajo = legajo;
    this.estado = estado;
    this.asistencia = 0;
    this.notas = [];
  }
  mostrarAlumno() {
    document.write(`<ul>
    <li>Comision: ${this.comision}</li>
    <li>Legajo: ${this.legajo}</li>
    <li>Estado: ${this.estado}</li>
    <li>Asistencia: ${this.asistencia}</li>
    <li>Notas: ${this.notas}</li>
    </ul>`);
  }
  mostrarDatos() {
    document.write(`<br>
        <ul>
        <li>nombre: ${this.nombre}</li>
        <li>Apellido: ${this.apellido}</li>
        <li>Correo: ${this.correo}</li>
        <li>Direccion: ${this.direccion}</li>
        <li>Nombre usuario: ${this.nombreUsuario}</li>
        <li>Comision: ${this.comision}</li>
    <li>Legajo: ${this.legajo}</li>
    <li>Estado: ${this.estado}</li>
    <li>Asistencia: ${this.asistencia}</li>
    <li>Notas: ${this.notas}</li>
        </ul>`);
  }
  deshabilitar() {
    this.estado = false;
  }
  habilitar() {
    this.estado = true;
  }
  // set y get
  set modificarEstado(nuevoEstado) {
    this.estado = nuevoEstado;
  }
  get mostrarEstado() {
    return this.estado;
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
userJuan.modificarDireccion = "Tucumán";
document.write(
  `<br>La direccion de usuario es ${userJuan.mostrarNombreUsuario} es ${userJuan.mostrarDireccion}`
);

let alumnoMauro = new Alumno(
  "2i",
  1234,
  true,
  "Mauro",
  "Garcia",
  "mgarcia",
  "3213213",
  "gmau@gmail.com",
  "tucuman"
);
alumnoMauro.mostrarDatos();
alumnoMauro.mostrarAlumno();

alumnoMauro.deshabilitar();
console.log(alumnoMauro);
