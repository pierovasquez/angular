// Esto es una muestra de como funciona el metodo filter en un array.

var almuerzos = [
    {principal: 'arepa', postre: 'helado'},
    {principal: 'tacos', postre: 'torta de queso'},
    {principal: 'pizza', postre: 'galletas'},
    {principal: 'sushi', postre: 'quesillo'},
    {principal: 'arepa', postre: 'golfeados'},
    {principal: 'arepa', postre: 'churros'},
];

var postresParaPlatosConArepas = [];

for( let i =0; i < almuerzos.length; i++) {
    if (almuerzos[i].principal === 'arepa') {
        postresParaPlatosConArepas.push(almuerzos[i].postre)
    }
}

console.log(postresParaPlatosConArepas); // Output: ["helado","golfeados","churros"]

// Usando el metodo filter

var postresParaPlatosConArepas2 = almuerzos
    .filter(function (almuerzo) {
    // Por cada entrada, si el principal es igual a arepa, lo agregara a la nueva variable, si no, no.
    return almuerzo.principal === 'arepa'; // devuelve los objetos que tengan como principal arepa,incluyendo el postre.
    })
    .map(function(almuerzo) {
        return almuerzo.postre; // incluimos solo el postre en el array.
    });

console.log(postresParaPlatosConArepas2); // Output: ["helado","golfeados","churros"]