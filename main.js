let edad = parseInt(prompt("Ingrese su edad:"));

while (edad <=10 || edad >= 100){
    edad = parseInt(prompt("Ingrese su edad nuevamente:"));   
}

console.log(edad, typeof edad);

let estilo = prompt("Escoja el estilo con el que mejor se adapte (running, training, lifestyle):");

while (estilo != "running" && estilo != "training" && estilo != "lifestyle"){
    estilo = prompt("Escoja el estilo con el que mejor se adapte (running, training, lifestyle):");
}

switch (estilo) {
    case "running":
        alert("Prosiga eligiendo su talle");
        break;
    case "training":
        alert("Prosiga eligiendo su talle");
        break;
    case "lifestyle":
        alert("Prosiga eligiendo su talle");
        break;
}
    
let talle = parseInt(prompt("Ingrese su talle:"));

while (talle > 50){
    talle = parseInt(prompt("Ingrese su talle nuevamente:")); 
}

if (talle > 45 && edad < 30 && estilo == "running"){
    alert("Te recomendamos las Phila Trend");
}
else if(talle > 45 && edad < 30 && estilo == "training"){
    alert("Te recomendamos las Tupper Ultralight II Mesh");
}
else if (talle > 45 && edad < 30 && estilo == "lifestyle"){
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
else if (talle > 45 && edad > 30 && estilo == "running"){
    alert("Te recomendamos las Cappa Logo Asti");
}
else if (talle > 45 && edad > 30 && estilo == "training"){
    alert("Te recomendamos las Tupper Drive");
}
else if (talle > 45 && edad > 30 && estilo == "lifestyle"){
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