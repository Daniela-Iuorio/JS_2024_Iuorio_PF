// Recupero datos de curso elegido y usuario
let cursoElegido = JSON.parse(localStorage.getItem("cursoSeleccionado"))
let usuarioGestion = JSON.parse(localStorage.getItem("usuario"))

// Muestro toda la info
function completarDatosIniciales() {

    let usuarioWelcome = document.getElementById("user-welcome")
    let nombreUsuario = document.getElementById("user-name").innerText
    usuarioWelcome.innerText = nombreUsuario

    let nombreApellido = document.getElementById("nombre-apellido")
    nombreApellido.innerText = usuarioGestion.nombre + usuarioGestion.apellido

    let eMail = document.getElementById("email")
    eMail.innerText = usuarioGestion.email

    let celu = document.getElementById("celu")
    celu.innerText = usuarioGestion.celular

    let curso = document.getElementById("nombre-curso")
    curso.innerText = cursoElegido.nombre

    let profe = document.getElementById("profe-curso")
    profe.innerText = cursoElegido.profe

    let cargaHoraria = document.getElementById("info-carga-horaria")
    cargaHoraria.innerText = usuarioGestion.horas

    let modalidadPago = document.getElementById("info-modalidad-pago")
    modalidadPago.innerText = usuarioGestion.paquete

    let primerTotal = document.getElementById("info-total-pagar")
    primerTotal.innerHTML = "$" + usuarioGestion.total

}

completarDatosIniciales()

//Usuario realiza MODIFICACIONES por SECCION (usuario, curso, facturación)

//USUARIO
// Habilito la modificación de los datos de usuario
function modificarDatosUsuario() {
    let texto = document.getElementById("user-div-text")
    texto.innerHTML = `<form class="flex-column user-form" action="" method="post"
        id="user-personal-data">
        <input type="text" id="user-username" placeholder="Nombre de Usuario">
        <input type="text" id="user-name-surname" placeholder="${usuarioGestion.nombre} ${usuarioGestion.apellido}">
        <input type="email" name="email" id="user-email" placeholder="${usuarioGestion.email}">
        <input type="tel" name="mobile-phone" id="user-mobile-phone" placeholder="${usuarioGestion.celular}">
        <div class="form-item">
        <input id="botonGuardarUsuario" class="contact-form-item contact_button sin-borde btn btn-outline-success" type="submit" value="Guardar">
        </div>
        </form>`
}

// Ejecuto modificación de datos Usuario
document.getElementById('modificar-datos-personales').addEventListener('onclick', function (event) {
    modificarDatosUsuario()
})

// Guardo info Usuario y muestro
function guardarInfoUsuario() {
    localStorage.setItem
}



// Ejecuto guardado de datos Usuario
document.getElementById('botonGuardarUsuario').addEventListener('submit', function (event) {
    event.preventDefault()
    guardarInfoUsuario()
})

//CURSO
//Habilito la modificación de días de cursada 
function modificarDiasHorarios() {
    let horario = document.getElementById("horario")
    horario.innerHTML = `
        <form class="flex-column" action="" method="post">
        <select name="horario" id="horario">
        <option value="" disabled selected>Seleccione una opción</option>
        <option value="1">${cursoElegido.dia1}</option>
        <option value="2">${cursoElegido.dias2}</option>
        <option value="3">${cursoElegido.dias3}</option>
        </select>
        <input id="botonGuardarHorario" class="contact-form-item contact_button sin-borde btn btn-outline-success" type="submit" value="Guardar">
        </form>`
    
}

//Ejecuto modificación de cursada
document.getElementById('modificar-curso').addEventListener('onclick', function (event) {
    modificarDiasHorarios()
})


// Guardo info Horario y muestro

function guardarDatosHorario (){

}

//Ejecuto guardado de datos Horario
document.getElementById('botonGuardarHorario').addEventListener('submit', function (event) {
    event.preventDefault()
    guardarDatosHorario()
})

//FACTURACION
//Habilito modificación de  modalidad de pago
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

// Guardo y muestro info Pago
function guardarDatosPago (){

}

//Ejecuto guardado de datos Pago
document.getElementById('botonGuardarPago').addEventListener('submit', function (event) {
    event.preventDefault()
    guardarDatosPago()
})


// Calculo total a pagar según carga horaria y modalidad de pago

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


// Muestro total en interfaz