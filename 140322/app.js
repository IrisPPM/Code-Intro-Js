//Dado un arreglo de calificaciones obtener la calificación máxima, mínima y promedio
//*Nota: sólo con for, no se vale usar funciones que ya existan



let calificaciones = [ 5, 6, 7, 8, 9, 10];

let minima = 1;
let maxima;
let promedio = (maxima + minima)/2;


for (let i = 0; i <= calificaciones.length; i++){

    if (calificaciones[i] <= minima){
        minima = calificaciones [i];
        console.log('La calificacion menor es ' + minima);
        
    } else if (calificaciones[i] > minima) {
        console.log('hola');
    }


    




}


let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
let mayor = -9999;

for (let i = 0; i <= numeros.length; i++){
    
    if(numeros[i] >= mayor ){
        mayor = numeros[i];
    }



}


console.log ('El mayor numero es: ' + mayor)




//Con ayuda de los ciclos, imprimir la serie Fibonacci 0,1,1,2,3,5,8,13,21,...
//*puedes poner un tope de cuántos elementos de la serie quieres 

