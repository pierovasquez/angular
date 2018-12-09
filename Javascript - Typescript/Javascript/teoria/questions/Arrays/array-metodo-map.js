// Esto es una muestra de como funciona el metodo map en un array.

// Esto seria un ejemplo normal sin el uso de map.

var almuerzos = [
    {principal: 'arepa', postre: 'helado'},
    {principal: 'tacos', postre: 'torta de queso'},
    {principal: 'pizza', postre: 'galletas'},
    {principal: 'sushi', postre: 'quesillo'},
];

var platosPrincipales = [];

for(let i of almuerzos) {
    platosPrincipales.push(i.principal);
};

console.log(platosPrincipales); //Output: ["arepa", "tacos", "pizza", "sushi"]

// Con el metodo map seria asi el codigo:

//el metodo map -> recorre las lineas del array y por cada linea, ejecuta la funcion.
var platosPrincipales2 = almuerzos.map(function(almuerzo) {
    //Cualquier cosa que retornemos, se agregara al array platosPrincipales2
    return almuerzo.principal;
});
    

console.log(platosPrincipales); //Output: ["arepa", "tacos", "pizza", "sushi"]