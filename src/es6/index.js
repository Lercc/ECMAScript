/**
 * DEFAULT PARAMS
 */

//before  ES6 
function newFunction(name,age, country) {
    var name = name || 'Oscar';    
    var age = age || 32;    
    var country = country || 'Mx';    
}

//ES6
function newFunction2 (name='oscar', age=32, country ='CO') {
    console.log(name, age, country)
}
newFunction2();
newFunction2('luis',21,'PE');

/**
 * TEMPLATE STRING ` `
 */

 //before ES6
var hello = "Hello";
var world = "world";
var epicPhrase = hello + ' ' + 'world';

console.log(epicPhrase);

//ES6
var epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

/**
 * DESESTRUCTURACIÓN OBJETOS {}
 * DESESTRUCTURING {}
 */

// before ES6
var persona = {
    nombre : 'luis',
    edad: 22,
    pais: 'PE'
}
console.log(persona.nombre, persona.edad, persona.pais)

//ES6
    // let nombre = persona.nombre
    // let edad = persona.edad
    // let pais = persona.pais
let { nombre, edad, pais } = persona
console.log(nombre ,edad, pais)

/**
 * SPREAD OPERATOR ...
 * OPERADOR DE PROPAGACIÓN ...
 */

 let team1 = ['per1', 'pers2', 'pers3']
 let team2 = ['per15', 'pers24', 'pers33']

 let educationTeam = ['lercc', ...team1, ...team2]

 console.log(educationTeam)

 /**
 * VARIABLE SCOPE
 * ALNCAZE - AMBITO DE VARIABLE
 */

{
    var globalVar = 'global var'
}

{
    let globalLet = 'global let'
}
// al declarar con var su ambito o escope se define globalmente en el documento,
// por lo ual sepuede accedeer desde cualquier parte del documento ya 
// sea funcion o bloque de codigo.
// Por hoisting js recorre primero todas las variables definidas con var y
// todas las funciones y referencias a funciones y son las primeras en declarase
// ademas que su scope o ambito es todo el documento

console.log(globalVar) // se imprime en la consola, ya que la variable existe en todo el documento

// al declarar con let , el escope o ambito de la variable se restinge solo
// a el bloque donde se declaro el cual representa el espacio definido 
// entre llaves {}, fuera de ahi no existe para js
console.log(globalLet) // no se imprime en la consola, ya que la variable no existe fuera de las llaves(bloque) donde fue declarada

// Al declarar una variable con const, no se podra re-asignar otro valor a esta
// ya que js usa esta palabra reservada para decir que es una constante y que su
//valor no cambiara en el tiempo
const weekDays = ['Monday','Tuesday','Wendensday','Thursday','Friday','Saturday','Sunday']

/**
 * PROPIEDAD DE OBJETOS MEJORADA
 */
let nombre = 'luis';
let edad = 32;

//before ES6 
let per1 = {
    nombre: nombre,
    edad: edad
}
console.log(per1)

//ES6
let per2 = {
    nombre,
    edad
}
console.log(per2)

/**
 * ARROW FUNCTION: sintaxis reducida, this no vinculado
 *               : son fn anonimas que retornan algo
 */
const names = [
    { name:'luis', edad:22 },
    { name:'rosa', edad:23 },
    { name:'juan', edad:24 }
]

const listOfNames = names.map( (item) => {
    console.log(item.name)
})

const listOfAges = names.map(item => {
    return item.edad
}) 
console.log(listOfAges)

const listOfNames2 = names.map(item => item.name)
console.log(listOfNames2)

const square = num => num*num


/**
 * PROMESAS
 *  sincrónico: las tareas se ejecutan de forma secuencial, una despues 
 *              de que la anterior tarea haya terminado.
 *  asincrónico: hace referencia un suceso que no tiene relaciòn de
 *              correspondencia temporal con otro suceso.
 * 
 *  peralelismo: ralizar-ejecuta multiples tareas al mismo tiempo
 *  concurrencia: ralizar-ejecuta solo una tarea a la vez
 * 
 *  event loop: Es un patron de diseño que se encarga de distribuir los eventos 
 *              y/o mensajes de un programa
 * 
 * callback : Es una función que se pasa como parametro a otra funcion, con la
 *            finalidad de que después será invocada.
 * 
 *  es6: define las promesas para ayudar con el callback hell
 *          y poner manejar el asyncronismo de js.
 * 
 *     : las promesas son algo que va suceder en un determinado tiempo:  ahora , enel futuro o nunca
 *     : Una promesa es un objeto que recibe (su constructor) como parametro
 *       una funcion anonima o arrow function que tendra dos parametros obligatorios
 *       resolve: en caso de que la promesa sea válida o resuelva
 *       reject en caso de que la promesa sea inválida o rechazada
 */

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve ('Hey!!, todo bn!')
        } else {
            reject ('Humm!!, algo falló')
        }
    })
} 

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('holi :3'))
    .catch(err => console.log(err))

/**
 * Clases : una forma bonita de los propotipos 
 */
class Calculador {

    constructor(){
        this.valueA = 0
        this.valueB = 0
    }

    sum (a,b) {
        this.valueA = a
        this.valueB = b
        return a + b   
    }
}
const calc = new Calculador();
console.log(calc.sum(5,4))

/**
 * MODULOS
 */
import { hello }  from './module.js'
console.log(hello())

/**
 * GENERATOR
 * GENERADORES : son funciones especiales que retornan una serie de valores 
 *                  segun un algoritmo definido.
 */

 function* helloWorld() {
    if(true) {
        yield 'Hello,'
    }

    if(true) {
        yield 'world'
    }
 }

 const generatorHello = helloWorld();
 console.log(generatorHello.next().value)
 console.log(generatorHello.next().value)
 console.log(generatorHello.next().value)
