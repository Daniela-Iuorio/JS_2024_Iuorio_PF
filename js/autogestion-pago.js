//Función para habilitar modificación de  modalidad de pago
function modificarPago() {
    let pago = document.getElementById("pago")
    pago.innerHTML = `
        <form class="flex-column" action="" method="post">
        <select name="horario" id="horario">
        <option value="" disabled selected>Seleccione una opción</option>
        <option value="1">Semanal</option>
        <option value="2">Mensual</option>
        <option value="3">Trimestral</option>
        </select>
        <input id="botonGuardarHorario" class="contact-form-item contact_button sin-borde btn btn-outline-success" type="submit" value="Guardar">
        </form>`

}

//Ejecuto modificacion de modalidad de pago
document.getElementById('modificar-pago').addEventListener('onclick', function (event) {
    modificarPago()
})

// Función para guardar y mostrar info Pago
function guardarDatosPago() {

}

//Ejecuto guardado de datos Pago
document.getElementById('botonGuardarPago').addEventListener('submit', function (event) {
    event.preventDefault()
    guardarDatosPago()
})


// Función para calcular total a pagar según carga horaria y modalidad de pago

function calcularTotal() {
    let cargaHoraria = parseInt(document.getElementById('cantidad-horas').value)
    let formaPago = document.getElementById('forma-pago').value
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


// Función para mostrar total en interfaz