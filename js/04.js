// Objetos Manipulación

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}
//Object.freeze(producto)
Object.seal(producto)


// Reescribir uno nuevo
producto.nombre = "Monitor Curvo"

// Si no existe lo va a añadir
producto.imagen = "imagen.jpg"

delete producto.disponible
console.table(producto)