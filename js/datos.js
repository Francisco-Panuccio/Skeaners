/* Zapatillas */

class Zapatilla {
    constructor(id, marca, nombre, precio, cantidad){
        this.id = id;
        this.marca = marca;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

const zapatilla1 = new Zapatilla (1, "Amidas ", "VS Pace ", 8000, 1);
const zapatilla2 = new Zapatilla (2, "Amidas ", "Grant Court ", 12000, 1);
const zapatilla3 = new Zapatilla (3, "Amidas ", "Forum Low ", 20000, 1);
const zapatilla4 = new Zapatilla (4, "Amidas ", "Solarcontrol ", 25000, 1);
const zapatilla5 = new Zapatilla (5, "Like ", "SB Zoom Blazer Low Pro GT ", 15000, 1);
const zapatilla6 = new Zapatilla (6, "Like ", "SB Force 58 Premium ", 12000, 1);
const zapatilla7 = new Zapatilla (7, "Like ", "SB Force 58 ", 9000, 1);
const zapatilla8 = new Zapatilla (8, "Like ", "Air Zoom Pulse Pulse 58 Premium ", 18000, 1);
const zapatilla9 = new Zapatilla (9, "Phila ", "Trend 2.0 ", 6000, 1);
const zapatilla10 = new Zapatilla (10, "Phila ", "Novaro ", 10000, 1);
const zapatilla11 = new Zapatilla (11, "Pluma ", "Pro Classic ", 15000, 1);
const zapatilla12 = new Zapatilla (12, "Pluma ", "PI Speedfusion ", 18000, 1);
const zapatilla13 = new Zapatilla (13, "Tupper ", "Drive ", 8000, 1);
const zapatilla14 = new Zapatilla (14, "Tupper ", "Ultralight II Mesh ", 5700, 1);
const zapatilla15 = new Zapatilla (15, "Cappa ", "Logo Asti ", 6700, 1);
const zapatilla16 = new Zapatilla (16, "Cappa ", "Falvo ", 8000, 1);

const arrayZapatillas = [zapatilla1, zapatilla2, zapatilla3, zapatilla4, zapatilla5, zapatilla6, zapatilla7, zapatilla8, zapatilla9, zapatilla10, zapatilla11, zapatilla12, zapatilla13, zapatilla14, zapatilla15, zapatilla16];
const arrayCarrito = [];

/* Index Dinámico */

const home = document.getElementById("home");
const amida = document.getElementById("amida");
const cappa = document.getElementById("cappa");
const like = document.getElementById("like");
const phila = document.getElementById("phila");
const pluma = document.getElementById("pluma");
const tupper = document.getElementById("tupper");
const mainPrincipal = document.getElementById("mainPrincipal");

const sectionPrincipal = document.createElement("section");
mainPrincipal.appendChild(sectionPrincipal);

home.addEventListener("click", (e) => {
    e.preventDefault();
    indexPrincipal();
});

amida.addEventListener("click", (e) => {
    e.preventDefault();
    indexDinamico("Amidas");
});

cappa.addEventListener("click", (e) => {
    e.preventDefault();
    indexDinamico("Cappa");
});

like.addEventListener("click", (e) => {
    e.preventDefault();
    indexDinamico("Like");
});

phila.addEventListener("click", (e) => {
    e.preventDefault();
    indexDinamico("Phila");
});

pluma.addEventListener("click", (e) => {
    e.preventDefault();
    indexDinamico("Pluma");
});

tupper.addEventListener("click", (e) => {
    e.preventDefault();
    indexDinamico("Tupper");
});

/* Carrito */

let divMain = document.querySelector(".popUp");
let botonCompraOn = document.getElementById("carritoCompra");
let botonCompraOff = document.getElementById("botonOff");
const totalCompra = document.getElementById("totalFinal");

botonCompraOn.addEventListener("click", () => {
    divMain.classList.toggle("popUpShow");
});

botonCompraOff.addEventListener("click", () => {
    divMain.className = "popUp";
});

indexPrincipal();