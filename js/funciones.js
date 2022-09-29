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
    traerArray();
}       

function indexDinamico(eligeMarca) {
    const zapatillasFiltradas = arrayZapatillas.filter(el => el.marca.includes(eligeMarca));
    sectionPrincipal.className = ("grilla_marcas");
    sectionPrincipal.innerHTML = "";
    zapatillasFiltradas.forEach(calzado => { 
        sectionPrincipal.innerHTML += crearVisualZapatilla(calzado);
    });
    const botonesCantidad = document.querySelectorAll(".botonAgregar");
    for(const botonCantidad of botonesCantidad) {
        botonCantidad.addEventListener("click", (e) => {
            divMain.className = "popUpShow";
            const identificador = zapatillasFiltradas.find(busc => busc.id == botonCantidad.id);
            agregarAlCarrito(identificador);
            botonCompraOn.addEventListener("click", () => {
                divMain.classList.toggle("popUp");
            });
        })
    }
}

function crearVisualZapatilla(calzado) {
    return `
            <div id="zapatilla${calzado.id}">
                <img src="/imagenes/${calzado.id}.png" class="imagenesZap">
                <p>${calzado.marca + calzado.nombre}</p>
                <br class="salto">
                <span class="precio">${"$" + calzado.precio.toLocaleString()}</span>
                <button class="botonAgregar" id="${calzado.id}">+</button>
            </div>
            `
}

function crearVisualCarrito(identificador) {
    let div = document.createElement("div");
    div.className = "popUp2";
    div.innerHTML = `
                    <p class="zapatilla">${identificador.marca + identificador.nombre}</p>
                    <p class="precio" id="precio">${"$" + identificador.precio.toLocaleString()}</p>
                    <input type="number" readonly value=${identificador.cantidad} class="cantidad" id="inputCantidad">
                    `
    let botonEliminar = document.createElement("button");
    botonEliminar.className = "eliminar";
    botonEliminar.innerHTML = `<img src = "../imagenes/bin.png">`
    div.appendChild(botonEliminar);
    divMain.prepend(div);
    botonEliminar.addEventListener("click", () => {
        div.remove();
        const indiceArrayClientes = arrayCarrito.indexOf(identificador);
        arrayCarrito.splice(indiceArrayClientes,1);
        calcularTotal();
        localStorage.setItem("Zapatillas", JSON.stringify(arrayCarrito));
    })
    calcularTotal();
}

function agregarAlCarrito(identificador) {
    const zapatillasEnCarrito = arrayCarrito.find((zap) => zap.id == identificador.id);
    if(zapatillasEnCarrito) {
        identificador.cantidad++;
        const input = document.getElementById("inputCantidad");
        input.value++;
        calcularTotal();
    }
    else {
        arrayCarrito.push(identificador);
        crearVisualCarrito(identificador);
    }
    localStorage.setItem("Zapatillas", JSON.stringify(arrayCarrito));
}

function calcularTotal() {
    let total = 0;
    arrayCarrito.forEach(calzado => {
        total += calzado.precio * calzado.cantidad;
    })
    totalFinal.innerHTML = "$" + total.toLocaleString();
}

function traerArray() {
    let compraPreviaString = localStorage.getItem("Zapatillas");
    let compraPreviaLista = compraPreviaString ? JSON.parse(localStorage.getItem("Zapatillas")) : [];
    compraPreviaLista.forEach(zapatilla => {
        arrayCarrito.push(zapatilla);
        crearVisualCarrito(zapatilla);
    })
}
