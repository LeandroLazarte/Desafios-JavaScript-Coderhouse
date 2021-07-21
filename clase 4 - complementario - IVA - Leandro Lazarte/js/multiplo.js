function ingresoDatos() {
    var ingresarNum = parseInt(prompt("Ingresar un numero y verificar si es multiplo de 2: "));
    alert("El numero que ha ingresado es: " + ingresarNum);
    ingresarNum = multiplo(ingresarNum);
}

function multiplo(ingresarNum) {
    if ((ingresarNum % 2) == 0) {
        alert("El numero " + ingresarNum + " es multiplo por 2")
    } else {
        alert("El numero " + ingresarNum + " no es multiplo por 2")

    }
}

ingresoDatos();