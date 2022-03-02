// Mi idea era generar una calculadora de edad promedio de una familia, 
// pero decidi ir por una familia de 4 por la dificultad de generarlo para cualquier familia
alert("Hola, voy a calcular el promedio de edad una familia de 4 personas!");
let nEdades = 4;

// Funciona de tal manera que le pido al usuario las 4 Edades, por separado
// Logueo en consola la respuesta, y en caso de no ingresar un numero, invito al usuario a reiniciar con F5
// Este proceso repetido 4 veces
var edad1 = Number(prompt("1. Ingresa la primera edad"));
    console.log("Primera edad = " + edad1);
        if(isNaN(edad1)) {alert("Numero invalido, volver a empezar con tecla F5");}

var edad2 = Number(prompt("2. Ingresa la segunda edad"));
    console.log("Segunda edad = " + edad2);
        if(isNaN(edad2)) {alert("Numero invalido, volver a empezar con tecla F5");}

var edad3 = Number(prompt("3. Ingresa la tercera edad"));
    console.log("Tercera edad = " + edad3);
        if(isNaN(edad3)) {alert("Numero invalido, volver a empezar con tecla F5");}

var edad4 = Number(prompt("4. Ingresa la cuarta edad"));
    console.log("Cuarta edad = " + edad4);
        if(isNaN(edad4)) {alert("Numero invalido, volver a empezar con tecla F5");}

// Al final, tomo las 4 Edades, las sumo, y luego las divido por 4 para generar el promedio de edad
// Y logueo todo en consola, y por alert le doy al promedio al usuario
sum = edad1 + edad2 + edad3 + edad4;
console.log(sum / nEdades);
alert("El promedio de edad esta familia es " + (sum / nEdades));

