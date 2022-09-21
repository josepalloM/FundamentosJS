// Objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

console.log(producto)
console.table(producto)

console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponible)

// Destructuring
const { nombre } = producto
console.log(nombre)

// Object literal Enhacement
const autenticado = true
const usuario = "Jose"

const nuevoObjeto = {
    autenticado,
    usuario
}

console.table(nuevoObjeto)