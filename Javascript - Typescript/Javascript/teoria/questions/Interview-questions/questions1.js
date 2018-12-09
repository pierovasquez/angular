// https://www.youtube.com/watch?v=mhZWi9tSy44

// 1. What is scope?

// It is a variable that is accesible everywhere as global scope, and a variable that can only be accesed
// in a particular place as local scope

var variableInGlobalScope = 'I am global.';

function functionWithLocalScope() {
    var variableInLocalScope = 'I am local.';

    console.log(variableInGlobalScope); // Works
    console.log(variableInLocalScope); // Works
}

console.log(variableInGlobalScope); // Works
console.log(variableInLocalScope); // Does not work


// 2. What is hoisting?

// Hoisting is Javascript's default behavior of moving variable and function declarations to the top.

console.log(x); // undefined
var x;

// EL hosting mueve la variable hacia arriba a la hora de ejecutar el codigo. Quedando de la siguiente manera:
// Lo mismo pasa con las funciones 
var x;
console.log(x);


//3. What is a closure?

// A closure is an inner function that has access to the outer, or enclosing function's variables.

function sayHelloCreator(name) {
    var greeting = 'Hello';

    function sayHelloFunction() {
        console.log(greeting + ' ' + name);
    }

    return sayHelloFunction;
}

var sayHelloToJhon = sayHelloCreator('John');
sayHelloToJhon(); //Hello Jhon

// 4. What is the difference between synchronous and asynchronous code ?


// las funciones sincronas, evitan que se siga ejecutando codigo hasta que esta termine.
// Las funciones asincronas, permiten que se siga leyendo o ejecutando codigo mientras esta termina de ejecutarse.
