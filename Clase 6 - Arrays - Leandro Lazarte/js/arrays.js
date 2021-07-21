//Array productos con descuento
var monitores = ["Gigabyte", "LG", "Samsung"];
var grafica = ["Asus", "Zotac", "MSI"];
var teclado = ["Logitech", "Corsair", "Razer"];

alert("Monitores en descuento");
for (let i = 0; i < monitores.length; i++) {
    alert(monitores[i]);
}



alert("Tarjetas Gráficas en descuento");
for (let i = 0; i < grafica.length; i++) {
    alert(grafica[i]);
}

alert("Teclados en descuento");
for (let i = 0; i < teclado.length; i++) {
    alert(teclado[i]);
}



//Carrito
alert("Bienvenidos a Hardware Place\n Pulse enter para ver nuestros productos");
alert("Estos son nuestros productos: \nMonitores: \n1- Monitor Gigabyte 240Hz.\n 2- Monitor LG 144 Hz.\n 3- Monitor Samsung 60 Hz.");
alert("Estos son nuestros productos: \nGráficas: \n1- Grafica RTX 3080\n 2- Grafica XT 5700\n 3- Grafica RX 5600\n")
alert("Estos son nuestros productos: \nTeclados: \n1- Básico\n 2- Semi-mecanico\n 3- Mecanico")

var carrito = []; //array vacio
while (true) {
    var productos = prompt("Ingrese los productos que desea comprar \n");
    if (productos == "") break;
    carrito.push(productos)
    alert("Se ha añadido al carrito: " + productos);
}

while (true) {
    var finalizar = prompt("Pulse enter para finalizar la compra o pulse d + enter para eliminar un producto");
    if (finalizar == "") break;
    carrito.pop(productos)
    alert("Se elimino el ultimo producto añadido al carrito");
}