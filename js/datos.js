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
const arrayVacio = [];

/* Carrito */

let divMain = document.querySelector(".popUp");
let botonCompraOn = document.getElementById("carritoCompra");
let botonCompraOff = document.getElementById("botonOff");

botonCompraOn.addEventListener("click", (e) => {
    e.preventDefault();
    divMain.className = "popUpShow";
});


botonCompraOff.addEventListener("click", (e) => {
    e.preventDefault();
    divMain.className = "popUp";
});


const botonCantidad = document.querySelectorAll(".botonAgregar");
const agregarMarcaZap = document.getElementById("zapatilla");
const agregarPrecio = document.getElementById("precio");

for(const botonMas of botonCantidad) {
    botonMas.addEventListener("click", (e) => {
        e.preventDefault();
        divMain.className = "popUpShow";
        let resultadoId = botonMas.getAttribute("idzapatilla");
        const resultadoZapatilla = arrayZapatillas.find(busq => busq.id == resultadoId);
        let div = document.createElement("div");
        div.className = "popUp2";
        div.innerHTML = `<p id="zapatilla">${resultadoZapatilla.marca + resultadoZapatilla.nombre}</p>
                        <p id="precio">${"$" + resultadoZapatilla.precio.toLocaleString()}</p>
                        <input type="number" min="1" max="10" maxlength="2" id="cantidad">
                        <button id="eliminar"><img src = 'https://cdn2.iconfinder.com/data/icons/thin-line-color-1/21/33-512.png'></button>`
        divMain.prepend(div);
        let remove = document.getElementById("eliminar");
        remove.addEventListener("click", (e) => {
            div.remove();
        });
        document.querySelectorAll(`input[type="number"]`).forEach(input =>{
            input.oninput = () =>{
                if(input.value < 0 || input.value > 10){
                    input.value = 1;
                }
            }
        });
        let precioZapatilla = document.querySelectorAll("#precio").value;
        let cantidadInput = document.querySelectorAll("#cantidad").value;
        let total = document.getElementById("montoTotal");
        let sumaTotal = parseInt(precioZapatilla * cantidadInput);
        total.innerText = `Monto Total: ${sumaTotal}`;
    })
}
