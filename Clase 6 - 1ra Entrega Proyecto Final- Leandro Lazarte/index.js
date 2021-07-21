//Bienvenida al usuario
alert("Bienvenidos a Hardware Place :)");
//Lista de productos
alert("Estos son nuestros productos: \nMonitores: \n1- Monitor Gigabyte 240Hz.\n 2- Monitor LG 144 Hz.\n 3- Monitor Samsung 60 Hz.");
alert("Estos son nuestros productos: \nGráficas: \n4- Grafica Zotac RTX 3070\n 5- Grafica RTX 3080\n 6- Grafica RTX 3090\n");
alert("Estos son nuestros productos: \nTeclados: \n7- Teclado Asus TUF Gaming \n 8- Teclado AsusLogitech G413\n 9- Teclado Hyper X Alloy");

//Función de entrada y salida
function respuesta() {
    let mensajeDos = (prompt("Eliga el producto que desea añadir al carrito."));
    if (mensajeDos == 1) {
        alert("Se ha añadido, monitor Gigabyte 240Hz al carrito.");
        alert("Especificaciones Monitor Gigabyte 240Hz");
        monitorGigabyte240hz.mostrarMonitor();
        document.getElementById('item-producto').innerHTML = `<h2>Se ha añadido, monitor Monitor Gigabyte 240Hz al carrito</h2>`
    } else if (mensajeDos == 2) {
        alert("Se ha añadido, monitor LG 144Hz al carrito.");
        alert("Especificaciones de Monitor LG 144Hz");
        monitorLg144hz.mostrarMonitor();
        document.getElementById('item-producto').innerHTML = `<h2>Se ha añadido, monitor LG 144Hz al carrito</h2>`
    } else if (mensajeDos == 3) {
        alert("Se ha añadido, monitor Samsung 60Hz al carrito.");
        alert("Especificaciones Monitor Samsung 60Hz");
        monitorSamsung60Hz.mostrarMonitor();
        document.getElementById('item-producto').innerHTML = `<h2>Se ha añadido, monitor Samsung 60Hz al carrito</h2>`
    } else if (mensajeDos == 4) {
        alert("Se ha añadido, Gráfica Zotac RTX 3070 al carrito.");
        alert("Especificaciones Gráfica Zotac RTX 3070")
        GraficaZotacRTX3070.mostrarGrafica();
        document.getElementById('item-producto').innerHTML = `<h2>Se ha añadido, Gráfica Zotac RTX 3070 al carrito</h2>`
    } else if (mensajeDos == 5) {
        alert("Se ha añadido, Gráfica MSI RTX 3080 al carrito.");
        alert("Especificaciones Gráfica MSI RTX 3080");
        GraficaMSIRTX3080.mostrarGrafica();
        document.getElementById('item-producto').innerHTML = `<h2>Se ha añadido, Gráfica MSI RTX 3080 al carrito</h2>`
    } else if (mensajeDos == 6) {
        alert("Se ha añadido, Gráfica EVGA RTX 3090 al carrito.");
        alert("Especificaciones Gráfica EVGA RTX 3090");
        GraficaEVGARTX3090.mostrarGrafica();
        document.getElementById('item-producto').innerHTML = `<h2>Se ha añadido, Gráfica EVGA RTX 3090 al carrito</h2>`
    } else if (mensajeDos == 7) {
        alert("Se ha añadido, Teclado Asus TUF Gaming al carrito.");
        alert("Especificaciones Teclado Asus TUF Gaming")
        TecladoAsusTufGaming.mostrarTeclado();
        document.getElementById('item-producto').innerHTML = `<h2>Se ha añadido, Teclado Asus TUF Gaming al carrito</h2>`
    } else if (mensajeDos == 8) {
        alert("Se ha añadido, Teclado Logitech G413 al carrito.");
        alert("Especificaciones Teclado Logitech G413");
        TecladoLogitechG413.mostrarTeclado();
        document.getElementById('item-producto').innerHTML = `<h2>Se ha añadido, Teclado Logitech G413 al carrito</h2>`
    } else if (mensajeDos == 9) {
        alert("Se ha añadido, Teclado Hyper X Alloy al carrito.");
        alert("Especificaciones Teclado Hyper X Alloy");
        TecladoHyperXAlloy.mostrarTeclado();
        document.getElementById('item-producto').innerHTML = `<h2>Se ha añadido, Teclado Hyper X Alloy al carrito</h2>`
    }
    //Consulta al usuario si quiere comprar otro producto
    var carrito = []; //array vacio
    while (true) {
        var productos = prompt("¿Desea añadir otro producto ? \nPresione s para continuar o tecla enter para finalizar ");
        if (productos == "") break;
        respuesta();
    }
    alert("Gracias por comprar en Hardware Place")
}

//Llamada a la funcion respuesta()
respuesta();