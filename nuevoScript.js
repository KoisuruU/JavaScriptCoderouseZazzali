
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

        console.log(sum / nEdades);



// LA PARTE DE DOM 
    let infoFamilia = document.querySelector("#infoFamilia");
    infoFamilia.innerHTML = 
    `<div>
    <p>Tu familia está compuesta por: ${newArray} </p>
    <p>La suma de las edades es: ${sum}</p>
    </div>`
// LA PARTE DE DOM 


// LA PARTE DE EVENTOS 
// Lo que hace esto es crea un boton en HTML, le agrega un texto para indicar al usuario su funcion
// Al tocarse el boton, crea un <p> en el que se va a calcular y luego imprimir el resultado de promedio de edad
// Para terminar, se desactiva el boton para que no imprima al infinito si uno clickea mas veces
let btn = document.createElement("button");
btn.innerHTML = "Mostrame el promedio de edad!";
btn.onclick = function calculoPromedio() 
    {
        let showPromedio = document.createElement("p");
        showPromedio.innerHTML = `${sum/nEdades}`;
        document.body.appendChild(showPromedio);
        btn.onclick = null;
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `El promedio de edad de tu familia es: ${sum/nEdades}`,
            showConfirmButton: true,
        })
    }
document.body.appendChild(btn);
// LA PARTE DE EVENTOS ^

// La parte de Fetch 

// fetch("data.json")
// .then(res => res.json())
// .then(data => console.log(data))

fetch('data.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            var mainContainer = document.getElementById("myData");
            for (var i = 0; i < data.length; i++) {
                var div = document.createElement("div");
                div.innerHTML = 'Nombre: ' + data[i].nombre + ', ' + data[i].edad;
                mainContainer.appendChild(div);
            }
        }
















/* <p>El Promedio de edad de tu familia es: ${sum/nEdades}</p>  */


// let boton = document.createElement("btnPromedio");
//     boton.onclick = () => {document.createElement("p"); boton.innerHTML = "Clickeame!"; document.body.appendChild(boton)} 
