// document.write("Elemento 1<br>");
// document.write("Elemento 2<br>");
// document.write("Elemento 3<br>");
// document.write("Elemento 4<br>");
// document.write("Elemento 5<br>");

/* while
while (condicion logica){
    todo el codigo que quiero repetir varias veces
    cambiar la condicion logica
}
*/

let contador = 1;

// while(contador <= 5){
//     document.write("Elemento "+ contador +"<br>");
//     // document.write(`Elemento ${contador} <br>`);
//     // contador = contador + 1;
//     contador ++; 
// }

/*do-while

do{
    todo lo que quiero que se reputa
    cambie la condicion
}while (condicion logica)
*/

// do{
//     document.write('Elemento '+ contador + '<br>')
//     contador ++;
// }while (contador <= 5)

// Estructura for

/* for(inicializar una variable; condicion logica; incrementar o decrementar la variable inicializada){
    todo el codigo que quiero que se repita varias veces
}

*/

for(let indice = 1; indice <= 5; indice ++){
    document.write('Elemento '+ indice + '<br>')
}

/*for(let indice = 5; indice >= 1; indice --){
    document.write('Elemento '+ indice + '<br>')
}
*/
