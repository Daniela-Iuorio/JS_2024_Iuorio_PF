
//Función para habilitar la modificación de días de cursada
export function modificarDiasHorarios(cursoElegido) {

    //Muestro formulario, oculto texto informativo
    document.getElementById('horario-info').style.display = 'none'
    document.getElementById('horario-form').style.display = 'flex'

    //Opciones de cursada según curso elegido
    document.getElementById('value1').innerText = cursoElegido.dia1
    document.getElementById('value2').innerText = cursoElegido.dias2
    document.getElementById('value3').innerText = cursoElegido.dias3  

}



// Función para guardar info Horario y mostrar

export function guardarDatosHorario(cursoElegido) {

        // Obtengo el elemento <select>
        const selectElement = document.getElementById('horario')

        // Obtengo el índice de la opción seleccionada
        const selectedIndex = selectElement.selectedIndex
    
        // Obtengo el texto de la opción seleccionada
        const diaHorario = selectElement.options[selectedIndex].text

    //Guardo en localStorage
    localStorage.setItem("horarioCursada", JSON.stringify(diaHorario))
    localStorage.setItem("nuevaCargaHoraria", JSON.stringify(selectElement.value))

    let horario = JSON.parse(localStorage.getItem("horarioCursada"))
    let cargaHoraria = JSON.parse(localStorage.getItem("nuevaCargaHoraria"))

    if (horario && cargaHoraria) {
        try{
        // Actualizo la informacion
        document.getElementById('schedule-curso').innerText = horario
        document.getElementById('info-carga-horaria').innerText = cargaHoraria

        // Muestro la información y oculto el formulario
        document.getElementById('horario-info').style.display = 'block';
        document.getElementById('horario-form').style.display = 'none';
    }catch(err){
        mensaje = "No hay datos guardados de carga horaria."
    }
    }
}
