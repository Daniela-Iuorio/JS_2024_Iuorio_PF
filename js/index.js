let arrayCursos

// Traigo info de cursos desde database local
fetch("./db/data.json")
.then(response=>response.json())
.then(data=>{
    arrayCursos = data
    renderCursos(data)
})

// Creo cards para mostrar en página inicio
let divCursos = document.getElementById("divCursos")
function renderCursos(coursesArray) {
    coursesArray.forEach(curso => {
        const card = document.createElement("div")
        card.className = "courses_card"
        card.innerHTML = `<h3>${curso.nombre}</h3>
                        <p>${curso.descripcion}</p>
                        <button class="inscribirse btn btn-outline-success" id="${curso.id}">Inscribirse</button>`
        divCursos.appendChild(card)
    })
    inscribirse()
}


// Guardo el curso elegido y redirecciono a formulario de inscripción
let selectedCourse
function inscribirse() {
    let enroleButton = document.querySelectorAll(".inscribirse")
    enroleButton.forEach (button => {
        button.onclick = (e) => {
            const courseId = e.currentTarget.id
            selectedCourse = arrayCursos.find(curso => curso.id == courseId)
            
            localStorage.setItem("cursoSeleccionado", JSON.stringify(selectedCourse))
            
            window.location.href= "./pages/inscripcion.html"
        }
    })
}




