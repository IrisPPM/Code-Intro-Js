//Ejercicios Parametros

//Ejercicio 1
//Crear una función que reciba un número y nos muestre en la consola si es positivo o negativo


function mostrarSignoNum (num){
    
    if(num < 0){
        console.log (num + ' Es negativo');
    } else {
        console.log (num + ' Es positivo')
    }
    
}

mostrarSignoNum (-1);

// 2. Crear una función que reciba el nombre de un cliente y un numero que hace referencia
// a un ahorro y nos muestre en la consola un mensaje con el nombre del cliente y el monto ahorrado

function ahorroCliente (cliente, ahorro){
    console.log(`el cliente ${cliente} ahorro ${ahorro}`);
    
}

ahorroCliente('Juan', 10000 );


// 3. Crear una función que reciba un arreglo de calificaciones y nos muestre el promedio

function promedioCalificaciones (a,b,c,d,e){
    let suma = a+b+c+d+e;
    let promedio = suma/2;
    console.log('El promedio de las calificaciones es ' + promedio);
}

promedioCalificaciones (10,7,8,5,6);

// 4. Crear una función que reciba un número y nos diga si es par o impar

function tipoDeNumero (numero){
    if(numero % 2 === 0){
        console.log (numero + ' El numero es par')
            }
    else {
        console.log (numero + ' El numero es impar')
    }
}

tipoDeNumero(5);

// 5. Crear una función que reciba un código (elige tres códigos diferentes) 
//y por cada código nos entregue un cupón de descuento (tú defines el valor del cupón)

function cuponDeDescuento (codigo1, codigo2, codigo3){
    
}

// 6. Crear una función que reciba base y altura de un triángulo y nos muestre
// cuál es su perímetro
 function perimetroTriangulo (a,b){
     let hioptenusa = a^2 + b^2;
     let c = Math.sqrt(hioptenusa);
     let perimetro = a+b+c;
     console.log (`El perimetro del triangulo es ${perimetro}`);
 }

 perimetroTriangulo(2,4);


// 7. Crear una función que reciba base y altura de un triángulo y nos muestre cuál es su área
function areaTriangulo (b,h){
    let area = (b*h)/2;

    console.log(`el area es ${area}`);
}

areaTriangulo(4,6);


// 8. Crear una función que reciba 2 números y me entregue el número más alto

function numeroMayor (a,b){
    if(a>b){
        console.log ('El numero mayor es ' + a);
    } else if (a<b){
        console.log ('El numero mayor es ' + b);
    } else if (a===b){
console.log('Los numeros son iguales');
    } else {
        console.log('opcion no valida');
    }
 }


// 9. Crear una función que reciba 2 números y me entregue el número más pequeño

// 10. Crear una función que reciba 3 strings y nos muestre cuál tiene más caracteres

// 11. Crear una función que reciba 1 número y me lo muestre al cubo

// 12. Crear una función que reciba una palabra y me muestre cuántas "a" contiene

// 13. Crear una función que reciba una palabra y la transforme a minúsculas

// 14. Crear una función que reciba una palabra y la transforme a mayúsculas

// 15. Crear una función que reciba un número del 0 al 5 y me muestre en la consola el valor del arreglo que tiene ese índice let array = ['a', 'b', 'c',' d', 'e', 'f']