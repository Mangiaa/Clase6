/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.
Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.
Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/



const $divFamiliares = document.querySelector('#cantidad-familiares')


document.querySelector('#boton-primer-paso').onclick = function (e) {
    e.preventDefault()
    const $cantidadDeIntegrantes = document.querySelector('#cantidad-integrantes')
    const cantidadDeIntegrantes = Number($cantidadDeIntegrantes.value)
    borrarIntegrantes()
    crearIntegrantes(cantidadDeIntegrantes) 
}

document.querySelector('#resetear').onclick=function (e) {
    e.preventDefault
    ocultarDiv()
    borrarBoton()
}

document.querySelector("#boton-segundo-paso").onclick = function(e){
    e.preventDefault()
    aparecerEnElDiv()
    mostarDiv()
}

function aparecerEnElDiv(){
    const mostrarIntegrantes = obtenerIntegrantes()

    document.querySelector('#promedio-edad').innerText = calcularPromedio(mostrarIntegrantes)
    document.querySelector('#mayor-edad').innerText = calcularMayor(mostrarIntegrantes)
    document.querySelector('#menor-edad').innerText = calcularMenor(mostrarIntegrantes)
}

function crearIntegrantes(cantidadDeIntegrantes) {

    if(cantidadDeIntegrantes<=0){
            alert('Agrega integrantes!')
    }else{
         for(let i = 1;i<=cantidadDeIntegrantes;i++){
            crearCadaIntegrante(i)
            }
            mostrarBoton()
        }
}

function crearCadaIntegrante(integrantes){
    
    const $div = document.createElement('div')
          $div.className = "edades"
    const $label = document.createElement('label')
          $label.innerText= ` Edad del familiar # ${integrantes}`

    let $inputs = document.createElement("input")
        $inputs.type = 'number'

    $div.appendChild($label)
    $div.appendChild($inputs)       
    $divFamiliares.appendChild($div)

    return integrantes   
}

function obtenerIntegrantes() {         //! IMPORTANTE ESTO!! esta funcion lo que hace es recopilar las clases .edades
    const $obtenerIntegrantes = document.querySelectorAll(".edades input")
    let edades = []
    for (let i = 0; i < $obtenerIntegrantes.length; i++){
        edades.push(Number($obtenerIntegrantes[i].value))
    } 
    return edades
}

function mostrarBoton() {
    const $mostrarBoton = document.querySelector('#boton-segundo-paso')
    $mostrarBoton.classList.remove("oculto")  
}

function borrarBoton() {
    const $borrarBoton = document.querySelector('#boton-segundo-paso')
    $borrarBoton.className = 'oculto'  
}

function mostarDiv(){
    document.querySelector(".oculto").classList.remove("oculto")
}

function ocultarDiv() {
    document.querySelector("#analisis").className = "oculto"
    
    if(document.querySelector('#cantidad-familiares')){
        document.querySelector('#cantidad-familiares').remove()
    }
      
}

function borrarIntegrantes(){
    const $integrantesViejos = document.querySelectorAll('.edades')

    for (let i = 0; i < $integrantesViejos.length; i++) {
            $integrantesViejos[i].remove()   
    }
}
