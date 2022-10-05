// Eventos del DOM - Submit

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e =>{

    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password').value

    // Verifica si ya existe una alerta previa que se remueva la nueva creada.
    const alertaPrevia = document.querySelector('.alerta')
    if (alertaPrevia){
        alertaPrevia.remove()
    }

    const alerta = document.createElement('DIV')
    alerta.classList.add('alerta')

    if (nombre === '' || password === ''){
        alerta.textContent = 'Todos los campos son obligatorios'
        alerta.classList.add('error')
    }else {
        alerta.textContent = 'Todo bién...'
        alerta.classList.add('exito')
    }

    formulario.appendChild(alerta)
})