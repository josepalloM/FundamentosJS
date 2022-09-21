// Objetos - Unir dos objetos o más

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Jose",
    premium: true
}

//const nuevoObjeto = Object.assign(producto, cliente) // NO
const nuevoObjeto2 = {
    producto: {...producto},
    cliente: {...cliente}
}
console.log(nuevoObjeto2)
console.log(cliente)
console.log(producto)
