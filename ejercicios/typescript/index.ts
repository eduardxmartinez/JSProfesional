//boolean
let muted: boolean = true;
muted = false;

//numeros
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador/denominador;

//string
let nombre: string = "eduardo";
let saludo = "me llamo" + nombre;

//arreglos

let people: string[] = [];
people =["isabel", "nicole", "raul"];
people.push("9");

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("eduardo");
peopleAndNumbers.push(10);

//enum
enum Color{
    rojo = "rojo",
    verde = "verde",
    azul = "azul"
}

let favouriteColor: Color = Color.azul;
console.log(`mi color favorito es ${favouriteColor}`)

//any
let comodin: any = "joker";
comodin = {type: "wildcard"}

//object

let objeto: object = {};


function add(a:number, b:number): number{
    return a+b;
}

const sum = add(4,5);

function createAdder(a:number): (number) => number {
    return function(b:number){
        return b+a;
    };
}

const addFour = createAdder(4);
const fourPlusSix = addFour(6);

function fullName(firstName:string,lastname?:string): string{
    return `${firstName} ${lastname}`;
}

const richard = fullName("Eduardo", "Martinez");