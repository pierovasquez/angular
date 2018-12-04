// PROMESAS.
// Las promesas ayudan a hacer la funcion de los CALLBACKS, pero con menos codigo.


// La promesa esta compuesta por un metodo then y catch. Cuando se complete la peticion se ejecutara el then.
// Si hay algun error, se ejecutara el catch.
function requestHandler(request,response) {
    URLSearchParams.findById(request.userId)
    .then(function(user) {
        res.send(user);
    })
    .then()
    .catch(function (err) {
        res.send(err);
    })
}