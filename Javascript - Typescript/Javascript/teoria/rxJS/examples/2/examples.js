// create an observable

var observer = {
    next: function(value) {
        console.log(value);
    },
    error: function(error) {
        console.log(error);
    },
    complete: function() {
        console.log('Completed');
    }
};

//Declaramos que en nuestra nueva observable, el methodo next contiene 'A value', esta a su vez llama al observer.
var subscription = Rx.Observable.create(function(obs) {
    obs.next('A value');
    setTimeout(() => {
        obs.complete();
    }, 2000);
    // Despues del complete, todo el codigo siguiente no se ejecutara porque el observable termina. Lo mismo pasaria si hubiese un error()
    // PERO, como hemos declarado una funcion asincrona para que el compelte se ejecute 2 segundos mas tarde, si ejecutara el codigo que tiene debajo.
    obs.next('Antes de que se ejecute el complete()');

}).subscribe(observer);

setTimeout(() => {
    subscription.unsubscribe();
    console.log('Desuscrito');
}, 5000);