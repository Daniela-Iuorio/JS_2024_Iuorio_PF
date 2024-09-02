//Recupero datos de curso elegido
let cursoGuardado = JSON.parse(localStorage.getItem("cursoSeleccionado"))
// Autocompletado de datos de curso en formulario
function completarDatosCurso() {
    let pCursoSelect = document.getElementById("form-curso-select")
    pCursoSelect.innerHTML = `<p class="form-p" id="form-curso-select">Curso seleccionado: <span class="resaltado">${cursoGuardado.nombre}</span> | Valor por hora: $${cursoGuardado.precio}</p>`

}

//Cambio opciones de cursada según carga horaria
function modificarHorario() {
    let cantidadHoras = document.getElementById('cantidad-horas')
    let opcion1 = document.getElementById('op1')
    let opcion2 = document.getElementById('op2')

    // Muestro advertencia si no se ha seleccionado la carga horaria
    function mostrarAdvertencia() {
        opcion1.innerText = "Elija primero la carga horaria"
        opcion2.innerText = "Elija primero la carga horaria"
    }

    // Actualizo opciones de horario según la carga horaria 
    function actualizarOpciones() {
        let cargaHoraria = cantidadHoras.value
        switch (cargaHoraria) {
            case "1":
                opcion1.innerText = cursoGuardado.h1op1
                opcion2.innerText = cursoGuardado.h1op2
                break;
            case "2":
                opcion1.innerText = cursoGuardado.h2op1
                opcion2.innerText = cursoGuardado.h2op2
                break;
            case "3":
                opcion1.innerText = cursoGuardado.h3op1
                opcion2.innerText = cursoGuardado.h3op2
                break;
            default:
                mostrarAdvertencia()
        }
    }

    // Llamo a mostrarAdvertencia al cargar la página
    mostrarAdvertencia()

    // Asigno evento para cambiar opciones
    cantidadHoras.addEventListener('change', actualizarOpciones)
}


//Calculo total según carga horaria y modalidad de pago
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

//Muestro total según carga horaria y modalidad de pago elegida
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

completarDatosCurso()
modificarHorario()
mostrarTotal()

// Creo constructor para guardar datos de usuario en un objeto
class Usuario {
    constructor(nombre, email, celular, horas, horario, paquete, total) {
        this.nombre = nombre
        this.email = email
        this.celular = celular
        this.horas = horas
        this.horario = horario
        this.paquete = paquete
        this.total = total
    }
}

// Guardo valores de inputs, creo el objeto 'usuario', y muestro texto informativo con detalles de inscripción
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
        let celular = document.getElementById('cel').value
        let horas = document.getElementById('cantidad-horas').value
        let horario = document.getElementById('horario-curso').value
        let paquete = document.getElementById('forma-pago').value
        let mensaje = document.getElementById('mensaje-resumen')

        const usuario = new Usuario(nombre, email, celular, horas, horario, paquete, total)

        localStorage.setItem("usuario", JSON.stringify(usuario))

        //Funcion para usar el texto de la opción de horario elegida
        let chosenSchedule
        function completarHorario() {
            switch (horas) {
                case "1":
                    switch (horario) {
                        case "1":
                            chosenSchedule = cursoGuardado.h1op1
                            break
                        case "2":
                            chosenSchedule = cursoGuardado.h1op2
                            break
                        default:
                            chosenSchedule = "No se eligió horario de cursada"
                    }
                    break;
                case "2":
                    switch (horario) {
                        case "1":
                            chosenSchedule = cursoGuardado.h2op1
                            break
                        case "2":
                            chosenSchedule = cursoGuardado.h2op2
                            break
                        default:
                            chosenSchedule = "No se eligió horario de cursada"
                    }
                    break;
                case "3":
                    switch (horario) {
                        case "1":
                            chosenSchedule = cursoGuardado.h3op1
                            break
                        case "2":
                            chosenSchedule = cursoGuardado.h3op2
                            break
                        default:
                            chosenSchedule = "No se eligió horario de cursada"
                    }
                    break;
                default:
                    chosenSchedule = "No se eligió horario de cursada"
            }
        }
        completarHorario()

        //Guardo chosenSchedule para reutilizar y no repetir función
        localStorage.setItem("chosenSchedule", JSON.stringify(chosenSchedule))

        mensaje.innerHTML = `<h3>Inscripción exitosa!</h3>
<p class="parrafo-mensaje">Gracias, <span class="resaltado">${nombre}</span>, por unirte a English Connection. <br><br>
Has solicitado una suscripción al curso <span class="resaltado">${cursoGuardado.nombre}</span>, con una carga horaria de <span class="resaltado">${horas} horas</span> a la semana, y has elegido comprar el <span class="resaltado">paquete ${paquete}</span>. <br><br>
El monto total a abonar es de <span class="resaltado">$${total}</span>. <br><br>
Elegiste esta opción de cursada: <span class="resaltado">${chosenSchedule}</span> , pero puedes modificarlo en la página Mi Aula. <br><br>
Se enviarán los datos de medios de pago y detalle de la compra a la casilla de correo electrónico: <span class="resaltado">${email}</span>. Si no recibes el correo, por favor escríbenos a 'administración@english-connection.edu.ar'.<br><br>
¡Te desamos un feliz comienzo de clases!
</p>
<button class="button btn btn-outline-success" id="boton-continuar">Continuar</button>`
        let formulario = document.getElementById('enrole-form')
        formulario.className = "no-display"

        //SweetAlert con cuenta regresiva para avisar el redireccionamiento
        let timer = 10;
        Swal.fire({
            position: 'top-end',
            title: 'Redireccionando...',
            html: `Serás redirigido en <b>${timer}</b> segundos.`,
            timer: timer * 1000,
            didOpen: () => {
                const b = Swal.getHtmlContainer().querySelector('b');
                const interval = setInterval(() => {
                    timer--;
                    b.textContent = timer;
                }, 1000);
            },
            willClose: () => {
                window.location.href = "./autogestion.html";
            }
        })

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
