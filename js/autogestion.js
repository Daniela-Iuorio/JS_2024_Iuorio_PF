let cursoElegido = JSON.parse(localStorage.getItem("cursoSeleccionado"))
let usuarioGestion = JSON.parse(localStorage.getItem("usuario"))
// console.log(usuarioGestion)

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

    let cargaHoraria = document.getElementById("info-carga-horaria")
    cargaHoraria.innerText = usuarioGestion.horas

    let modalidadPago = document.getElementById("info-modalidad-pago")
    modalidadPago.innerText = usuarioGestion.paquete

    let primerTotal = document.getElementById("info-total-pagar")
    primerTotal.innerHTML = "$" + usuarioGestion.total
}

completarDatosIniciales()


function modificarDatosUsuario() {
    let texto = document.getElementById("user-div-text")
    texto.innerHTML = `<form class="flex-column" action="" method="post"
        class="user-form" id="user-personal-data">
        <input type="text" id="user-username" placeholder="Nombre de Usuario">
        <input type="text" id="user-name-surname" placeholder="${usuarioGestion.nombre} ${usuarioGestion.apellido}">
        <input type="email" name="email" id="user-email" placeholder="${usuarioGestion.email}">
        <input type="tel" name="mobile-phone" id="user-mobile-phone" placeholder="${usuarioGestion.celular}">
        </form>
        <button id="guardar-form">Guardar</button>`

}

let boton = document.getElementById("modificar-datos-personales")
boton.onclick = () => { modificarDatosUsuario() }








