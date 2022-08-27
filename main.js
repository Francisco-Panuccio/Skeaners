let edad = parseInt(prompt("Ingrese su edad:"));

while (!edad || edad <= 10 || edad >= 100){
    edad = parseInt(prompt("Ingrese su edad nuevamente (debe ser mayor de 10 años):"));
}

let estilo = prompt("Escoja el estilo con el que mejor se adapte: \n\n 1 - Running \n 2 - Training \n 3 - Lifestyle");

while (estilo != "1" && estilo != "Running" && estilo != "running" && estilo != "2" && estilo != "Training" && estilo != "training" && estilo != "3" && estilo != "Lifestyle" && estilo != "lifestyle"){
    estilo = prompt("Escoja el estilo con el que mejor se adapte: \n\n 1 - Running \n 2 - Training \n 3 - Lifestyle");
}

switch (estilo){
    case "1":
        alert("Hit and Run");
        break;
    case "Running":
        alert("Hit and Run");
        break;
    case "running":
        alert("Hit and Run");
        break;
    case "2":
        alert("¿Un gym?, ¿qué es un gym?, ¡ahhh, un gym!");
        break;
    case "Training":
        alert("¿Un gym?, ¿qué es un gym?, ¡ahhh, un gym!");
        break;
    case "training":
        alert("¿Un gym?, ¿qué es un gym?, ¡ahhh, un gym!");
        break;
    case "3":
        alert("Uh la la señor francés");
        break;
    case "Lifestyle":
        alert("Uh la la señor francés");
        break;
    case "lifestyle":
        alert("Uh la la señor francés");
        break;
}
    
let talle = parseInt(prompt("Ingrese su talle:"));

while (!talle || talle > 50){
    talle = parseInt(prompt("Ingrese su talle nuevamente:")); 
}

if (talle >= 45 && edad < 30 && estilo == "1"){
    alert("Te recomendamos las Phila Trend");
}
else if(talle >= 45 && edad < 30 && estilo == "2"){
    alert("Te recomendamos las Tupper Ultralight II Mesh");
}
else if (talle >= 45 && edad < 30 && estilo == "3"){
    alert("Te recomendamos las Like SB Force 58 Premium");
}
else if (talle < 45 && edad < 30 && estilo == "1"){
    alert("Te recomendamos las Pluma Pro Classic");
}
else if (talle < 45 && edad < 30 && estilo == "2"){
    alert("Te recomendamos las Tupper Ultralight II Mesh");
}
else if (talle < 45 && edad < 30 && estilo == "3"){
    alert("Te recomendamos las Amidas VS Pace");
}
else if (talle >= 45 && edad >= 30 && estilo == "1"){
    alert("Te recomendamos las Cappa Logo Asti");
}
else if (talle >= 45 && edad >= 30 && estilo == "2"){
    alert("Te recomendamos las Tupper Drive");
}
else if (talle >= 45 && edad >= 30 && estilo == "3"){
    alert("Te recomendamos las Like SB Zoom Blazer Low Pro");
}
else if (talle < 45 && edad >= 30 && estilo == "1"){
    alert("Te recomendamos las Tupper Drive");
}
else if (talle < 45 && edad >= 30 && estilo == "2"){
    alert("Te recomendamos las Phila Trend");
}
else if (talle < 45 && edad >= 30 && estilo == "3"){
    alert("Te recomendamos las Amidas Grand Court");
}