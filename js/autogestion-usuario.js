//Recupero informacion de usuario desde localStorage

let usuarioGestion = JSON.parse(localStorage.getItem("usuario"))
console.log(usuarioGestion)

// Función para mostrar el formulario de edición
//https://www.geeksforgeeks.org/html-dom-style-display-property/
function mostrarFormularioEdicion() {
    document.getElementById('user-info').style.display = 'none'
    document.getElementById('actualizar-datos-personales').style.display = 'flex'

    // Autocompletado de los campos del formulario
    document.getElementById('user-username').value = usuarioGestion.nombre
    document.getElementById('user-name-surname').value = usuarioGestion.nombre + " " + usuarioGestion.apellido
    document.getElementById('user-email').value = usuarioGestion.email
    document.getElementById('user-mobile-phone').value = usuarioGestion.celular
}



// Función para guardar info Usuario
function guardarInfoUsuario(event) {
    event.preventDefault()

    let usuarioNombre = document.getElementById("user-username").value
    let nombreApellido = document.getElementById("user-name-surname").value 
    let email = document.getElementById("user-email").value
    let celular = document.getElementById("user-mobile-phone").value

    const usuario = { usuarioNombre, nombreApellido, email, celular }
    usuarioGestion = usuario

   //Guardo en localStorage
    localStorage.setItem("usuarioGestion", JSON.stringify(usuarioGestion))

    //Actualizo datos mostrados
    document.getElementById('user-name').innerText = usuarioNombre
    document.getElementById('nombre-apellido').innerText = nombreApellido
    document.getElementById('email').innerText = email
    document.getElementById('celu').innerText = celular

    //Oculto formulario y muestro texto con info actualizada
    document.getElementById('user-info').style.display = 'block'
    document.getElementById('actualizar-datos-personales').style.display = 'none'
}

//Asigno eventos a botones
document.getElementById('modificar-datos-personales').addEventListener('click', mostrarFormularioEdicion)
document.getElementById('actualizar-datos-personales').addEventListener('submit', guardarInfoUsuario)


