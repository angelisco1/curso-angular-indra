const URL_GENEROS = "https://ejemplos-dc1c1.firebaseio.com/generos.json"
const URL_PELICULAS = "https://ejemplos-dc1c1.firebaseio.com/peliculas/"

function getGeneros() {
    return fetch(URL_GENEROS);
}

function getPeliculasDeGenero(genero) {
    return fetch(URL_PELICULAS + genero + '.json');
}

getGeneros()
    .then((resp) => {
        return resp.json()
    })
    .then((generos) => {
        console.log(generos)
        genero = prompt('Elige un genero: ' + Object.values(generos));
        // alert('Has elegido: ' + genero);
        return getPeliculasDeGenero(genero)
    })
    .then((resp) => {
        return resp.json()
    })
    .then((peliculas) => {
        alert(Object.values(peliculas).join(', '))
    })


function miPromesa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Ya tengo mis datos')
            resolve('Esto son los datos');
        }, 2000)
    })
}

miPromesa()
    .then(msg => console.log(msg))
    .catch(err => console.log(err))



// let peliculas = getPeliculasDeGenero(genero);
// console.log(peliculas)

