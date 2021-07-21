//Constructor del objeto Teclados
class Teclados {
    constructor(pDimensiones, pTipo, pColor, pMaterial, pTiempoRespuesta, pPrecio) {
        this.dimensiones = pDimensiones;
        this.tipo = pTipo;
        this.color = pColor;
        this.material = pMaterial;
        this.tiempoRespuesta = pTiempoRespuesta;
        this.precio = pPrecio;
    }
    mostrarTeclado() {
        this.dimensiones = alert(this.dimensiones);
        this.tipo = alert(this.tipo);
        this.color = alert(this.color);
        this.material = alert(this.material);
        this.tiempoRespuesta = alert(this.tiempoRespuesta);
        this.precio = alert(this.precio);
    }
}

//Objetos a partir del constructor
const TecladoAsusTufGaming = new Teclados(
    "Dimensiones: Ancho: 438mm, Profunidad: 131mm, Alto:39mm",
    "Tipo: Mecanico",
    "Color: Negro",
    "Material: Aluminio, plastico",
    "Tiempo de respuesta: 1ms ",
    "Precio: $11.940",
);
const TecladoLogitechG413 = new Teclados(
    "Dimensiones: Ancho: 445mm, Profunidad: 132mm, Alto:34mm",
    "Tipo: Semi-Mecanico",
    "Color: Blanco",
    "Material: Aluminio",
    "Tiempo de respuesta: 0.5ms ",
    "Precio: $9.899",
);
const TecladoHyperXAlloy = new Teclados(
    "Dimensiones: Ancho: 175mm, Profunidad: 443mm, Alto:36mm",
    "Tipo: Membrana",
    "Color: Negro",
    "Material: Plastico",
    "Tiempo de respuesta: 2ms ",
    "Precio: $4.620",
);