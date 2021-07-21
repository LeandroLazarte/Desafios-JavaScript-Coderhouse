//Constructor de objeto
class Comprar {
    constructor(nombre, apellido, email, provincia, ciudad, direccion, categoria, marca) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.provincia = provincia;
        this.ciudad = ciudad;
        this.direccion = direccion;
        this.categoria = categoria;
        this.marca = marca;
    }

    mostrar() {
        console.log(
            "Nombre" + this.nombre +
            "Apellido" + this.apellido +
            "E-mail" + this.email +
            "Provincia" + this.provincia +
            "Ciudad" + this.ciudad +
            "Dirección" + this.direccion +
            "Categoría" + this.categoria +
            "Marca" + this.marca
        );
    }
}
//1)Se crea un arreglo donde se van a cargar los datos
let carritoArray = [];

//2) Se crea DIV de forma dinamica
let divCarrito = document.createElement("div"); // div dinamico
divCarrito.id = 'divCarrito'; //Identificador 
document.body.appendChild(divCarrito); //Inserta un nodo en estructura de DOM

//3)Se Identifican formulario y botones de HTML mediante getElementById
let error = document.getElementById('formError');
let form = document.getElementById('form');
let boton1 = document.getElementById('boton1');

//4) Se almacena todos los datos cargados desde el formulario.
form.addEventListener("submit", function(e) {
    e.preventDefault();
    let formValor = new FormData(e.target);
    let nuevoDatos = new Comprar(
        formValor.get("pNombre"),
        formValor.get("pApellido"),
        formValor.get("pEmail"),
        formValor.get("pProvincia"),
        formValor.get("pCiudad"),
        formValor.get("pDireccion"),
        formValor.get("pCategoria"),
        formValor.get("pMarca"));
    form.reset();
    carritoArray.push(nuevoDatos);
    localStorage.setItem("carrito", JSON.stringify(carritoArray)); //Convierte los datos en cadena de texto.
});

//5)Se muestran los datos cargados por el usuario
boton1.addEventListener("click", function() {
    let carritoArray = JSON.parse(localStorage.getItem("carrito")) //Consulta en LocalStorage

    if (carritoArray === null) {
        error.innerHTML = "No se ha detectado ningun dato/s";
    }

    //Recorre los datos del arreglo
    carritoArray.forEach(carrito => {
        divCarrito.innerHTML += `<p id="negrita">Detalles del Cliente</p>
        <p>Nombre: ${carrito.nombre}</p>
        <p>Apellido: ${carrito.apellido}</p>
        <p>E-mail: ${carrito.email}</p>
        <p>Provincia: ${carrito.provincia}</p>
        <p>Ciudad: ${carrito.ciudad}</p>
        <p>Dirección: ${carrito.direccion}</p>
        <p id="negrita">Detalles del Producto</p>
        <p>Categoría:${carrito.categoria}</p>
        <p>Marca:${carrito.marca}</p>`
    });
});