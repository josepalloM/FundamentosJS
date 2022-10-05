const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
const numeros = [10, 20, 30]

let nuevoArray;

// Filter
// Extrae los valores que cumplen la condición en un nuevo arreglo
nuevoArray =  tecnologias.filter(tech => tech !=='React')

// Includes
// Comprueba si un elemento existe en el array
//const resultado = tecnologias.includes('GraphQL')

// Some
// Devuelve un booleano si al menos uno cumplen con la condición
//const resultado = numeros.some(numero => numero > 15)

// Find
// Devuelve el primer elemento que cumpla con la condición
//const resultado = numeros.find(numero => numero > 5)

// Every
// Retorna un booleano si TODOS cumplen con la condición
//const resultado = numeros.every(numero => numero > 15)

// Reduce
// Acumulando en el total
//const resultado = numeros.reduce((total, numero) => numero + total, 0)

//Filter
// Crea un nuevo array en base a una condición
const resultado = tecnologias.filter(tech => tech === 'Node.js')
const resultado = numeros.filter(numero => numero > 15)

console.log(resultado)