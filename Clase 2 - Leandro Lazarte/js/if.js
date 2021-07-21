//Nombre y apellido
let ingresarNombre = prompt("Ingrese su nombre");
let ingresarApellido = prompt("Ingrese su apellido");

if ((ingresarNombre != "") && (ingresarApellido != "")) {
    alert("Nombre: " + ingresarNombre + "\nApellido: " + ingresarApellido);
} else {
    alert("Error: Ingrese por favor su Nombre y Apellido.");
}

//Edad
let ingresarEdad = prompt("Ingrese su edad");

if (ingresarEdad >= 18) {
    alert("Usted es mayor de 18 años y puede ingresar a este sitio.");
} else {
    alert("Usted no puede ingresar a este sitio por ser menor de edad.");
}