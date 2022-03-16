// Arnoldo le gustan mucho los números y quiere saber más de ellos, él denomina
// números cool a los que son divisibles entre 5, el quiere crear un programa en el
// cual el ingrese un número y le diga si es cool o no, ¿puedes ayudarlo?

let numero = prompt("Ingresa un numero y veamos si es cool");
let division = numero / 5;

if(numero%5 === 0 ) {
    console.log('Es cool');
} else { console.log('No es cool')

}


// Humberto está repartiendo códigos por toda la ciudad. El quiere crear un programa
// que cuando un usuario ingrese un código este despliegue un mensaje. Para el
// código happy el quiere desplegar el mensaje "cool bro, the life is short" y para el
// código sad él quiere, desplegar el mensaje "go for tacos bro, tacos = smile"

let codigo = prompt('Ingresa tu codigo')

if(codigo === 'happy'){
    alert('Cool bro, the life is short')
} else if(codigo === 'sad'){
    alert ('go for tacos bro, tacos = smile')
} else{
    alert ('codigo no valido')
}

// Crea una aplicación web empleando JavaScript que permita a dos usuarios 
//jugar una partida de piedra, papel o tijeras.

// Pide al jugador1 y al jugador2 que escriban su elección mediante prompts.
// Compara los valores ingresados y muestra en pantalla, mediante un alert o console.log, quién fue el jugador ganador. && ||

// Crea una aplicación web con JavaScript que reciba tres 
//números digitados por el usuario, mediante prompts, y muestre en pantalla, 
//mediante un alert, cuál es el mayor de los tres números. 


let eleccionJugador1 = prompt('Elige piedra, papel o tijera')
let eleccionJugador2 = prompt('Elige piedra, papel o tijera')

if (eleccionJugador1 === eleccionJugador2){
    alert(empate);
} else if (eleccionJugador1)




