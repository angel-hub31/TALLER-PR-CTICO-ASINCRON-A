function consultarClima(ciudad){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({ temperatura: "24 °C", condicion:"Soleado"});
        }, 1500);
    });
}

async function mostrarClima(ciudad) {
    try{
        console.log(`Consultando clima para ${ciudad}...`);
        const clima =await consultarClima(ciudad);
        console.log(`Clima en ${ciudad}: ${clima.temperatura}, ${clima.condicion}`);


    }catch(error){
        console.error("Error al obtener el clima: ", error);

    }
    
}
mostrarClima("Quito");
mostrarClima("Guayaquil");
mostrarClima("Cuenca");
