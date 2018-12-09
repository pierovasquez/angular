// How to remove duplicates from array

let a = [1 , 2,3,6,8,1,3,2,8];

// First way.

let b = [];

let len = a.length;
for ( let i = 0; i < len; i++) {
    // Si el array b, tiene algun numero del array b, dara true, por lo cual no se ejecutara el push.
    // pero si no tiene, lo añadira.
    if(b.indexOf(a[i]) === -1) {
        b.push(a[i]);
    }
}

// Second way.

let b = [];

let len = a.length;

a.sort(); // ordena de menor a mayor los numeros. [1,1,2,2,3,3,...]

let _temp;

for (let i = 0; i < len; i++) {
    if(a[i] !== _temp) {
        b.push(a[i]);
        _temp = a[i];
    }
}

// Third way

obj = {};

// Los indices de los objetos tienen que ser unicos, por lo cual si se repite algun indice, 
// dara false y no se añadira, el true se puede cambiar por cualquier cosa.

for( let i of a) {
    obj[i] = true;
}

let b = Object.keys(obj); // Con esto indicamos que queremos solo los indices, saltandonos el valor true.

console.log(b);


// Fourth way

console.log([... new Set(a)]); // Set only stores unique values by default