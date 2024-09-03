try{
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
}catch(err){
    console.error("No se completaron los datos", err)
    document.getElementById('aviso').style.display = 'block'
}

//Usuario puede realizar MODIFICACIONES por SECCION (usuario, curso, facturación)

//USUARIO
import './autogestion-usuario.js'
import { mostrarFormularioEdicion } from './autogestion-usuario.js'
import { guardarInfoUsuario } from './autogestion-usuario.js'
import { cancelarEdicionUsuario } from './autogestion-usuario.js'

//Asigno evento a botones de sección Usuario
document.getElementById('modificar-datos-personales').onclick=(event)=>{mostrarFormularioEdicion()}
document.getElementById('guardar-usuario').onclick=(event)=>{
    event.preventDefault()
    guardarInfoUsuario()
}
document.getElementById('cancelar-usuario').onclick=(event)=>{
    event.preventDefault()
    cancelarEdicionUsuario()}


//CURSO
import './autogestion-curso.js'
import { modificarDiasHorarios } from './autogestion-curso.js'
import { guardarDatosHorario } from './autogestion-curso.js'
import { cancelarEdicionCurso } from './autogestion-curso.js'

//Asigno evento a botones de sección Curso
document.getElementById('modificar-curso').onclick=()=>{modificarDiasHorarios()}
document.getElementById('guardar-curso').onclick=(event)=>{
    event.preventDefault()
    guardarDatosHorario()
}
document.getElementById('cancelar-curso').onclick=(event)=>{
    event.preventDefault()
    cancelarEdicionCurso()}

//FACTURACION
import './autogestion-pago.js'
import { modificarPago } from './autogestion-pago.js'
import { guardarDatosPago } from './autogestion-pago.js'
import { cancelarEdicionPago } from './autogestion-pago.js'

//Asigno evento a los botones de sección Facturación
document.getElementById('modificar-pago').onclick=()=>{modificarPago()}
document.getElementById('guardar-facturacion').onclick=(event)=> {
    event.preventDefault()
    guardarDatosPago()
}
document.getElementById('cancelar-facturacion').onclick=(event)=>{
    event.preventDefault()
    cancelarEdicionPago()}

