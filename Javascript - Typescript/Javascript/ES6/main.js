function somefunctionES5() {
    console.log("ES5")
}

const somefunctionES6 = () => {
    console.log("ES6");
}


// Declaramos que como parametro podemos agregar muchos parametros o elementos.
function cinco(...meses) {
    for(let uno of meses) {
        document.write(meses);
    } 
};

cinco("Enero", "Febrero","Marzo");