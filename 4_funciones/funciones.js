// 1. Crear una función que nos muestre en consola los días de la semana.


function mostrarDias (){
let dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes']
for(let i = 0; i < dias.length; i++){
    console.log(dias[i]);
}

}

mostrarDias();

// 2. Crear una función que nos muestre un numero A, un numero B y la suma de A y B 

function sumar( a, b ) {
      return a + b;
      
}

console.log (sumar(2,3));

// 3. Crear una función que nos muestre la longitud de un arreglo que tú crearás

function longitudArreglo (){
    let arreglo = ['iris', 'maria', 'juan', 'pedro', 'rosa'];

    return arreglo.length;
}

console.log (longitudArreglo ());
