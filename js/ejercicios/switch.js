let estacion = prompt("Ingrese su estacion preferida: 1: Verano, 2: Otoño, 3: Invierno, 4: Primavera");
if( estacion === "1"){
    document.write("sandwich de miga");
}else if( estacion === "2"){
    document.write("locro")
}else if( estacion === "3"){
    document.write("guiso")
}else if( estacion === "4"){
    document.write("cerveza")
}else{
    document.write("Escribio una opcion incorrecta")
}

// utilizar varios else if es considerado una mala practica, para eso esta switch
// switch (opcion){
//     case "1":
//         todo el codigo a ejecutar en el caso 1
//         break;
//     case "2":
//         todo el codigo a ejectura en el caso 2
//         break;
//     case "3":
//         todo el codigo a ejectura en el caso 3
//         break;
//     default: 
//     todas el codigo a mostrar s no se selecciono ningun caso anterior
// }