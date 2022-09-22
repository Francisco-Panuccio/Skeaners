/* Sucursales */

class Sucursales {
    constructor(id, provincia, ciudad, direccion){
        this.id = id;
        this.provincia = provincia;
        this.ciudad = ciudad;
        this.direccion = direccion;
    }
}

const lanus = new Sucursales(1, "Buenos Aires", "Lanus", "25 de Mayo al 150");
const avellaneda = new Sucursales(2, "Buenos Aires", "Avellaneda", "Alsina al 122");
const quilmes = new Sucursales(3, "Buenos Aires", "Quilmes", "Alvear al 557");
const pompeya = new Sucursales(4, "Buenos Aires", "Nueva Pompeya", "Av. Sáenz al 1200");
const carlos_paz = new Sucursales(5, "Cordoba", "Villa Carlos Paz", "Las Heras al 280");

const arraySucursales = [lanus, avellaneda, quilmes, pompeya, carlos_paz];

/* Zapatillas */

class Zapatilla {
    constructor(id, marca, nombre, precio){
        this.id = id;
        this.marca = marca;
        this.nombre = nombre;
        this.precio = precio;
    }

    pasarDatos(){
        return (this.marca + this.nombre + "por $" + this.precio.toLocaleString());
    }
}

const amidas1 = new Zapatilla (1, "Amidas ", "VS Pace ", 8000);
const amidas2 = new Zapatilla (2, "Amidas ", "Grant Court ", 12000);
const amidas3 = new Zapatilla (3, "Amidas ", "Forum Low ", 20000);
const amidas4 = new Zapatilla (4, "Amidas ", "Solarcontrol ", 25000);
const like1 = new Zapatilla (5, "Like ", "SB Zoom Blazer Low Pro GT ", 15000);
const like2 = new Zapatilla (6, "Like ", "SB Force 58 Premium ", 12000);
const like3 = new Zapatilla (7, "Like ", "SB Force 58 ", 9000);
const like4 = new Zapatilla (8, "Like ", "Air Zoom Pulse Pulse 58 Premium ", 18000);
const phila1 = new Zapatilla (9, "Phila ", "Trend 2.0 ", 6000);
const phila2 = new Zapatilla (10, "Phila ", "Novaro ", 10000);
const pluma1 = new Zapatilla (11, "Pluma ", "Pro Classic ", 15000);
const pluma2 = new Zapatilla (12, "Pluma ", "PI Speedfusion ", 18000);
const tupper1 = new Zapatilla (13, "Tupper ", "Drive ", 8000);
const tupper2 = new Zapatilla (14, "Tupper ", "Ultralight II Mesh ", 5700);
const cappa1 = new Zapatilla (15, "Cappa ", "Logo Asti ", 6700);
const cappa2 = new Zapatilla (16, "Cappa ", "Falvo ", 8000);

const arrayZapatillas = [amidas1, amidas2, amidas3, amidas4, like1, like2, like3, like4, phila1, phila2, pluma1, pluma2, tupper1, tupper2, cappa1, cappa2];
const arrayCarrito = [];
const arrayMultiplicacion = [];

/* if(localStorage.getItem("precios")) {
    let traerMult = JSON.parse(localStorage.getItem("precios"));
    for(let i = 0; i < traerMult.length; i++) {
        arrayMultiplicacion.push(traerMult[i])
        crearVisual(traerCarrito[i]);
    }
} */

/* Carrito */

let divMain = document.querySelector(".popUp");
let botonCompraOn = document.getElementById("carritoCompra");
let botonCompraOff = document.getElementById("botonOff");
const botonCantidad = document.querySelectorAll(".botonAgregar");
let total = document.getElementById("montoTotal");

botonCompraOn.addEventListener("click", (e) => {
    e.preventDefault();
    divMain.classList.toggle("popUpShow");
});

botonCompraOff.addEventListener("click", (e) => {
    e.preventDefault();
    divMain.className = "popUp";
});

for(const botonMas of botonCantidad) {
    botonMas.addEventListener("click", (e) => {
        e.preventDefault();
        divMain.className = "popUpShow";
        const resultadoId = botonMas.getAttribute("idzapatilla");
        const resultadoZapatilla = arrayZapatillas.find(busq => busq.id == resultadoId);
        const zapatillaEnCarrito = arrayCarrito.find(nomb => nomb.id == resultadoId);
        const elementoInput = document.getElementById(`cantidad_${resultadoZapatilla.id}`);
        if (zapatillaEnCarrito){
            if(elementoInput.value < 10){
                elementoInput.value++;
            }
        }
        else {
            arrayCarrito.unshift(resultadoZapatilla);
            crearVisual(resultadoZapatilla);
        }
        agregarCantidad(resultadoZapatilla);
        /* const carritoJSON = localStorage.setItem("objetos",JSON.stringify(arrayMultiplicacion));
        const multiplicacionJSON = localStorage.setItem("precios",JSON.stringify(arrayMultiplicacion)); */
    })
} 

/* if(localStorage.getItem("objetos")) {
    let traerCarrito = JSON.parse(localStorage.getItem("objetos"));
    for(let i = 0; i < traerCarrito.length; i++) {
        arrayCarrito.push(traerCarrito[i]);
        crearVisual(traerCarrito[i]);
    }
} */

function agregarCantidad(zapatillaEnCarrito) {
    arrayMultiplicacion.push(zapatillaEnCarrito.precio);
    const sumaTotal = arrayMultiplicacion.reduce((a,b) => a + b);
    total.innerText = `Monto Total: ${"$" + sumaTotal.toLocaleString()}`;
}

function eliminarCantidad(zapatillaEnCarrito) {
    const indiceArrayMultiplicacion = arrayMultiplicacion.indexOf(zapatillaEnCarrito.precio);
    const eliminados = arrayMultiplicacion.splice(indiceArrayMultiplicacion);
    const diferencia = (eliminados.reduce((a,b) => a + b));
}

function crearVisual(resultadoZapatilla) {
    let div = document.createElement("div");
    div.className = "popUp2";
    div.innerHTML = `<p class="zapatilla" id="zapatilla_${resultadoZapatilla.id}">${resultadoZapatilla.marca + resultadoZapatilla.nombre}</p>
                    <p class="precio" id="precio_${resultadoZapatilla.id}">${"$" + resultadoZapatilla.precio.toLocaleString()}</p>
                    <input type="text" min=1 max=10 readonly value=1 class="cantidad" id="cantidad_${resultadoZapatilla.id}">`
    let botonEliminar = document.createElement("button");
    botonEliminar.className = "eliminar";
    botonEliminar.innerHTML = `<img src = "../imagenes/bin.png">`;
    div.appendChild(botonEliminar);
    divMain.prepend(div);
    botonEliminar.addEventListener("click", (e) => {
        e.preventDefault();
        div.remove();
        const indiceArrayCarrito = arrayCarrito.indexOf(resultadoZapatilla);
        arrayCarrito.splice(indiceArrayCarrito);
        eliminarCantidad(resultadoZapatilla);
    });
}