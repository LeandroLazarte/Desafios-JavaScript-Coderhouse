//Carrito
alert("Bienvenidos a Hardware Place :)");
//Lista de productos
alert("Estos son nuestros productos: \nMonitores: \n1- Monitor Gigabyte 240Hz.\n 2- Monitor LG 144 Hz.\n 3- Monitor Samsung 60 Hz.");

var carrito = []; //array vacio

while (true) {
    var productos = prompt("Ingrese los productos que desea comprar");
    if (productos == "") break;
    carrito.push(productos)
    alert("Se ha añadido al carrito: " + productos);
    document.getElementById('productos-item').innerHTML = `<h2>Se ha añadido ${productos} al carrito</h2>`;

}