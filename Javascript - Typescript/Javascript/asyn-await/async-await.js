// ASYNC.AWAIT

// Esta es otra forma mas sencilla incluso que las promesas para realizar la funcion que hace los CALLBACKS.

// Al declarar la palabra await, estamos indicando al programa de que la funcion que esta junto a ella es asincrona.

/*
    La programación asíncrona establece la posibilidad de hacer que algunas operaciones 
    devuelvan el control al programa llamante antes de que hayan terminado mientras siguen 
    operando en segundo plano. Esto agiliza el proceso de ejecución y en general permite aumentar 
    la escalabilidad, pero complica el razonamiento sobre el programa.
*/

// await solo estara disponible en las funciones que tengan una palabra clave async primero

async function requestHandler(req, res) {

    try {
        //Como las dos primeras funciones, retornaban valores, era necesario guardar el valor que retorna en variables
        const user = await User.findbyId(req.userId);

        const tasks = await Tasks.findbyId(user.tasksId);

        tasks.completed = true;
        //tasks.save() no retorna ningun valor.
        await tasks.save();

        res.send('Tasks Completed');
    } catch (error) {
        res.send(e);
    }




}