// Funciones - Function Declarations

// function sumar(){
//     console.log( 2 + 2 )
// }
// sumar()

// Funciones con parametros

// function sumar(numero = 0, numero2 = 0){
//     console.log(numero + numero2)
// }
//
// sumar(10, 20)
// sumar(2, 3)
// sumar(100)
// sumar()

// Funciones que retornan valores

function sumar(numero = 0, numero2 = 0){
    return [numero + numero2, 'Hola Mundo']
}

const [resultado, holaMundo] =  sumar(20, 30)
console.log(resultado)
console.log( holaMundo)