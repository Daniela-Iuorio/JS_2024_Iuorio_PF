let cantidadHorasInicial
//Función para habilitar modificación de  modalidad de pago
export function modificarPago() {

    //Muestro formulario, oculto texto informativo
    document.getElementById('info-pago').style.display = 'none'
    document.getElementById('div-pago-form').style.display = 'flex'

    try{
    //Autocompletado de campos form
    let usuarioInicial = JSON.parse(localStorage.getItem('usuario'))
    document.getElementById('pago').value = usuarioInicial.paquete
    document.getElementById('carga-horaria').value = usuarioInicial.horas

    //Guardo info de valores iniciales
    cantidadHorasInicial = document.getElementById('carga-horaria').value
    localStorage.setItem('horasIniciales', JSON.stringify(cantidadHorasInicial))
    }catch(err){
        Swal.fire({
            icon: "error",
            text: "Falta información, por favor, vuelva el formulario de inscripción.",
          })

    }
}

// Función para calcular total a pagar según carga horaria y modalidad de pago
function calcularTotal(formaPago, cargaHoraria, cursoGuardado) {
    let total = 0
    switch (formaPago) {
        case 'semanal':
            total = (cursoGuardado.precio) * cargaHoraria
            break
        case 'mensual':
            total = (((cursoGuardado.precio) * cargaHoraria) * 4) * 0.9
            break
        case 'trimestral':
            total = ((((cursoGuardado.precio) * cargaHoraria) * 4) * 3) * 0.85
            break
        default:
            total = 0
    }
    return total
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
        case "semanal":
            infoPago.innerText = "Semanal"
            break
        case "mensual":
            infoPago.innerText = "Mensual"
            break
        case "trimestral":
            infoPago.innerText = "Trimestral"
            break
        default:
            infoPago.innerText = "Modalidad de Pago"
    }

    document.getElementById('info-carga-horaria').innerText = nuevaCargaHoraria
    document.getElementById('info-total-pagar').innerText = `$${total}`

    try{
    //Actualizo información en localStorage
    let usuarioGestion = JSON.parse(localStorage.getItem('usuario'))
    usuarioGestion.total = total
    usuarioGestion.paquete = nuevoPago
    usuarioGestion.horas = nuevaCargaHoraria
    localStorage.setItem('usuario', JSON.stringify(usuarioGestion))

    //Aviso que elija el nuevo horario de cursada si cambió la carga horaria
    let horasIniciales = parseInt(JSON.parse(localStorage.getItem('horasIniciales')))

    if(nuevaCargaHoraria !== horasIniciales){
        let warning3 = document.getElementById('warning3')
        warning3.innerText = "*Elija el nuevo horario de cursada"
        warning3.className = "warning" 
    }
    }catch(err){
        Swal.fire({
            icon: "error",
            text: "No se guardaron los cambios.",
          })

    }
    
    //Oculto formulario, muestro texto informativo
    document.getElementById('info-pago').style.display = 'block'
    document.getElementById('div-pago-form').style.display = 'none'

    //Toast para avisar "cambios guardados"
    Toastify({
        text: "Cambios guardados",
        duration: 1500,
        close: false,
        gravity: "top",
        position: "center",
        stopOnFocus: false,
        style: {
          background: "#14b856ff",
        },
      }).showToast();

      //Toast para avisar de nuevo mail con info pago
      setTimeout(()=>{
        Toastify({
            text: "Se envió email con detalle de pago",
            duration: 2000,
            close: false,
            gravity: "top",
            position: "center",
            stopOnFocus: false,
            style: {
              background: "#14b856ff",
            },
          }).showToast();
    
      }, 1000)

}

export function cancelarEdicionPago(){
    document.getElementById('info-pago').style.display = 'block'
    document.getElementById('div-pago-form').style.display = 'none'
}


