//Creación Objeto
const monitorGigabyte240hz = {
    dimensiones: "Dimensiones: Largo: 236mm, Ancho: 558mm, Alto: 418mm",
    peso: "Peso: 6.8Kg",
    refresco: "Tasa de refresco: 240Hz",
    resolucionPixel: "Resolucion en pixeles: 1920 x 1080",
    tamaño: "Tamaño: 24.5 Pulgadas",
    precio: "Precio $117.900"
}

//Constructor del objeto monitorGigabyte240hz
class MonitorGigabyte240hz {
    constructor(dimensiones, peso, refresco, resolucionPixel, tamaño, precio) {
        this.dimensiones = dimensiones;
        this.peso = peso;
        this.refresco = refresco;
        this.resolucionPixel = resolucionPixel;
        this.tamaño = tamaño;
        this.precio = precio;
    }
    mostrarEspecificaciones() {
        this.dimensiones = alert(this.dimensiones);
        this.peso = alert(this.peso);
        this.refresco = alert(this.refresco);
        this.resolucionPixel = alert(this.resolucionPixel);
        this.tamaño = alert(this.tamaño);
        this.precio = alert(this.precio);

    }
}

let mostrarMonitorGigabyte = alert("Monitor Gigabyte 240Hz");
alert(monitorGigabyte240hz["dimensiones"]);
alert(monitorGigabyte240hz["peso"]);
alert(monitorGigabyte240hz["refresco"]);
alert(monitorGigabyte240hz["resolucionPixel"]);
alert(monitorGigabyte240hz["tamaño"]);
alert(monitorGigabyte240hz["precio"]);

const monitorLg144hz = new MonitorGigabyte240hz("Largo: 556mm, Ancho: 419mm, Alto: 180mm", "3.7Kg", "144Hz", "1920 x 1080", "23.8 Pulgadas", "Precio: $64.490");
const monitorSamsung60Hz = new MonitorGigabyte240hz("Largo: 521mm, Ancho: 405mm, Alto: 175mm", "3.2Kg", "60Hz", "1920 x 1080", "23.5 Pulgadas", "Precio: $32.900");


//Llamada al Objeto New
let mostrarMonitorLg = alert("Monitor LG 144Hz");
monitorLg144hz.mostrarEspecificaciones();
let mostrarMonitorSamsung = alert("Monitor Samsung 60Hz");
monitorSamsung60Hz.mostrarEspecificaciones();