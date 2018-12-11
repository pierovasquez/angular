// Subscriptions. with subscriptions, you can extract data from observables. There are 2 ways to subscribe:
// in the component HTML (cats) and in the components in Angular (dogs)

cars: firebaseListObservable<any[]>
dogs: Array<any[]>
subscription : Subscription;

ngOnInit() {
    // list() -> retorna un observable desde la base de datos de firebase
    this.cats = this.db.list('/cats')

    this.db.list('/dogs').subscribe(dogs => {
        // Esto guarda en el array dogs todos los perros que esten en la base de datos.
        this.dogs = dogs
    })
}


// CODIGO HTML

/* 
    <div *ngFor="let cat of cats | async">
        {{cat.name}}
    </div>

    <div *ngFor="let dog of dogs">
    {{dog.name}}
    </div>
*/


// UNSUBSCRIBE
// A good practice is to unsubscribe when you don't need anymore to be subscribed

// No es necesario si se utiliza el metodo de los gatos porque lo hace automatico, es necesario en el caso de los dogs

ngOnDestroy() {
    this.subscription.unsubscribe()
}



// MAP OBSERVABLES
// map observables transform data before you subscribe to it.
// Vamos a transformar una lista observable  de gatos en un numero basado en la longitud de la coleccion
catCount: Observable<number>;
dogName;
 
ngOnInit() {
    //List nos da un array
    //map devuelve la longitud del array
    this.catCount = this.db.list('/cats')
                    .map(cats => {
                        return cats.length
                    });

    
    // Aqui pasamos un solo perro y map nos devolvera su nombre.
    this.dogName = this.db.object('/dogs/-Kpasda2eas1')
                    .map(dog => {
                        return dog.name
                    })
}

// Codigo HTML
/* 
    There are {{catCount | async }} cats in the list

    this dog's name is {{dogName | async}}
*/


// Switchmap
// Permite manejar relaciones de datos que existen entre dos flujos independientes.

human: FirebaseObjectObservable<any>;
dogs: Observable<any[]>

ngOnInit() {
    this.human = this.db.object('/humans/jeff')

    this.dogs = this.human.switchMap(human => {
        return this.db.list('/dogs', {
            query: {
                orderByChild: 'owner',
                equalTo: human.name
            }
        })
    })
}


// Combine Observables

// In some cases you might need to combine two observables into one.

dog: FirebaseObjectObservable<any>;
cat: FirebaseObjectObservable<any>;

animals: Observable<any[]>

ngOnInit() {
    this.cat = this.db.object('cats/-KASDW123asd')
    this.dog = this.db.object('cats/-KASDW123asd')

    this.animals = Observable
                    .combineLatest(this.cat, this.dog)

    // animals obtiene un array con el perro y gato seleccionado. En el html solo indicamos -> let animal of animals | async.
}



// Behavior Subject
// Allow to share data throughout an angular app

// behavior subject is just an observable that we can push data to it.
// It also has a concept of a current value which is very useful for real-time app development because you want the most up-to-date
// information displayed in the app
dogs: FirebaseObjectObservable<any[]>

currentDog = new BehaviorSubject(null);

ngOnInit() {
    this.dogs = this.db.list('/dogs')
}

cnageDog(dog) {
    //Cada vez que cliques en la imagen del perro se actualizara
    this.currentDog.next(dog)
}

// CODIGO hmtl

/* 
    <div *ngFor="let dog of dogs | async" (click)="changeDog(dog)">
        {{dog.name}}
        <img [src]="dog.url">
    </div>

    <h2> Current Dog </h2>

    <div>
     " Ponemos el '?' porque no se mostrara nada en caso de que no exista"
        {{ (currentDog | async)?.name }}
        <img [src]="(currentDog | async)?.url">
    </div>
*/