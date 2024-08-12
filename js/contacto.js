let cursoGuardado = JSON.parse(localStorage.getItem("cursoSeleccionado"))

function modificarCursoElegido (cursoGuardado){
    let pCursoSelect = document.getElementById("form-curso-select")
    pCursoSelect.innerHTML= `<p class="form-p" id="form-curso-select">Curso seleccionado: <span class="resaltado">${cursoGuardado.nombre}</span></p>`
}

function modificarCargaHoraria(cursoGuardado){
    let cargaHoraria = document.getElementById("cantidad-horas")
    cargaHoraria.innerHTML=`<option class="opcion-horas" value="1" id="1hora">1 hora/semana $${cursoGuardado.precios[0]}</option>
                            <option class="opcion-horas" value="2" id="2horas">2 horas/semana $${cursoGuardado.precios[1]}</option>
                            <option class="opcion-horas" value="3" id="3horas">3 horas/semana $${cursoGuardado.precios[2]}</option>`
}


function modificarFormaPago (idInput, value){
        let inputRadio = document.getElementById(idInput)
        inputRadio.value = value
    }

function calcularTotal (cargaHoraria, formaPago){
        switch(formaPago){
            case 'semanal':
                total = cargaHoraria
                break
            case 'mensual':
                total = (cargaHoraria*4)*0.9
                break
            case 'tres-meses':
                total = ((cargaHoraria*4)*3)*0.85
                break
            default:
                console.log("No se seleccionó una forma de pago.")
        }
        return total
}


let radios = document.getElementsByClassName("opcion")

function modificarTotal(){
    radios.forEach(radio =>{
        radio.addEventListener('change', function(){
            let total = document.getElementById('form-total')
            total.innerHTML=`<p class="form-p" id="form-total">Total a pagar:<span>${calcularTotal()}</span></p>`
        })
    })
}


modificarCursoElegido(cursoGuardado)
modificarCargaHoraria(cursoGuardado)
modificarFormaPago('1hora', calcularTotal(cantidadHoras, formaPago ))
modificarTotal()




