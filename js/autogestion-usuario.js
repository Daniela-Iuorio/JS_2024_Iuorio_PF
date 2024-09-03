//Recupero informacion de usuario desde localStorage
let usuarioGestion = JSON.parse(localStorage.getItem("usuario"))

let valoresIniciales = []
let input1
let input2
let input3

// Función para mostrar el formulario de edición
//https://www.geeksforgeeks.org/html-dom-style-display-property/
export function mostrarFormularioEdicion() {
    document.getElementById('user-info').style.display = 'none'
    document.getElementById('div-user-form').style.display = 'flex'

    // Autocompletado de los campos del formulario
    document.getElementById('user-name-surname').value = usuarioGestion.nombre
    document.getElementById('user-email').value = usuarioGestion.email
    document.getElementById('user-mobile-phone').value = usuarioGestion.celular

    input1 = document.getElementById('user-name-surname')
    input2 = document.getElementById('user-email')
    input3 = document.getElementById('user-mobile-phone')

    valoresIniciales = [input1.value, input2.value, input3.value]
}



// Función para guardar info Usuario
export function guardarInfoUsuario() {

    let nombreApellido = document.getElementById("user-name-surname").value
    let email = document.getElementById("user-email").value
    let celular = document.getElementById("user-mobile-phone").value

    const nuevosValores = [nombreApellido, email, celular]
    let guardarValores = []

    for (let i = 0; i < nuevosValores.length; i++) {
        if (valoresIniciales[i] !== nuevosValores[i]) {
            guardarValores[i] = nuevosValores[i]
        } else {
            guardarValores[i] = valoresIniciales[i]
        }
    }

    try{
    //Actualizo datos mostrados
    document.getElementById('nombre-apellido').innerText = guardarValores[0]
    document.getElementById('email').innerText = guardarValores[1]
    document.getElementById('celu').innerText = guardarValores[2]

    //Actualizo info usuario en localStorage
    let usuarioGestion = JSON.parse(localStorage.getItem('usuario'))
    usuarioGestion.nombre = guardarValores[0]
    usuarioGestion.email = guardarValores[1]
    usuarioGestion.celular = guardarValores[2]

    localStorage.setItem("usuario", JSON.stringify(usuarioGestion))
    }catch(err){
        console.error("Error:", err)
    }

    //Oculto formulario y muestro texto con info actualizada
    document.getElementById('user-info').style.display = 'block'
    document.getElementById('div-user-form').style.display = 'none'

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

}

export function cancelarEdicionUsuario() {
    document.getElementById('user-info').style.display = 'block'
    document.getElementById('div-user-form').style.display = 'none'
}
