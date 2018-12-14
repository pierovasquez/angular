// map operator, turn our values and transform our values. We can transform a number to a string, obejct into a simply object, etc.
// These transform values could again reach the next function

var observable = Rx.Observable.interval(1000);
var observer = {
    next: function(value) {
        console.log(value);
    }
};

observable.map(function(value) {
    return 'Number: ' + value;
}).throttleTime(1900).subscribe(observer);

// Cada segundo, emitira a partir del 0 un numero en incremento.
// Con el throttleTime declaramos que queremos recoger un nuevo valor a partir del tiempo indicado como parametro.
