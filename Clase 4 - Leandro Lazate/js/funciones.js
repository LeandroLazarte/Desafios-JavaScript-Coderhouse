alert("Bienvenido a Hardware Place.");

function pregunta() {
    let mensaje = prompt("¿Desea visualizar la lista de nuestros productos? (s/n)");
    if (mensaje == "s") {
        respuesta(alert("1- Monitor Gigabyte 240Hz.\n2- Monitor LG 144 Hz.\n3- Monitor Samsung 60 Hz."));
    } else {
        alert("Usted no desea ver nuestros productos.");
    }
    return mensaje;
}


function respuesta() {
    let mensajeDos = (prompt("Eliga el producto que desea añadir al carrito."));
    if (mensajeDos == 1) {
        alert("Se ha añadido, monitor Gigabyte 240Hz al carrito.");
    } else if (mensajeDos == 2) {
        alert("Se ha añadido, monitor LG 144Hz al carrito.");
    } else if (mensajeDos == 3) {
        alert("Se ha añadido, monitor Samsung 60Hz al carrito.");
    } else {
        alert("La opción es incorrecta, vuelva a intentarlo.");
    }
}

pregunta();