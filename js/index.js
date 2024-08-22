class Curso {
    static id = 0
    constructor(nombre, descripcion, valorHora) {
        this.id = ++Curso.id
        this.nombre = nombre
        this.descripcion = descripcion
        this.valorHora = valorHora
    }
}

const elem = new Curso("Elementary", "Diseñado para principiantes que desean establecer una base sólida en el idioma. Al finalizar el curso, los estudiantes tendrán habilidades para comunicarse en situaciones cotidianas, comprender textos simples y expresar ideas básicas.", 7000)

const inter = new Curso("Intermediate", "Dirigido a estudiantes que ya tienen un conocimiento básico del idioma y desean mejorar sus habilidades. Al completar el curso, los estudiantes podrán comunicarse con mayor confianza en una variedad de contextos, comprender textos más complejos y expresar ideas con mayor claridad.", 8000)

const adv = new Curso("Advanced", "Diseñado para estudiantes con un dominio sólido del idioma que buscan perfeccionar sus habilidades. Al finalizar el curso, los estudiantes serán capaces de comunicarse con fluidez y precisión en situaciones complejas, comprender textos y discursos sofisticados, y expresar ideas con claridad y coherencia.", 9000)

const exam = new Curso("Exam Training", "Nos enfocamos en mejorar habilidades específicas requeridas para exámenes internacionales, como comprensión auditiva, expresión escrita, gramática avanzada y estrategias de examen. Utilizamos material auténtico de exámenes anteriores, simulacros de prueba y tutorías personalizadas.", 10000)

const cursos = [elem, inter, adv, exam]


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

renderCursos(cursos)

let selectedCourse

function inscribirse() {
    let enroleButton = document.querySelectorAll(".inscribirse")
    enroleButton.forEach (button => {
        button.onclick = (e) => {
            const courseId = e.currentTarget.id
            selectedCourse = cursos.find(curso => curso.id == courseId)
            
            localStorage.setItem("cursoSeleccionado", JSON.stringify(selectedCourse))
            
            window.location.href= "./pages/inscripcion.html"
        }
    })
}




