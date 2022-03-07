alert("Hola te voy a pedir un número");
    let nEdades = Number(prompt("Ingresa la cantidad de familiares"));
        if(isNaN(nEdades)) {alert("Numero invalido, volver a empezar con tecla F5");}
    let nFamiliares = nEdades;
        var nombres = [];
        var edades = [];

        for (i = 0; i < nFamiliares; i = i++)
        { 
            nombres[i++] = prompt("Ingresa el nombre de tu familiar #" + i);
        }

        console.log(nombres);

        for (i = 0; i < nEdades; i++)
        {
            edades.push(parseInt((prompt(`Ingresa la edad de ${nombres[i]}`))));
        }

        console.log(edades);

    var newArray = nombres.map((e, i) => e + ", " + edades[i]);
    console.log(newArray);

        let sum = 0;
        for (let i = 0; i < edades.length; i++) {
        sum += edades[i];
        }
        console.log(sum);

        alert("La edad promedio es: " + (sum / nEdades));
        console.log(sum / nEdades);