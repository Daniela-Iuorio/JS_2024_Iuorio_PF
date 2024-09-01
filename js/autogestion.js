// Recupero datos de curso elegido y usuario
let cursoElegido = JSON.parse(localStorage.getItem("cursoSeleccionado"))
let usuarioGestion = JSON.parse(localStorage.getItem("usuario"))


// Función para mostrar toda la info ingresada en la inscripción
function completarDatosIniciales() {

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

//Usuario puede realizar MODIFICACIONES por SECCION (usuario, curso, facturación)

//USUARIO
import './autogestion-usuario.js'

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
// import './autogestion-pago.js'


