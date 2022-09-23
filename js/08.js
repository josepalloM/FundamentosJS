// Operaciones en los arreglos

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

// Añadir elementos al Array
//tecnologias.push('GraphQL') // añade al final
//tecnologias.unshift('GraphQL') // Añade al inicio
//const  nuevoArreglo = [...tecnologias, 'GraphQL']

// Eliminar elementos del Array
//tecnologias.pop() // elimina del final
//tecnologias.shift() //elimina del inicio
//tecnologias.splice(2) // elimina de una posición en especifica

// const nuevoArray = tecnologias.filter(function (tech){
//     return tech !== 'HTML'
// })

// Remplazar elementos del Array
const nuevoArray = tecnologias.map(function (tech){
    if (tech === 'HTML'){
        return 'GraphQL'
    }else {
        return tech
    }
})

console.table(tecnologias)
console.table(nuevoArray)