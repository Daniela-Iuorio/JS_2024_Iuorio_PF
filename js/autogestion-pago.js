let usuarioGestion = JSON.parse(localStorage.getItem('usuario'))
let cantidadHorasInicial
//Función para habilitar modificación de  modalidad de pago
export function modificarPago() {

    //Muestro formulario, oculto texto informativo
    document.getElementById('info-pago').style.display = 'none'
    document.getElementById('div-pago-form').style.display = 'flex'

    //Guardo info de valores iniciales
    cantidadHorasInicial = document.getElementById('carga-horaria').value

}


// Función para guardar y mostrar info Pago
export function guardarDatosPago() {
    let nuevoPago = document.getElementById('pago').value
    let nuevaCargaHoraria = parseInt(document.getElementById('carga-horaria').value)
    let cursoGuardado = JSON.parse(localStorage.getItem("cursoSeleccionado"))

    //Calculo nuevo total a pagar
    let total = calcularTotal(nuevoPago, nuevaCargaHoraria, cursoGuardado)

    //Muestro nueva info en interfaz
    let infoPago = document.getElementById('info-modalidad-pago')
    switch (nuevoPago) {
        case "1":
            infoPago.innerText = "Semanal"
            break
        case "2":
            infoPago.innerText = "Mensual"
            break
        case "3":
            infoPago.innerText = "Trimestral"
            break
        default:
            infoPago.innerText = "Modalidad de Pago"
    }

    document.getElementById('info-carga-horaria').innerText = nuevaCargaHoraria
    document.getElementById('info-total-pagar').innerText = `$${total}`

    //Actualizo información en localStorage
    usuarioGestion.total = total
    usuarioGestion.horas = nuevaCargaHoraria
    localStorage.setItem('usuario', JSON.stringify(usuarioGestion))

    //Aviso que elija el nuevo horario de cursada si cambió la carga horaria
    if(nuevaCargaHoraria !== cantidadHorasInicial){
        let warning3 = document.getElementById('warning3')
        warning3.innerText = "*Elija el nuevo horario de cursada"
        warning3.className = "warning"
    }


    //Oculto formulario, muestro texto informativo
    document.getElementById('info-pago').style.display = 'block'
    document.getElementById('div-pago-form').style.display = 'none'

}



// Función para calcular total a pagar según carga horaria y modalidad de pago

function calcularTotal(formaPago, cargaHoraria, cursoGuardado) {
    let total = 0
    switch (formaPago) {
        case '1':
            total = (cursoGuardado.precio) * cargaHoraria
            break
        case '2':
            total = (((cursoGuardado.precio) * cargaHoraria) * 4) * 0.9
            break
        case '3':
            total = ((((cursoGuardado.precio) * cargaHoraria) * 4) * 3) * 0.85
            break
        default:
            total = 0
    }
    return total
}


