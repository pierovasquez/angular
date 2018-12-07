
// En este codigo se hace uso de las PROMESAS.


const fetch = require('node-fetch');

function getNombre(username) {
    const url = `https://api.github.com/users/${username}`
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(json => {
            console.log(json)
        })
}

getNombre('pierovasquez')


// En el codigo de abajo es lo mismo que el de arriba pero utilizando ASYNC-AWAIT pero con algunas PROMESAS

const fetch = require('node-fetch');

async function getNombre2(username) {
    const url = `https://api.github.com/users/${username}`
    const respuesta = await fetch(url)
    const json = await respuesta.json()

    console.log(json)
}
    // Lo que retorna esta funcion sola es una PROMESA, por lo cual necesitariamos introducir codigo de las promesas
    // para que nos retorne el json del usuario de github
getNombre2('pierovasquez')
    .then((nombre) => console.log(nombre))
    .catch((e) => console.log(`Error: ${e}`))


//En el codigo de abajo es lo mismo pero utilizando totalmente ASYNC-AWAIT

const fetch = require('node-fetch');

async function getNombre3(username) {
    const url = `https://api.github.com/users/${username}`
    const respuesta = await fetch(url)
    const json = await respuesta.json()

    if(respuesta.status !== 200) {
        throw Error('El usuario no existe')
    }
    return json
}
(async function() {
    try {
        const nombre = await getNombre('pierovasquez')
        console.log(nombre)
    } catch (e) {
        console.log(`Error: ${e}`)
    }
})()