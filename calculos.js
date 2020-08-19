
function calcularPromedio(numero) {
    let contador = 0;
    
    for (let i = 0; i < numero.length; i++) { 
        contador+= numero[i]     
    }
    return (contador/numero.length)
}

function calcularMenor(numero) {
    let numeroMenor= numero[0]
    for (let i = 0; i< numero.length; i++){

     if(numeroMenor>numero[i]){  
        numeroMenor = numero[i]
     }
   
    }
    return numeroMenor
}

function calcularMayor(numero) {
    let numeroMayor= numero[0]
    for (let i = 0; i< numero.length; i++){
     if(numeroMayor<numero[i]){  
        numeroMayor = numero[i]
     }
   
    }
    return numeroMayor
}
