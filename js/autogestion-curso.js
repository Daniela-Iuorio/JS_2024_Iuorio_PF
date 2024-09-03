//Función para habilitar la modificación de días de cursada
export function modificarDiasHorarios() {

    let cursoElegido = JSON.parse(localStorage.getItem('cursoSeleccionado'))

    //Muestro formulario, oculto texto informativo
    document.getElementById('horario-info').style.display = 'none'
    document.getElementById('div-horario-form').style.display = 'flex'

    try {
        //Opciones de cursada según curso elegido
        let cantidadHoras = document.getElementById('info-carga-horaria').innerText
        let opcion1 = document.getElementById('horario1')
        let opcion2 = document.getElementById('horario2')

        function mostrarOpciones() {
            switch (cantidadHoras) {
                case "1":
                    opcion1.innerText = cursoElegido.h1op1
                    opcion2.innerText = cursoElegido.h1op2
                    break;
                case "2":
                    opcion1.innerText = cursoElegido.h2op1
                    opcion2.innerText = cursoElegido.h2op2
                    break;
                case "3":
                    opcion1.innerText = cursoElegido.h3op1
                    opcion2.innerText = cursoElegido.h3op2
                    break;
                default:
                    opcion1.innerText = "Opción 1"
                    opcion2.innerText = "Opción 2"
            }
        }
        mostrarOpciones()
    } catch (err) {
        console.error("Error:", err)
    }
}


// Función para guardar info Horario y mostrar

export function guardarDatosHorario() {
    let warning3 = document.getElementById('warning3')
    warning3.className = "no-display"

    let horarioElegido = document.getElementById('horario').value
    let chosenSchedule
    // Funcion para usar el texto de la opción elegida
    function contenidoOpcion() {
        switch (horarioElegido) {
            case "1":
                chosenSchedule = document.getElementById('horario1').innerText
                break
            case "2":
                chosenSchedule = document.getElementById('horario2').innerText
                break
            default:
                chosenSchedule = "Horario elegido"
        }
    }
    contenidoOpcion()

    try{
    //Actualizo la info en localStorage
    let usuarioGestion = JSON.parse(localStorage.getItem('usuario'))
    usuarioGestion.horario = horarioElegido
    localStorage.setItem('usuario', JSON.stringify(usuarioGestion))
    console.log(usuarioGestion)
    let originalSchedule = JSON.parse(localStorage.getItem('chosenSchedule'))
    originalSchedule = chosenSchedule
    localStorage.setItem('chosenSchedule', JSON.stringify(originalSchedule))
    }catch(err){
        console.error("Error:", err)
    }

    // Actualizo la informacion mostrada en interfaz
    document.getElementById('schedule-curso').innerText = chosenSchedule

    // Muestro la información y oculto el formulario
    document.getElementById('horario-info').style.display = 'block';
    document.getElementById('div-horario-form').style.display = 'none';

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

export function cancelarEdicionCurso() {
    document.getElementById('horario-info').style.display = 'block';
    document.getElementById('div-horario-form').style.display = 'none';
}
