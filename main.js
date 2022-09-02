class Zapatilla {
    constructor(marca, nombre, precio){
        this.marca = marca;
        this.nombre = nombre;
        this.precio = precio;
    }

    pasarDatos(){
        return (this.marca + this.nombre + "por $" + this.precio.toLocaleString());
    }
}

const amidas1 = new Zapatilla ("Amidas ", "VS Pace ", 8000);
const amidas2 = new Zapatilla ("Amidas ", "Grant Court ", 12000);
const amidas3 = new Zapatilla ("Amidas ", "Forum Low ", 20000);
const amidas4 = new Zapatilla ("Amidas ", "Solarcontrol ", 25000);
const like1 = new Zapatilla ("Like ", "SB Zoom Blazer Low Pro GT ", 15000);
const like2 = new Zapatilla ("Like ", "SB Force 58 Premium ", 12000);
const like3 = new Zapatilla ("Like ", "SB Force 58 ", 9000);
const like4 = new Zapatilla ("Like ", "Air Zoom Pulse ", 18000);
const phila1 = new Zapatilla ("Phila ", "Trend ", 6000);
const phila2 = new Zapatilla ("Phila ", "Novaro ", 10000);
const pluma1 = new Zapatilla ("Pluma ", "Pro Classic ", 15000);
const pluma2 = new Zapatilla ("Pluma ", "PI Speedfusion ", 18000);
const tupper1 = new Zapatilla ("Tupper ", "Drive ", 8000);
const tupper2 = new Zapatilla ("Tupper ", "Ultralight II Mesh ", 5700);
const cappa1 = new Zapatilla ("Cappa ", "Logo Asti ", 6700);
const cappa2 = new Zapatilla ("Cappa ", "Falvo ", 8000);

let edad = parseInt(prompt("Ingrese su edad:"));

while (!edad || edad <= 10 || edad >= 100){
    edad = parseInt(prompt("Ingrese su edad nuevamente (debe ser mayor de 10 años):"));
}

let talle = parseInt(prompt("Ingrese su talle:"));

while (!talle || talle <30 || talle > 50){
    talle = parseInt(prompt("Ingrese su talle nuevamente:")); 
}

let estilo = prompt("Escoja el estilo con el que mejor se adapte: \n\n 1 - Running \n 2 - Training \n 3 - Lifestyle");

while (estilo != "1" && estilo != "Running" && estilo != "running" && estilo != "2" && estilo != "Training" && estilo != "training" && estilo != "3" && estilo != "Lifestyle" && estilo != "lifestyle"){
    estilo = prompt("Escoja el estilo con el que mejor se adapte: \n\n 1 - Running \n 2 - Training \n 3 - Lifestyle");
}

if (estilo == "1" || estilo == "Running" || estilo == "running"){
    opcion_1();
}
else if (estilo == "2" || estilo == "Training" || estilo == "training"){
    opcion_2();
}
else if (estilo == "3" || estilo == "Lifestyle" || estilo == "lifestyle"){
    opcion_3();
}

function opcion_1() {
    alert("Hit and Run");
    if (talle >= 45 && edad < 30){
        recomendacion(phila1);
    }
    else if (talle < 45 && edad < 30){
        recomendacion(pluma1);
    }
    else if (talle >= 45 && edad >= 30){
        recomendacion(cappa1);
    }
    else if (talle < 45 && edad >= 30){
        recomendacion(tupper1);
    }
}

function opcion_2() {
    alert("¿Un gym?, ¿qué es un gym?, ¡ahhh, un gym!");
    if (talle >= 45 && edad < 30){
        recomendacion(tupper2);
    }
    else if (talle < 45 && edad < 30){
        recomendacion(tupper2);
    }
    else if (talle >= 45 && edad >= 30){
        recomendacion(tupper1);
    }
    else if (talle < 45 && edad >= 30){
        recomendacion(phila1);
    }
}

function opcion_3() {
    alert("Uh la la señor francés");
    if (talle >= 45 && edad < 30){
        recomendacion(like2);
    }
    else if (talle < 45 && edad < 30){
        recomendacion(amidas1);
    }
    else if (talle >= 45 && edad >= 30){
        recomendacion(like1);
    }
    else if (talle < 45 && edad >= 30){
        recomendacion(amidas2);
    }
}

let comprar = prompt("¿Desea comprar el producto?: (Si) / (No)");

while (comprar != "si" && comprar != "SI" && comprar != "Si" && comprar != "no" && comprar != "NO" && comprar != "No"){
    comprar = prompt("¿Desea comprar el producto?: (Si) / (No)");
}
 
if (comprar == "Si" || comprar == "SI" || comprar == "si"){
    alert("Compra realizada exitosamente");
}

if (comprar == "No" || comprar == "NO" || comprar == "no"){
    alert("¡Gracias, vuelva prontos!");
}

function recomendacion (calzado) {
    alert("Te recomendamos las " + calzado.pasarDatos());
}

