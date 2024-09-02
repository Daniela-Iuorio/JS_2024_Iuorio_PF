// Recupero datos de curso elegido y usuario
let cursoElegido = JSON.parse(localStorage.getItem("cursoSeleccionado"))
let usuarioGestion = JSON.parse(localStorage.getItem("usuario"))
let chosenSchedule = JSON.parse(localStorage.getItem("chosenSchedule"))


// Función para mostrar toda la info ingresada en la inscripción
function completarDatosIniciales() {

    let nombreApellido = document.getElementById("nombre-apellido")
    nombreApellido.innerText = usuarioGestion.nombre

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

    let horarioCursada = document.getElementById("schedule-curso")
    horarioCursada.innerText = chosenSchedule

    let modalidadPago = document.getElementById("info-modalidad-pago")
    modalidadPago.innerText = usuarioGestion.paquete

    let primerTotal = document.getElementById("info-total-pagar")
    primerTotal.innerHTML = "$" + usuarioGestion.total

}

completarDatosIniciales()

//Usuario puede realizar MODIFICACIONES por SECCION (usuario, curso, facturación)

//USUARIO
import './autogestion-usuario.js'
import { mostrarFormularioEdicion } from './autogestion-usuario.js'
import { guardarInfoUsuario } from './autogestion-usuario.js'

//Asigno evento a botones de sección Usuario
document.getElementById('modificar-datos-personales').addEventListener('click', mostrarFormularioEdicion)
document.getElementById('actualizar-datos-personales').addEventListener('submit', guardarInfoUsuario)


//CURSO
import './autogestion-curso.js'
import { modificarDiasHorarios } from './autogestion-curso.js'
import { guardarDatosHorario } from './autogestion-curso.js'

//Asigno evento a botones de sección Curso
document.getElementById('modificar-curso').addEventListener('click', ()=>{modificarDiasHorarios(cursoElegido)})
document.getElementById('horario-form').addEventListener('submit', (event)=>{
    event.preventDefault()
    guardarDatosHorario(event, cursoElegido)
})

//FACTURACION
import './autogestion-pago.js'
import { modificarPago } from './autogestion-pago.js'
import { guardarDatosPago } from './autogestion-pago.js'

//Asigno evento a los botones de sección Facturación
document.getElementById('modificar-pago').addEventListener('click', function () {modificarPago()})
document.getElementById('pago-form').addEventListener('submit', function (event) {
    event.preventDefault()
    guardarDatosPago()
})

