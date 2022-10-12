/* Zapatillas */

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
const compraExitosa = document.getElementById("botonCompra");

botonCompraOn.addEventListener("click", () => {
    divMain.classList.toggle("popUpShow");
});

botonCompraOff.addEventListener("click", () => {
    divMain.className = "popUp";
});

indexPrincipal();