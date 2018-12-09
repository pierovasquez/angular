// Esto es una muestra de como funciona el metodo reduce en un array.

var almuerzos = [
    {principal: 'arepa', postre: 'helado'},
    {principal: 'arepa', postre: 'torta de queso'},
    {principal: 'arepa', postre: 'galletas'},
    {principal: 'sushi', postre: 'quesillo'},
];

var cantidadArepas = 0;

for (let i = 0; i < almuerzos.length; i++) {
    if (almuerzos[i].principal === 'arepa') {
        cantidadArepas++;
    }
}

console.log(cantidadArepas); //Output: 3

// el metodo reduce, nos permite poner un contador o cualquier variable y asignarle un valor, para poder interactuar con el dentro de cada linea del array.
var cantidadArepas2 = almuerzos.reduce(function(contador, almuerzo) {
    if (almuerzo.principal === 'arepa') {
        return contador + 1;
    } else {
        return contador;
    }
}, 0) //EL 0 es el valor que le indicamos a la variable contador. contador la declaramos nosotros