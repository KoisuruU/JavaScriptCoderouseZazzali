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

    var newArray = nombres.map((e, i) => " " + e + ": " + edades[i]);
    console.log(newArray);

        let sum = 0;
        for (let i = 0; i < edades.length; i++) 
            {sum += edades[i];}
        console.log(sum);

        alert("La edad promedio es: " + (sum / nEdades));
        console.log(sum / nEdades);

// LA PARTE DE DOM 
    let infoFamilia = document.querySelector("#infoFamilia");
    infoFamilia.innerHTML = 
    `<div>
    <p>Las edades de tu familia son: ${newArray} </p>
    <p>La suma de las edades de tu familia es: ${sum}</p>
    </div>`
// LA PARTE DE DOM 


// LA PARTE DE EVENTOS 
let btn = document.createElement("button");
btn.innerHTML = "Mostrame el promedio de edad!";
btn.onclick = function calculoPromedio() 
    {
        let showPromedio = document.createElement("p");
        showPromedio.innerHTML = `${sum/nEdades}`;
        document.body.appendChild(showPromedio);
        btn.onclick = null;
    }
document.body.appendChild(btn);
// LA PARTE DE EVENTOS 





/* <p>El Promedio de edad de tu familia es: ${sum/nEdades}</p>  */


// let boton = document.createElement("btnPromedio");
//     boton.onclick = () => {document.createElement("p"); boton.innerHTML = "Clickeame!"; document.body.appendChild(boton)} 
