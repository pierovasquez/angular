const { taskOne, taskTwo } = require('./tasks');

async function main() {

    try {
        console.time('Measuring time');
        // Ejecutamos de manera paralela tanto el taskOne como el taskTwo
        // resuls obtiene un arreglo de los posibles valores que retorne los metodos.

        // Al declarar que queremos ejecutar el codigo de forma paralela, quiere decir que los dos se ejecutaran al mismo tiempo.
        // No tardara 6 segundo si no 4.

        // Si surge algun error, el timeout de la funcion erronea no se tomara en cuenta y solo tardara lo que la funcion sin errores tarde
        const results = await Promise.all(taskOne(), taskTwo())
        
        console.timeEnd('Measuring time');

        console.log('Task One returned', results[0]);
        console.log('Task  Two returned', results[1]);
    } catch (error) {
        console.log(error);
    }
}

main();