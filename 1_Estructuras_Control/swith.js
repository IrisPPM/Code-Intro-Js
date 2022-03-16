let Animal = prompt("Escribe un animal y te dire el sonido que emite:")

switch(Animal) {
    case "gato":
         alert('miauuu')
        break;
    case "perro":
        alert("guau guau")
        break;
    case "vaca":
        alert("muuu")
        break;
    default:
        alert("wtf")
        break;
}