function retirarDinero(monto) {
    const saldoDisponible = 500;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (monto <= saldoDisponible) {
                const saldoRestante = saldoDisponible - monto;
                resolve(`Retiro exitoso de $${monto}. Saldo restante: $${saldoRestante}`);
            } else {
                reject("Fondos insuficientes: Limite de retiro: $500");
            }
        }, 1500);
    });
}

retirarDinero(200)
    .then(mensaje => console.log(" ÉXITO:", mensaje))
    .catch(error => console.log(" ERROR:", error));

retirarDinero(600)
    .then(mensaje => console.log(" ÉXITO:", mensaje))
    .catch(error => console.log(" ERROR:", error));