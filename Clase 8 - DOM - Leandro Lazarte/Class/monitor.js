//Constructor del objeto Monitor
class Monitor {
    constructor(pDimensiones, pPeso, pRefresco, pResolucionPixel, pTamaño, pPrecio) {
        this.dimensiones = pDimensiones;
        this.peso = pPeso;
        this.refresco = pRefresco;
        this.resolucionPixel = pResolucionPixel;
        this.tamaño = pTamaño;
        this.precio = pPrecio;
    }
    mostrarMonitor() {
        this.dimensiones = alert(this.dimensiones);
        this.peso = alert(this.peso);
        this.refresco = alert(this.refresco);
        this.resolucionPixel = alert(this.resolucionPixel);
        this.tamaño = alert(this.tamaño);
        this.precio = alert(this.precio);
    }
}

//Objetos a partir del constructor
const monitorGigabyte240hz = new Monitor("Dimensiones: Largo: 236mm, Ancho: 558mm, Alto: 418mm",
    "Peso: 6.8Kg",
    "Tasa de refresco: 240Hz",
    "Resolucion en pixeles: 1920 x 1080",
    "Tamaño: 24.5 Pulgadas",
    "Precio $117.900");
const monitorLg144hz = new Monitor(
    "Dimensiones: Largo: 556mm, Ancho: 419mm, Alto: 180mm",
    "Peso: 3.7Kg",
    "Tasa de refresco: 144Hz",
    "Resolución de pantalla: 1920 x 1080",
    "Tamaño: 23.8 Pulgadas",
    "Precio: $64.490");
const monitorSamsung60Hz = new Monitor(
    "Dimensiones: Largo: 521mm, Ancho: 405mm, Alto: 175mm",
    "Peso: 3.2Kg",
    "Tasa de refresco: 60Hz",
    "Resolución de pantalla: 1920 x 1080",
    "Tamaño: 23.5 Pulgadas",
    "Precio: $32.900");