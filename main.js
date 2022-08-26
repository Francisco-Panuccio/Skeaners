let edad = parseInt(prompt("Ingrese su edad:"));

while (edad <=10 || edad >= 100){
    edad = parseInt(prompt("Ingrese su edad nuevamente:"));   
}

let estilo = prompt("Escoja el estilo con el que mejor se adapte (running, training, lifestyle):");

while (estilo != "running" && estilo != "training" && estilo != "lifestyle"){
    estilo = prompt("Escoja el estilo con el que mejor se adapte (running, training, lifestyle):");
}

switch (estilo) {
    case "running":
        alert("Hit and Run");
        break;
    case "training":
        alert("¿Un gym?, ¿qué es un gym?, ¡ahhh, un gym!");
        break;
    case "lifestyle":
        alert("Uh la la señor francés");
        break;
}
    
let talle = parseInt(prompt("Ingrese su talle:"));

while (talle > 50){
    talle = parseInt(prompt("Ingrese su talle nuevamente:")); 
}

if (talle >= 45 && edad < 30 && estilo == "running"){
    alert("Te recomendamos las Phila Trend");
}
else if(talle >= 45 && edad < 30 && estilo == "training"){
    alert("Te recomendamos las Tupper Ultralight II Mesh");
}
else if (talle >= 45 && edad < 30 && estilo == "lifestyle"){
    alert("Te recomendamos las Like SB Force 58 Premium");
}
else if (talle < 45 && edad < 30 && estilo == "running"){
    alert("Te recomendamos las Pluma Pro Classic");
}
else if (talle < 45 && edad < 30 && estilo == "training"){
    alert("Te recomendamos las Tupper Ultralight II Mesh");
}
else if (talle < 45 && edad < 30 && estilo == "lifestyle"){
    alert("Te recomendamos las Amidas VS Pace");
}
else if (talle >= 45 && edad > 30 && estilo == "running"){
    alert("Te recomendamos las Cappa Logo Asti");
}
else if (talle >= 45 && edad > 30 && estilo == "training"){
    alert("Te recomendamos las Tupper Drive");
}
else if (talle >= 45 && edad > 30 && estilo == "lifestyle"){
    alert("Te recomendamos las Like SB Zoom Blazer Low Pro");
}
else if (talle < 45 && edad > 30 && estilo == "running"){
    alert("Te recomendamos las Tupper Drive");
}
else if (talle < 45 && edad > 30 && estilo == "training"){
    alert("Te recomendamos las Phila Trend");
}
else if (talle < 45 && edad > 30 && estilo == "lifestyle"){
    alert("Te recomendamos las Amidas Grand Court");
}