// Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */

let ageRequired = 12;
if (ageRequired < 18) {
console.log("No puedes votar");
} else {
    console.log("Puedes votar");
}

/** Ejercicio 2
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

let numbero = 0;
if ((numbero % 7) == 0 && (numbero % 8) == 0){
    console.log("Es divisible entre 7 y 8");
} else {
    console.log("No es divisible entre ambos números");
}


/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */


let numeroDivO = 36;
if ((numeroDivO % 4) == 0 || (numeroDivO % 9) == 0){
    console.log("verdadero");
} else {
    console.log("falso");
}

/** Ejercicio 4
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */

let genero = "terror";
switch (genero){
    case "accion" :
        console.log("Mad Max: Fury Road");
        break;
    case "drama" :
        console.log("Una mente indomable");
        break;
    case "comedia" :
        console.log("Toca presentar proyecto :");
        break;
    case "romance" :
        console.log("Before sunrise");
        break;
    case "suspenso" :
        console.log("Destino final");
        break;
    case "terror" :
        console.log("Midsommar");
        break;    
        default:
        console.log("Genero desconocido");
        break
}

/** Ejercicio 5
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */

let cajeroFuncion = "3";
if (cajeroFuncion == "1") {
    console.log("Retirar dinero");
} else if (cajeroFuncion=="2") {
    console.log("Transferencia");
} else if (cajeroFuncion=="3") {
    console.log("Depósito");
} else if (cajeroFuncion=="4") {
    console.log("Pago de servicios");
} else {
    console.log("Utiliza una de las opciones predeterminadas");
}

/** Ejercicio 6
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */



let cantidadPesos = "1000";
let dolares = 0.05 * cantidadPesos
let euros = 0.04 * cantidadPesos
let yenes = 5.00 * cantidadPesos
let libras = 0.03 * cantidadPesos
let francos = 0.05 * cantidadPesos

let divisa = "MXN"
switch (divisa){
    case "USD" :
        console.log(`$${cantidadPesos} pesos son ${dolares} USD`);
        break;
    case "EUR" :
        console.log(`${cantidadPesos} pesos son ${euros} EUR`);
        break;
    case "JPY" :
        console.log(`${cantidadPesos} pesos son ${yenes} JPY`);
        break;
    case "GBP" :
        console.log(`${cantidadPesos} pesos son ${libras} GBP`);
        break;
    case "CHF" :
        console.log(`${cantidadPesos} pesos son ${francos} CHF`);
        break;  
        default:
        console.log("divisa no encontrada");
        break
}