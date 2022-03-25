//Ejercicios Parametros

//Ejercicio 1
//Crear una función que reciba un número y nos muestre en la consola si es positivo o negativo


function mostrarSignoNum (num){
    
    if(num < 0){
       return num + ' Es negativo';
    } else {
        return num + ' Es positivo';
    }
    
}

console.log (mostrarSignoNum (-1));

// 2. Crear una función que reciba el nombre de un cliente y un numero que hace referencia
// a un ahorro y nos muestre en la consola un mensaje con el nombre del cliente y el monto ahorrado

function ahorroCliente (cliente, ahorro){
    return `el cliente ${cliente} ahorro ${ahorro}`;
    
}

console.log (ahorroCliente('Juan', 10000 ));


// 3. Crear una función que reciba un arreglo de calificaciones y nos muestre el promedio

function promedioCalificaciones (a,b,c,d,e){
    let suma = a+b+c+d+e;
    let promedio = suma/suma.length;
    return 'El promedio de las calificaciones es ' + promedio;
}

console.log (promedioCalificaciones (10,7,8,5,6));

// 4. Crear una función que reciba un número y nos diga si es par o impar

function tipoDeNumero (numero){
    if(numero % 2 === 0){
        return numero + ' El numero es par';
            }
    else {
        return numero + ' El numero es impar';
    }
}

console.log (tipoDeNumero(5));

// 5. Crear una función que reciba un código (elige tres códigos diferentes) 
//y por cada código nos entregue un cupón de descuento (tú defines el valor del cupón)

function cuponDeDescuento (codigo1, codigo2, codigo3){
    
}

// 6. Crear una función que reciba base y altura de un triángulo y nos muestre
// cuál es su perímetro
 function perimetroTriangulo (a,b){
     let hioptenusa = Math.pow (a,2) + Math.pow(b,2);
     let c = Math.sqrt(hioptenusa);
     let perimetro = a+b+c;
     return `El perimetro del triangulo es ${perimetro}`;
 }

 console.log (perimetroTriangulo(4,2));


// 7. Crear una función que reciba base y altura de un triángulo y nos muestre cuál es su área
function areaTriangulo (b,h){
    let area = (b*h)/2;

    return `el area es ${area}`;
}

console.log (areaTriangulo(2,4));


// 8. Crear una función que reciba 2 números y me entregue el número más alto

function numeroMayor (a,b){
    if(a>b){
        return 'El numero mayor es ' + a;
    } else if (a<b){
        return 'El numero mayor es ' + b;
    } else if (a===b){
return 'Los numeros son iguales';
    } else {
        return'opcion no valida';
    }
 }
 console.log (numeroMayor(2,3));


// 9. Crear una función que reciba 2 números y me entregue el número más pequeño

function numeroMenor (a,b){
    if(a>b){
        return 'El numero menor es ' + b;
    } else if (a<b){
        return 'El numero menor es ' + a;
    } else if (a===b){
return 'Los numeros son iguales';
    } else {
        return 'opcion no valida';
    }
 }

 console.log (numeroMenor(1,2));

// 10. Crear una función que reciba 3 strings y nos muestre cuál tiene más caracteres

function definirStringLargo (string1, string2, string3){
    let a = string1.length;
    let b = string2.length;
    let c = string3.length;

    if(a>b && a>c){
        console.log(`La palabra mas larga es ${string1}`);
    } else if (b>a && b>c){
        console.log (`La palabra mas larga es ${string2}`);
    } else if(c>a && c>b){
        console.log (`La palabra más larga es ${string3}`);
    }
}
definirStringLargo('Iris', 'Duvalin', 'Hola');

// 11. Crear una función que reciba 1 número y me lo muestre al cubo

function elevarNumAlCubo (numero){
    let numAlCubo = Math.pow(numero, 3);
    console.log(`El resultado de ${numero} al cubo es ${numAlCubo}`);
}

elevarNumAlCubo(5);

// 12. Crear una función que reciba una palabra y me muestre cuántas "a" contiene


// 13. Crear una función que reciba una palabra y la transforme a minúsculas

function cambiarPalabraMayus (palabra) {
    let convertirPalabra = palabra.toUpperCase();
    console.log(`Palabra en mayusculas = ${convertirPalabra}`);

}

cambiarPalabraMayus ('hola');

// 14. Crear una función que reciba una palabra y la transforme a mayúsculas

function cambiarPalabraMinus (palabra){

    let convertirPalabra = palabra.toLowerCase();
    return`Palabra en minusculas = ${convertirPalabra}`;
}

console.log (cambiarPalabraMinus('ADIOS'));

// 15. Crear una función que reciba un número del 0 al 5 y me muestre en la consola el valor del arreglo que tiene ese índice let array = ['a', 'b', 'c',' d', 'e', 'f']

// let array = ['a', 'b', 'c',' d', 'e', 'f']
// function valorArreglo ()


// 1. Crear una función que reciba un array de strings y números como este [4,"dos",8,"tres",5,9,1,"cero" y nos regrese un arreglo con sólo los elementos tipo number

let arregloVariado = ['hola', 5, 'adios', 4,3];


 
function elegirNumeros (arregloVariado){
    let numeros1 = [];
    
    for (let i= 0; i<arregloVariado.length; i++){
        if (!isNaN(arregloVariado[i])){
            numeros1.push(arregloVariado[i]);
        }
    }
    
    return numeros1;

 }

console.log (elegirNumeros(arregloVariado));

//Soluciones alternas 1
// function transformarStringANumber(arreglo){
//     return arreglo.filter(function(x){
//         return typeof x === "number"
//     });
//     }

// console.log(transformarStringANumber([4,"dos", 8,"tres", 5, 9, 1, "cero"]))


//Solucion 2
// function number(arr) {
//     arr2=[];
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof(arr[i])=="number") {
//             arr2.push(arr[i])
//         }
//     }
//     return arr2;
// }
// arreglo=number([4,"dos",8,"tres",5,9,1,"cero"]);
// console.log(arreglo);




// 2. Crear una función que reciba un número como parámetro nos devuelva un arreglo con los números pares desde el 0 hasta el número recibido como parámetro

function arregloNumerosPares (limite){
     let pares = [];  
    for (let i = 0; i<= limite; i++){
        if(i%2 === 0){
            pares.push(i);
        }
           
    }
    return pares;
    
}

console.log (arregloNumerosPares(10));




// 3. Crear una función que me entregue un número entero random entre 1 y 100

function crearNumRandom(limiteInf, limSuperior){
    let numRandom = Math.floor(Math.random()*(limSuperior - limiteInf)) + limiteInf;

    return numRandom;
}

console.log (crearNumRandom (1,10));

// 4. Crear una función que me ayude a codificar un mensaje, la función debe recibir un string y entregarme el mensaje codificado, la codificación reemplaza las 'a' con 4, las 'e' con 3, las 'i' con 7, las 'o' con 6 y las 'u' con 2

function codificarMensaje(palabra){
    let encriptado = palabra.replace(/a/ig, 4). replace(/e/ig, 3).replace(/i/ig, 7).replace(/o/ig, 6).replace(/u/ig, 2);
    return palabra.value = encriptado;
}
console.log(codificarMensaje('hola que hace?'));
