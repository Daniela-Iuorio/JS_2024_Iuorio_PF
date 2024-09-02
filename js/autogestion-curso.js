let usuarioGestion = JSON.parse(localStorage.getItem('usuario'))
console.log(usuarioGestion)

//Función para habilitar la modificación de días de cursada
export function modificarDiasHorarios(cursoElegido) {

    //Muestro formulario, oculto texto informativo
    document.getElementById('horario-info').style.display = 'none'
    document.getElementById('div-horario-form').style.display = 'flex'

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
}


// Función para guardar info Horario y mostrar

export function guardarDatosHorario() {
    let warning3 = document.getElementById('warning3')
    warning3.className = "no-display"

    let horarioElegido = document.getElementById('horario').value
    let chosenSchedule 
    // Funcion para usar el texto de la opción elegida
    function contenidoOpcion(){
        switch(horarioElegido){
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

    //Actualizo la info en localStorage
    usuarioGestion.horario = horarioElegido
    localStorage.setItem('usuario', JSON.stringify(usuarioGestion))
    console.log(usuarioGestion)

    // Actualizo la informacion mostrada en interfaz
    document.getElementById('schedule-curso').innerText = chosenSchedule

    // Muestro la información y oculto el formulario
    document.getElementById('horario-info').style.display = 'block';
    document.getElementById('div-horario-form').style.display = 'none';
}
