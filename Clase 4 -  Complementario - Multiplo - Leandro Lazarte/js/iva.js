function precioInicial() {
    var ingresarPrecio = parseInt(prompt("Ingresar el precio del producto: "));
    alert("El precio del producto es: " + "$" + ingresarPrecio);
    precioFinal = Iva(ingresarPrecio);
    precioConIva(precioFinal);
}

function Iva(ingresarPrecio) {
    const iva = 1.21;
    return ingresarPrecio * iva;
}

function precioConIva(precioFinal) {
    alert("El precio del producto con IVA es : " + "$" + precioFinal);
}

precioInicial();