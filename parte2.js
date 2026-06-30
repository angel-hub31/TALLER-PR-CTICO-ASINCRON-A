// Ejercicio 2: Verificación de Edad para Suscripción
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

// Consumo: Demostrando ambos casos para la captura de pantalla 
verificarEdad(20)
    .then(res => console.log("ÉXITO:", res))
    .catch(err => console.log("ERROR:", err));

verificarEdad(16)
    .then(res => console.log("ÉXITO:", res))
    .catch(err => console.log("ERROR:", err));