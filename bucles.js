console.log("He cargado el fichero bucles.js");

// https://lenguajejs.com/javascript/dom/crear-elementos-dom/

// Voy a añadir un <p> al final del body
// let despedida = document.createElement("p");
// despedida.textContent = "¡Gracias por visitar nuestra Web!";
// despedida.style.color = "brown";

// let header = document.querySelector("header");
// header.appendChild(despedida);

// Voy a crear numGatos imagénes; y las voy añadir como hijos del footer
let gatito = document.createElement("img");
gatito.style.width = "50px";
gatito.src = "./img/logo.webp";

let footer = document.querySelector(".footer");

// Cómo haríamos un for para ejecutar este código tantas veces como numGatos
console.log("numGatos: ", numGatos);
for (let i = 0; i < numGatos; i++) {
    console.log("He entrado en el bucle!");

    gatito = document.createElement("img");
    gatito.style.width = "50px";
    gatito.src = "./img/logo.webp";

    footer.appendChild(gatito);
}


// Ejercicios Bucle y condicionales

// Ejercicio1: Si el número de gatos es 0; cambiar el texto por “No hay gatos por adoptar, felicidades!”

const mensajeAdopcion = document.querySelector("#mensaje-adopcion");

if (numGatos == 0) {
    mensajeAdopcion.textContent = "No hay gatos por adoptar, felicidades!";
}

// Ejercicio2: Fíjate que ahora en el código hay 3 variables booleanas. Muestra cada uno de los botones de “Contactar”, solo en función de si cada una de las chicas está disponible. Es decir, en esta configuración, el botón de "Verónica" debería desaparecer. Pista: piensa que propiedad de .style tienes que modificar para ocultar, mediante CSS, el botón de la chica correspoiente.



let patriciaDisponible = true;
let veronicaDisponible = false;
let edurneDisponible = true;

if (!patriciaDisponible) {
    let botonPatricia = document.querySelector(".card__patricia button");
    botonPatricia.style.display = "none";                       // simple
    // botonPatricia.style.backgroundColor = "red";
    // botonPatricia.textContent = "No disponible";             // too extra
    // botonPatricia.style.cssText += "pointer-events: none;";
}
if (!veronicaDisponible) {
    let botonVeronica = document.querySelector(".card__veronica button");
    botonVeronica.style.display = "none";                       // simple
    // botonVeronica.style.backgroundColor = "red";
    // botonVeronica.textContent = "No disponible";             // too extra
    // botonVeronica.style.cssText += "pointer-events: none;";
}
if (!edurneDisponible) {
    let botonEdurne = document.querySelector(".card__edurne button");
    botonEdurne.style.display = "none";                         // simple
    // botonEdurne.style.backgroundColor = "red";
    // botonEdurne.textContent = "No disponible";               // too extra
    // botonEdurne.style.cssText += "pointer-events: none;";
}
