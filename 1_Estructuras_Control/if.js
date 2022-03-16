
//let edad = 20

//if(edad > 18) {
//  alert ('Eres mayor de edad')
//} else ('Eres menor de edad')


//if-else



//Ternario abreviacion de un if
//<condicion> ? <que pasa si se cumple> : <que pasa si no se cumple>

//Ejercicio-1 legos 4-99 

let edad = parseInt(prompt('Cual es tu edad: '))

if (edad < 4) {
    alert ('Eres muy joven')
} else if (edad >= 4 && edad <= 99) {
alert('Diviertete')
}else {
    alert ('Lo siento, pero para el dominio no hay limite')
}


//Ternario
edad <4 ? alert("Muy joven") : edad<=99 ? alert("Diviertete") : alert("Lo siento, pero para el domio no hay limite")