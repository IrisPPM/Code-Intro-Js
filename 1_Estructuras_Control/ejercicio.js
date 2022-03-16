// Guarda en variables el nombre de las siguientes mascotas:

let nombreMascota1 = 'Pedrito'
let nombreMascota2 = 'Rufo'
let nombreMascota3 = 'Chancla'

// 1. Pedrito
// 2. Rufo
// 3. Chancla

// Muestra en consola, accediendo a las variables, un mensaje como el siguiente:
// "Mis mascotas son Pedrito, Rufo y Chancla. Les quiero mucho"

console.log("Mis mascotas son" + nombreMascota1 + nombreMascota2 + nombreMascota3 + "Les quiero mucho")
console.log (`Mis mascotas son ${nombreMascota1}, ${nombreMascota2}, ${nombreMascota3} y les quiero mucho`)
// Input y Output

// Pedir mediante prompts el nombre de dos mascotas y mostrar en consola un mensaje como el siguiente:

let nombreMascotaUsuario1 = prompt("Dime el nombre de tu mascota 1")
let nombreMascotaUsuario2 = prompt ("Dime el nombre de tu mascota 2")

console.log ("Quiero mucho a mis mascotas" + nombreMascotaUsuario1 + nombreMascotaUsuario2 )

// "Quiero mucho a mis mascotas mascota1 y mascota2"



let texto1 = "100"

console.log (typeof(texto1));


// Conversión de Tipos de Datos

// Guarda la cadena de texto "100" en una variable

// Muestra el contenido de esta variable en consola

// Muestra el TIPO DE DATO de esta variable en consola

// Transforma la variable de string a number

let textoAdato = parseInt(texto1);
console.log(textoAdato);
console.log (typeof textoAdato);
// Muestra nuevamente el contenido de esta variable en consola

// ¿Qué diferencias notas al mostrar en consola la variable antes y después de transformarla? ¿Qué es entonces un tipo de dato?