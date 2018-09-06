// variable de typescript para tipos de datos que usen esa variable
type alfanumerico = string | number;

let almuerzo: alfanumerico = "Hola Mundo";

// String con | se puede exigir multiples tipos de datos
let cadena: string | number = "Jeannuel Garcia";
cadena=44;

// Number

let numero: number = 12;

// Boolean
let verdadero_falso: boolean = true;

// Any

let cualquiera: any = "Hola";
cualquiera = 77;

// Arrays <tipo de dato> -> <string><any><number>

var lenguajes: Array<string> = ["PHP", "JS", "CSS"];

//en number se puede poner any, es otra manera de elegir tipo

let years: number[] = [12,13,14];

console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes);


// uso de let y var

var numero1 = 10;
var numero2 = 12;

if(numero == 10){
    let numero1 = 44;
    var numero2 = 55;

    console.log(numero1,numero2);

}

console.log(numero1, numero2);