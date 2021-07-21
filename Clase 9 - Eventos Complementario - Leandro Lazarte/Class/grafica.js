//Constructor del objeto Tarjetas Graficas
class Grafica {
    constructor(pDimensiones, pChipsetGpu, pConsumo, pVelocidadMemoria, pTipoMemoria, pCapacidadMemoria, pPrecio) {
        this.dimensiones = pDimensiones;
        this.chipsetGpu = pChipsetGpu;
        this.consumo = pConsumo;
        this.velocidadMemoria = pVelocidadMemoria;
        this.tipoMemoria = pTipoMemoria;
        this.capacidadMemoria = pCapacidadMemoria;
        this.precio = pPrecio;
    }
    mostrarGrafica() {
        this.dimensiones = alert(this.dimensiones);
        this.chipsetGpu = alert(this.chipsetGpu);
        this.consumo = alert(this.consumo);
        this.velocidadMemoria = alert(this.velocidadMemoria);
        this.tipoMemoria = alert(this.tipoMemoria);
        this.capacidadMemoria = alert(this.capacidadMemoria);
        this.precio = alert(this.precio);

    }
}

//Objetos a partir del constructor
const GraficaZotacRTX3070 = new Grafica(
    "Dimensiones: Largo: 231mm, Ancho: 141mm, Alto: 2.0 slots",
    "Chipset: RTX 3070",
    "Consumo: 220w",
    "Velocidad: 14000 Mhz",
    "Tipo de memoria: GDDR6",
    "Capacidad de memoria: 8192mb",
    "Precio: $210.000"
);
const GraficaMSIRTX3080 = new Grafica(
    "Dimensiones: Largo: 323mm, Ancho: 140mm, Alto: 3.0 slots",
    "Chipset: RTX 3080",
    "Consumo: 340w",
    "Velocidad: 19000 Mhz",
    "Tipo de memoria: GDDR6X",
    "Capacidad de memoria: 10456mb",
    "Precio: $305.000"
);
const GraficaEVGARTX3090 = new Grafica(
    "Dimensiones: Largo: 285mm, Ancho: 111mm, Alto: 2.5 slots",
    "Chipset: RTX 3090",
    "Consumo: 350w",
    "Velocidad: 19500 Mhz",
    "Tipo de memoria: GDDR6X",
    "Capacidad de memoria: 24576mb",
    "Precio: $470.000"
);