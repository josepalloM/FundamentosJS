// Eventos del DOM - Inputs

const inputNombre = document.querySelector('.nombre')

inputNombre.addEventListener('input', function (event){
    console.log(event.target.value)
})

// Ejemplo para mirar por una fracción de tiempo la letra que estoy escribiendo en un password
const inputPassword = document.querySelector('.password')
inputPassword.addEventListener('input', funcionPassword)
function funcionPassword(){
    inputPassword.type = 'text'

    setTimeout(()=>{
        inputPassword.type = 'password'
    }, 100)
}