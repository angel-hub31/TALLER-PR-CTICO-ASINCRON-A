function consultarClima(ciudad) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (!ciudad) {
                reject("Ciudad no válida");
            } else {
                resolve({
                    ciudad: ciudad,
                    temperatura: "24 °C",
                    condicion: "Soleado"
                });

            }
        }, 1500);
    });
}

async function mostrarClima(ciudad) {
    try {
        const clima = await consultarClima(ciudad);
        console.log(`Clima en: ${clima.ciudad}`);
        console.log(`Temperatura: ${clima.temperatura}`);
        console.log(`Condicion: ${clima.condicion}`);

    } catch (error) {
        console.error("Error al obtener el clima: ", error);

    }

}
mostrarClima("Quito");
mostrarClima("Guayaquil");
mostrarClima("Cuenca");
