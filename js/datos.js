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

function indexPrincipal() {
    sectionPrincipal.className = ("grilla_inicial");
    let principal = "";
    principal += `
                <div><img src="./imagenes/1.png" alt="Amidas VS Pace"><p>Amidas VS Pace</p></div>
                <div><img src="./imagenes/2.png" alt="Amidas Grand Court"><p>Amidas Grand Court</p></div>
                <div><img src="./imagenes/5.png" alt="Like SB Zoom Blazer Low Pro"><p>Like SB Zoom <br class="br_especial"> Blazer Low Pro GT</p></div>
                <div><img src="./imagenes/6.png" alt="Like SB Force 58 Premium"><p>Like SB Force <br> 58 Premium</p></div>
                <div><img src="./imagenes/9.png" alt="Phila Trend"><p>Phila Trend</p></div>
                <div><img src="./imagenes/11.png" alt="Pluma Pro Classic"><p>Pluma Pro Classic</p></div>
                <div><img src="./imagenes/15.png" alt="Cappa Logo Asti"><p>Cappa Logo Asti</p></div>
                <div><img src="./imagenes/13.png" alt="Tupper Drive"><p>Tupper Drive</p></div>
                <div><img src="./imagenes/14.png" alt="Tupper Ultralight II Mesh"><p>Tupper Ultralight <br> II Mesh</p></div>
                `
    sectionPrincipal.innerHTML = principal;
}       

function indexDinamico(eligeMarca) {
    const zapatillasFiltradas = arrayZapatillas.filter(el => el.marca.includes(eligeMarca));
    sectionPrincipal.className = ("grilla_marcas");
    let borrador = "";
    zapatillasFiltradas.forEach(calzado => { 
         borrador += `
                    <div id="zapatilla${calzado.id}">
                        <img class="fotosZapatillas" src="/imagenes/${calzado.id}.png">
                        <p>${calzado.marca + calzado.nombre}</p>
                        <br class="precio">
                        <span>${calzado.precio}</span>
                        <button class="botonAgregar" id="boton${calzado.id}"></button>
                    </div>
                    `
        sectionPrincipal.innerHTML = borrador;  
        const botonCantidad = document.getElementById(`boton${calzado.id}`);
        botonCantidad.addEventListener("click", () => {
            divMain.className = "popUpShow";
            agregarAlCarrito(calzado.id);
        })
    }) 
}

function crearVisualCarrito(buscarZapatilla) {
    let div = document.createElement("div");
    div.className = "popUp2";
    div.innerHTML = `
                    <p class="zapatilla">${buscarZapatilla.marca + buscarZapatilla.nombre}</p>
                    <p class="precio" id="precio">${"$" + buscarZapatilla.precio.toLocaleString()}</p>
                    <input type="number" min=1 max=10 readonly value=1 class="cantidad">${buscarZapatilla.cantidad}
                    <button onClick = "botonEliminar(${buscarZapatilla.id})" class="eliminar"><img src = "../imagenes/bin.png"></button>
                    `
    divMain.prepend(div);
    calcularTotal();
}

function botonEliminar() {
    const hallarZapatilla = arrayCarrito.find(producto => producto.id === id);
    arrayCarrito.splice(arrayCarrito.indexOf(hallarZapatilla),1);
    crearVisualCarrito(buscarZapatilla);
}

function calcularTotal() {
    let total = 0;
    arrayCarrito.forEach(calzado => {
        total += arrayCarrito.precio * arrayCarrito.cantidad;
    })
    totalFinal.innerHTML = total;
}

function agregarAlCarrito(id) {
    const buscarZapatilla = arrayZapatillas.find(busc => busc.id === id);
    const zapatillasEnCarrito = arrayCarrito.find(busc => busc.id === id);
    if(zapatillasEnCarrito) {
        zapatillasEnCarrito.cantidad++;
    }
    else {
        arrayCarrito.push(buscarZapatilla);
        crearVisualCarrito(buscarZapatilla);
    }
}

indexPrincipal();

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

botonCompraOn.addEventListener("click", (e) => {
    e.preventDefault();
    divMain.classList.toggle("popUpShow");
});

botonCompraOff.addEventListener("click", (e) => {
    e.preventDefault();
    divMain.className = "popUp";
});
