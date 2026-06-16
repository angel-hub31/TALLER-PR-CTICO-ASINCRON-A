retirarDinero(200)
    .then(mensaje => console.log(" ÉXITO:", mensaje))
    .catch(error => console.log(" ERROR:", error));

retirarDinero(600)
    .then(mensaje => console.log(" ÉXITO:", mensaje))
    .catch(error => console.log(" ERROR:", error));


function verificarEdad(edad) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (edad >= 18) {
                resolve("Acceso concedido. Bienvenido a la plataforma");

            } else {
                reject("Acceso denegado. Registro permitido solo para mayores de edad");
            }
        }, 1000);
    });

}

verificarEdad(20).then(res => console.log(res)).catch(err => console.log(err));
