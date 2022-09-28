// Arrow Fuctions con Arreglos
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

const nuevoArray = tecnologias.map(function (tech){
    if (tech === 'HTML'){
        return 'GraphQL'
    }else {
        return tech
    }
})

const nuevoArray2 = tecnologias.filter(function (tech){
    return tech === 'React'
})

console.log(nuevoArray)
console.log(nuevoArray2)