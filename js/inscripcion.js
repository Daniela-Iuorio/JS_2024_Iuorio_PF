let cursoGuardado = JSON.parse(localStorage.getItem("cursoSeleccionado"))

function modificarCursoElegido(cursoGuardado) {
    let pCursoSelect = document.getElementById("form-curso-select")
    pCursoSelect.innerHTML = `<p class="form-p" id="form-curso-select">Curso seleccionado: <span class="resaltado">${cursoGuardado.nombre}</span> | Valor por hora: $${cursoGuardado.valorHora}</p>`
}


function calcularTotal() {
    let cargaHoraria = parseInt(document.getElementById('cantidad-horas').value)
    let formaPago = document.getElementById('forma-pago').value
    let total = 0
    switch (formaPago) {
        case 'semanal':
            total = (cursoGuardado.valorHora) * cargaHoraria
            break
        case 'mensual':
            total = (((cursoGuardado.valorHora) * cargaHoraria) * 4) * 0.9
            break
        case 'trimestral':
            total = ((((cursoGuardado.valorHora) * cargaHoraria) * 4) * 3) * 0.85
            break
        default:
            total = 0
    }
    return total
}

function mostrarTotal() {

    let eventHora = document.getElementById('cantidad-horas')

    eventHora.addEventListener('change', function () {
        let pTotal = document.getElementById('form-total')
        let total = calcularTotal()
        pTotal.innerHTML = `<p class="form-p" id="form-total">Total a pagar: <span class="resaltado">$${total}</span></p>`

        let warning2 = document.getElementById('warning2')
        if (warning2) {
            warning2.className = 'no-display'
        }
    })

    let eventPago = document.getElementById('forma-pago')

    eventPago.addEventListener('change', function () {
        let hora = document.getElementById('cantidad-horas')
        let total = calcularTotal()
        if (hora.value) {
            let pTotal = document.getElementById('form-total')
            pTotal.innerHTML = `<p class="form-p" id="form-total">Total a pagar: <span class="resaltado">$${total}</span></p>`
        } else {
            let warning2 = document.getElementById('warning2')
            warning2.className = 'warning'
            warning2.innerHTML = `<p>* Por favor, seleccione carga horaria.</p>`
        }
    })
}

modificarCursoElegido(cursoGuardado)
mostrarTotal()

function resumir() {
    let campos = document.querySelectorAll('.campo-completo')
    let todosCompletos = true
    campos.forEach(campo => {
        if (campo.value.trim() === '') {
            todosCompletos = false;
        }
    })
    if (todosCompletos) {
        let total = calcularTotal()
        let nombre = document.getElementById('nombre').value
        let email = document.getElementById('email').value
        let horas = document.getElementById('cantidad-horas').value
        let paquete = document.getElementById('forma-pago').value
        let mensaje = document.getElementById('mensaje-resumen')
        mensaje.innerHTML = `<h3>Inscripción exitosa!</h3>
<p class="parrafo-mensaje">Gracias, <span class="resaltado">${nombre}</span>, por unirte a English Connection. <br><br>
Has solicitado una suscripción al curso <span class="resaltado">${cursoGuardado.nombre}</span>, con una carga horaria de <span class="resaltado">${horas} horas</span> a la semana, y has elegido comprar el <span class="resaltado">paquete ${paquete}</span>. <br><br>
El monto total a abonar es de <span class="resaltado">$${total}</span>. <br><br>
Se enviarán los datos de medios de pago y detalle de la compra a la casilla de correo electrónico: <span class="resaltado">${email}</span>. Si no recibes el correo, por favor escríbenos a 'administración@english-connection.edu.ar'.<br><br>
¡Te desamos un feliz comienzo de clases!
</p>`
        let formulario = document.getElementById('enrole-form')
        formulario.className = "no-display"
    } else {
        let warning = document.getElementById('warning')
        warning.className = 'warning'
        warning.innerHTML = `<p>* Por favor, complete todos los campos.</p>`
    }
}


document.getElementById('enrole-form').addEventListener('submit', function (event) {
    event.preventDefault()
    resumir()
})
