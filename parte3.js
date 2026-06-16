function consultarClima(Ciudad){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({ temperatura: "24 °C", condicion:"Soleado"});
        }, 1500);
    });
}

async function mostarClima(ciudad) {
    try{
        console.log(`Consultando clima para ${ciudad}...`);
        const clima =await consultarClima(ciudad);
        console.log(`Clima en ${ciudad}: ${clima.temperatura}, ${clima.condicion}`);


    }catch(error){
        console.error("Error al obtener el clima: ", error);

    }
    
}
mostarClima("Quito");