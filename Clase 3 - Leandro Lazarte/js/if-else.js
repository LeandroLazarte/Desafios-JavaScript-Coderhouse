//For
let ingresarNum = parseInt(prompt("Bienvenido, ingrese un numero:  "));
for (let i = 5; i <= 15; i++) {
    let resultado = ingresarNum + i;
    alert(ingresarNum + " + " + i + " = " + resultado);
}

//While
var i = 0;

while (i <= 5) {
    alert("El valor de i es =  " + i);
    i++;
}

//Do While
var i = 0;
respuesta = "s";

do {
    if (respuesta == "s") {
        alert("El valor de i es =" + i);
    } else if (respusta != "s") {
        break;
    }
    respuesta = prompt("¿Desea continuar? (s/n)");
} while (true);