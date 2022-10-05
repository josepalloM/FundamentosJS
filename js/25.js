// Fectch API - Async Await

const url = "https://jsonplaceholder.typicode.com/comments"

const consultarAPI = async ()=>{
    const respuesta = await fetch(url)
    console.log('después de respuesta')
    const resultado = await respuesta.json()
    console.log('después de resultado')
}

consultarAPI()
