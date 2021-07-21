const precios = [{ nombre: "Gigabyte", precio: 120000 }, { nombre: "LG", precio: 80000 }, { nombre: "Samsung", precio: 40.000 }, ];

precios.sort((a, b) => {
    if (a.precio < b.precio) {
        return -1;
    }
    if (a.precio > b.precio) {
        return 1;
    }
    return 0;
});

console.log(precios);