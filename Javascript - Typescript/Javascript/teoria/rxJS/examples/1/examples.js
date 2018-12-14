// The next method of the observable will be called by the observable whenever a new
// value is emmited. So whenever we receive a new value.

//The error method it will be called whenever the obsevable throws an error.

// the complete method will be called whenever the observable is done.

var button = document.querySelector('button');

var observer = {
    next: function(value) {
        console.log(value);
    },
    error: function(error) {
        console.log(error);
    },
    complete: function() {

    }
}

// Como estamos siempre escuchando al boton click, nunca se podra dar el caso de erro
Rx.Observable.fromEvent(button, 'click')
    .subscribe((observer));