// Supongamos el caso en el cual tenemos que manejar las peticiones de los usuarios y responder algo.
// En este caso, simularemos que trabajamos con node.js.

// Manejador de peticion. Por lo general, reciben dos cosas, la informacion del usuario y la informacion
// que envia los servidores al navegador
function requestHandler(request, response) {
    // Esta funcion, como es una peticion a una base de datos, para que node.js pueda seguir trabajando sin tener
    // que esperar a que la peticion se realice, utilizaremos los CALLBACKS.

    // Los CALLBACKS, esperaran por la respuesta del servidor y cuando la obtenga, nos dara un erro o el usuario
    // encontrado a partir de la consulta. todo el codigo que depanda de la funcion impartida al servidor, debera
    // estar escrita dentro de la funcion callback

    //Todas las peticiones que se le haga a la base de datos, llevaran una funcion CALLBACK -> function($a,$b){}
    User.findById(request.userId, function(err, user){
        if (err) {
            res.send(err);
        } else {
            // Aqui decimos a la base de datos que busque todas las tareas correspondientes al usuario
            Tasks.findById(user.tasksId, function(err, tasks) {
                if (err) {
                    return res.send(err);
                } else {
                    //Para saber que opciones nos puede devolver una funcion, tenemos que guiarnos por la guia de la libreria o framework
                    tasks.completed = true;
                    tasks.save(function (err) {
                        if(err) {
                            return res.send(err);
                        } else {
                            res.send('Task completed');
                        }
                    })
                }
            })
        }
    })
}

// Los CALLBACKS hoy en dia, no son sostenibles puesto que es muy dificil entender y mantener el codigo.
// Para esto, aparecieron las PROMESAS -> promesas.js .